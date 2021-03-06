import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../style/styleVariables';

interface Props {
  pokemonId: string;
  pokemonName: string;
  onPokemonListRowClicked: (pokemonName: string) => void;
}

function PokemonListRow({
  pokemonId,
  pokemonName,
  onPokemonListRowClicked
}: Props) {
  const onPress = () => {
    onPokemonListRowClicked(pokemonName);
  };

  return (
    <Text style={styles.pokemonListTextElement} onPress={onPress}>
      {pokemonId}. {pokemonName}
    </Text>
  );
}

const styles = StyleSheet.create({
  pokemonListTextElement: {
    marginBottom: 30,
    marginLeft: 30,
    color: colors.light,
    fontSize: 24,
    fontWeight: '300'
  }
});

export default React.memo(PokemonListRow);
