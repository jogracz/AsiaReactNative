import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { getAllPokemons } from '../api/pokemon';
import { Pokemon } from '../api/pokemon';
import { colors } from '../style/styleVariables';
import LoadingFull from '../components/LoadingFull';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';

interface Props {
  navigation: { navigate(where: string, prop: {}): {} };
}

const keyExtractor = ({ name }: { name: string }): string => name;

export default function PokemonList({ navigation }: Props) {
  const step = 20;
  const [batchStart, setBatchStart] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<ReadonlyArray<Pokemon>>([]);
  const [favourite, setFavourite] = useState(null);

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
      <Text
        style={styles.pokemonListTextElement}
        onPress={() => goToMoreCallback(item.name)}
      >
        {id}. {item.name}
      </Text>
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
          onEndReachedThreshold={0.5}
        />
      </ContainerFull>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    marginLeft: 10
  },
  pokemonListTextElement: {
    marginBottom: 30,
    marginLeft: 30,
    color: colors.light,
    fontSize: 24,
    fontWeight: '300'
  }
});
