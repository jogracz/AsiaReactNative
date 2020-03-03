import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import styles from '../style/base';
import PropRow from '../components/PropRow';

export default function FavMoreInfo({ route, navigation }) {
  const { favPokemon } = route.params;

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
        <PropRow left='Move:' right={favPokemon.moves[0]['move']['name']} />
        <PropRow
          left='Abilities:'
          right={favPokemon.abilities.map(
            a => !a['is_hidden'] && a['ability']['name']
          )}
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
