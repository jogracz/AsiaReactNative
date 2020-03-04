import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { getAllPokemons } from '../api/pokemon';

const keyExtractor = ({ name }: { name: string }): string => name;

const PokemonList = () => {
  interface Pokemon {
    name: string;
    weight: number;
    height: number;
    base_experience: number;
    sprites: [object];
    url: string;
  }

  const step = 20;
  const [batchStart, setBatchStart] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const effect = async () => {
      const allPokemons = await getAllPokemons(batchStart, step);
      setPokemons([...allPokemons]);
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
      <Text style={styles.header}>
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
    return (
      <View style={styles.container}>
        <Text style={styles.pokemonListElement}>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Pokemon List</Text>

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
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    backgroundColor: '#EC6364',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  header: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: '700',
    color: 'white'
  },
  list: {
    width: '100%'
  },
  pokemonListElement: {
    marginTop: 30
  }
});
