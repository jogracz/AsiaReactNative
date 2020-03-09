import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { getAllPokemons } from '../api/pokemon';
import { Pokemon } from '../api/pokemon';
import { colors } from '../style/styleVariables';
import LoadingFull from '../components/LoadingFull';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';
import PokemonListRow from '../components/PokemonListRow';

interface Props {
  navigation: { navigate(where: string, prop: {}): {} };
}

const keyExtractor = ({ name }: { name: string }): string => name;

export default function PokemonList({ navigation }: Props) {
  const step = 20;
  const [batchStart, setBatchStart] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<ReadonlyArray<Pokemon>>([]);

  useEffect(() => {
    const effect = async () => {
      const allPokemons = await getAllPokemons(batchStart, step);
      setPokemons([...(allPokemons ?? [])]);
      setLoading(false);
      if (allPokemons) setBatchStart(batchStart + step);
    };
    effect();
  }, []);

  const retrieveIdFromUrl = (url: string): string => {
    const urlChopped = url.split('/');
    const id = urlChopped[urlChopped.length - 2];
    return id;
  };

  const goToMoreCallback = useCallback(
    pokemonName => {
      navigation.navigate('PokemonFromTheList', { pokemonName });
    },
    [navigation]
  );

  const renderItem = ({ item }: { item: Pokemon }) => {
    const id = retrieveIdFromUrl(item.url);
    return (
      <PokemonListRow
        pokemonId={id}
        pokemonName={item.name}
        onPokemonListRowClicked={goToMoreCallback}
      />
    );
  };

  const getMorePokemons = async () => {
    const morePokemons = await getAllPokemons(batchStart, step);
    if (morePokemons) {
      setPokemons([...pokemons, ...morePokemons]);
      setBatchStart(batchStart + step);
    }
  };

  if (loading) {
    return <LoadingFull bgColor={colors.extra} />;
  } else {
    return (
      <ContainerFull bgColor={colors.extra}>
        <Header>Pokemon List</Header>
        <FlatList
          style={styles.list}
          data={pokemons}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onEndReached={() => {
            getMorePokemons();
          }}
          onEndReachedThreshold={0.2}
        />
      </ContainerFull>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    marginLeft: 10
  }
});
