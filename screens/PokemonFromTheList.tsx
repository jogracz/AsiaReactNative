import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Pokemon } from '../api/pokemon';
import PokemonComponent from '../components/PokemonComponent';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';
import { colors } from '../style/styleVariables';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  route: { params: { pokemonName: string } };
}

export default function PokemonListMoreInfo({ route }: Props) {
  const heartEmpty = 'md-heart-empty';
  const heartFull = 'md-heart';
  const { pokemonName } = route.params;
  const [iconName, setIconNme] = useState(heartEmpty);

  const toggleIconName = () => {
    iconName === heartEmpty ? setIconNme(heartFull) : setIconNme(heartEmpty);
  };

  return (
    <ContainerFull bgColor={colors.extra}>
      <Header>Tap on the heart to make this your favourite pokemon!</Header>
      <Ionicons
        name={iconName}
        size={50}
        color={colors.light}
        onPress={toggleIconName}
      />
      <PokemonComponent pokemonName={pokemonName} />
    </ContainerFull>
  );
}
