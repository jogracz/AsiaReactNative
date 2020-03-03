import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { getAllPokemons } from '../api/pokemon';

const keyExtractor = ({ name }) => name;

const PokemonList = () => {
  const step = 20;
  const [batchStart, setBatchStart] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const effect = async () => {
      const allPokemons = await getAllPokemons(batchStart, step);
      setPokemons(allPokemons);
      setLoading(false);
      setBatchStart(batchStart + step);
    };
    effect();
  }, []);

  const renderItem = ({ item }) => {
    //const matchRes = item.url.match('(pokemon\\/{1}(\\d+)\\/{1})', 'gi');

    // this is more readable than regex
    const urlChopped = item.url.split('/');
    const id = urlChopped[urlChopped.length - 2];
    return (
      <Text style={styles.header}>
        {id}. {item.name}
      </Text>
    );
  };

  const scrolledCloseToEnd = ({
    layoutMeasurement,
    contentOffset,
    contentSize
  }) => {
    return (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 200
    );
  };

  const getMorePokemons = async () => {
    const morePokemons = await getAllPokemons(batchStart, step);
    setPokemons([...pokemons, ...morePokemons]);
    setBatchStart(batchStart + step);
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
          onScroll={({ nativeEvent }) => {
            if (scrolledCloseToEnd(nativeEvent)) {
              getMorePokemons();
            }
          }}
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

export default PokemonList;
