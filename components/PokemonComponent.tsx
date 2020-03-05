import React, { useCallback } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import PropRow from './PropRow';
import { Pokemon } from '../api/pokemon';
import { colors } from '../style/styleVariables';

interface Props {
  pokemon: Pokemon;
}
export default function PokemonComponent({ pokemon }: Props) {
  const types = [...pokemon.types];
  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: pokemon.sprites.front_default }}
      />
      <View style={styles.propCard}>
        <PropRow left='Type:' right={types.map(t => t.type.name).join(', ')} />
        <PropRow left='Weight:' right={pokemon.weight} />
        <PropRow left='Height:' right={pokemon.height} />
        <PropRow left='Base experience:' right={pokemon.base_experience} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 10
  },
  propCard: {
    width: 160,
    marginBottom: 40
  }
});
