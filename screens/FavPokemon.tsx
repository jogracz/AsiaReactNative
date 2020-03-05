import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import getFavPokemon from '../api/pokemon';
import PropRow from '../components/PropRow';
import { Pokemon } from '../api/pokemon';
import { colors } from '../style/styleVariables';
import LoadingFull from '../components/LoadingFull';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';
import PokemonComponent from '../components/PokemonComponent';

interface Props {
  navigation: { navigate(where: string, prop: {}): {} };
}

export default function FavPokemon({ navigation }: Props) {
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
    return <LoadingFull bgColor={colors.first} />;
  } else {
    const types = [...favPokemon.types];
    return (
      <ContainerFull bgColor={colors.first}>
        <Header>Your favourite pokemon is {favPokemon.name}!</Header>
        <PokemonComponent pokemonName={favPokemon.name} />
        <View style={styles.buttonView}>
          <Button
            color={colors.extra}
            title='More Info'
            onPress={buttonCallback}
          />
        </View>
      </ContainerFull>
    );
  }
}

const styles = StyleSheet.create({
  buttonView: {
    marginBottom: 70,
    marginTop: 50
  }
});
