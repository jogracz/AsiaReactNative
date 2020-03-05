import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { getAllPokemons } from '../api/pokemon';
import { Pokemon } from '../api/pokemon';
import { colors } from '../style/styleVariables';
import LoadingFull from '../components/LoadingFull';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';

const keyExtractor = ({ name }: { name: string }): string => name;

export default function PokemonList() {
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

  const renderItem = ({ item }: { item: Pokemon }) => {
    const id = retrieveIdFromUrl(item.url);

    return (
      <Text style={styles.pokemonListElement}>
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
    return <LoadingFull bgColor={colors.third} />;
  } else {
    return (
      <ContainerFull bgColor={colors.third}>
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
    marginLeft: 160
  },
  pokemonListElement: {
    marginTop: 40,
    color: colors.light,
    fontSize: 20,
    fontWeight: '300'
  }
});
