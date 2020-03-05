import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropRow from '../components/PropRow';
import { Pokemon } from '../api/pokemon';
import { colors } from '../style/styleVariables';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';

interface Props {
  route: { params: { favPokemon: Pokemon } };
}

export default function FavMoreInfo({ route }: Props) {
  const { favPokemon }: { favPokemon: Pokemon } = route.params;
  const abilities = favPokemon.abilities.filter(a => !a.is_hidden);

  return (
    <ContainerFull bgColor={colors.first}>
      <Header>More on {favPokemon.name}!</Header>
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
    </ContainerFull>
  );
}

const stylesMore = StyleSheet.create({
  pictures: {
    flexDirection: 'row'
  }
});

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 10
  },
  propCard: {
    width: 160
  },
  pokeListElement: {
    marginTop: 20
  }
});
