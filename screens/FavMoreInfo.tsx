import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import styles from '../style/base';
import PropRow from '../components/PropRow';
import { Pokemon } from '../api/pokemon';

interface Props {
  route: { params: { favPokemon: Pokemon } };
}

export default function FavMoreInfo({ route }: Props) {
  const { favPokemon }: { favPokemon: Pokemon } = route.params;
  const abilities = favPokemon.abilities.filter(a => !a.is_hidden);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>More on {favPokemon.name}!</Text>
      <View style={stylesMore.pictures}>
        <Image
          style={styles.image}
          source={{ uri: favPokemon.sprites.front_shiny }}
        />

        <Image
          style={styles.image}
          source={{ uri: favPokemon.sprites.back_shiny }}
        />
      </View>
      <View style={styles.propCard}>
        <PropRow left='Move:' right={favPokemon.moves[0].move.name} />
        <PropRow
          left='Abilities:'
          right={abilities.map(a => a.ability.name).join(', ')}
        />
      </View>
    </View>
  );
}

const stylesMore = StyleSheet.create({
  pictures: {
    flexDirection: 'row'
  }
});
