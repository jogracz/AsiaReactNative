import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import PropRow from '../components/PropRow';
import { Pokemon } from '../api/pokemon';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';

interface Props {
  route: { params: { pokemon: Pokemon; bgColor: string } };
}

export default function FavMoreInfo({ route }: Props) {
  const { pokemon, bgColor } = route.params;
  const abilities = pokemon.abilities.filter(a => !a.is_hidden);

  return (
    <ContainerFull bgColor={bgColor}>
      <Header>More on {pokemon.name}!</Header>
      <View style={styles.pictures}>
        <Image
          style={styles.image}
          source={{ uri: pokemon.sprites.front_shiny }}
        />
        <Image
          style={styles.image}
          source={{ uri: pokemon.sprites.back_shiny }}
        />
      </View>
      <View style={styles.propCard}>
        <PropRow left='Move:' right={pokemon.moves[0].move.name} />
        <PropRow
          left='Abilities:'
          right={abilities.map(a => a.ability.name).join(', ')}
        />
      </View>
    </ContainerFull>
  );
}

const styles = StyleSheet.create({
  pictures: {
    flexDirection: 'row'
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10
  },
  propCard: {
    width: 160
  }
});
