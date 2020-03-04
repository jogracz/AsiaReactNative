import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import getFavPokemon from '../api/pokemon';
import styles from '../style/base';
import PropRow from '../components/PropRow';
import { Pokemon } from '../api/pokemon';

export default function FavPokemon({ navigation }) {
  const [favPokemon, setFavPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function effect() {
      const pokemon = await getFavPokemon('vulpix');
      setFavPokemon(pokemon);
      setLoading(false);
    }
    effect();
  }, []);

  const buttonCallback = useCallback(() => {
    navigation.navigate('FavMoreInfo', { favPokemon });
  }, [favPokemon, navigation]);

  if (loading || !favPokemon) {
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
        <View style={styles.propCard}>
          <PropRow
            left='Type:'
            right={favPokemon.types.map(type => type['type']['name'])}
          />
          <PropRow left='Weight:' right={favPokemon.weight} />
          <PropRow left='Height:' right={favPokemon.height} />
          <PropRow left='Base experience:' right={favPokemon.base_experience} />
        </View>
        <Button title='More Info' onPress={buttonCallback} />
      </View>
    );
  }
}
