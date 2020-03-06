import React, { useState, useEffect, useCallback, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Pokemon } from '../api/pokemon';
import PokemonComponent from '../components/PokemonComponent';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';
import { colors } from '../style/styleVariables';
import { Ionicons } from '@expo/vector-icons';
import getPokemon from '../api/pokemon';
import LoadingFull from '../components/LoadingFull';
import MoreInfoButton from '../components/MoreInfoButton';
import PokemonContext from '../context/pokemonContext';

interface Props {
  route: { params: { pokemonName: string } };
  navigation: { navigate(where: string, prop: {}): {} };
}

export default function PokemonListMoreInfo({ route, navigation }: Props) {
  const pokemonContext = useContext(PokemonContext);
  const { favPokemon, saveFavPokemon } = pokemonContext;

  const heartEmpty = 'md-heart-empty';
  const heartFull = 'md-heart';
  const { pokemonName } = route.params;
  const [iconName, setIconName] = useState(heartEmpty);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function effect() {
      const data = await getPokemon(pokemonName);
      setPokemon(data);
      setLoading(false);
      if (data && favPokemon && data.name === favPokemon.name) {
        setIconName(heartFull);
      }
    }
    effect();
  }, [favPokemon]);

  const toggleIconName = () => {
    iconName === heartEmpty ? setIconName(heartFull) : setIconName(heartEmpty);
  };

  const onPress = () => {
    setIconName(heartFull);
    saveFavPokemon(pokemon);
  };

  const buttonCallback = useCallback(() => {
    navigation.navigate('PokemonMoreInfo', { pokemon, bgColor: colors.extra });
  }, [pokemon, navigation]);

  if (loading || !pokemon) {
    return <LoadingFull bgColor={colors.extra} />;
  } else {
    return (
      <ContainerFull bgColor={colors.extra}>
        <Header>Tap on the heart to make this your favourite pokemon!</Header>
        <View style={styles.iconView}>
          <Ionicons
            name={iconName}
            size={50}
            color={colors.light}
            onPress={onPress}
          />
        </View>
        <PokemonComponent pokemon={pokemon} />
        <MoreInfoButton
          bgColor={colors.first}
          buttonCallback={buttonCallback}
        />
      </ContainerFull>
    );
  }
}

const styles = StyleSheet.create({
  iconView: {
    marginTop: 20,
    marginBottom: 20
  }
});
