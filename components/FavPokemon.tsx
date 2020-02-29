import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const FavPokemon = ({ navigation }) => {
  const [favPokemon, setFavPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const getFavPokemon = async favPokemonName => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${favPokemonName}`
      );
      const data = await res.json();

      setFavPokemon(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFavPokemon('pikachu');
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>This is {favPokemon.name}!</Text>
        <Image
          style={styles.image}
          source={{ uri: favPokemon.sprites.front_default }}
        />
        <View>
          <View style={styles.propRow}>
            <Text style={styles.properties}>Type: </Text>
            <Text style={styles.properties}>
              {favPokemon.types.map(type => type['type']['name'])}
            </Text>
          </View>
          <View style={styles.propRow}>
            <Text style={styles.properties}>Weight: </Text>
            <Text style={styles.properties}>{favPokemon.weight}</Text>
          </View>
          <View style={styles.propRow}>
            <Text style={styles.properties}>Height:</Text>
            <Text style={styles.properties}>{favPokemon.height}</Text>
          </View>
          <View style={styles.propRow}>
            <Text style={styles.properties}>Base experience:</Text>
            <Text style={styles.properties}>{favPokemon.base_experience}</Text>
          </View>
        </View>
        {/* <Button
          title='Go to Pokemon List'
          onPress={() => navigation.navigate('PokemonList')}
        /> */}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#59B6AE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    // backgroundColor: 'yellow',
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 10
  },
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white'
  },
  properties: {
    color: 'white',
    fontSize: 16
  },
  propRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default FavPokemon;
