import React, { useCallback, useContext, useEffect } from 'react';
import { colors } from '../style/styleVariables';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';
import PokemonComponent from '../components/PokemonComponent';
import ButtonComponent from '../components/ButtonComponent';
import PokemonContext from '../context/pokemonContext';

interface Props {
  navigation: { navigate(where: string, prop: {}): {} };
}

export default function FavPokemon({ navigation }: Props) {
  const pokemonContext = useContext(PokemonContext);
  const { loadFavPokemon, favPokemon } = pokemonContext;

  useEffect(() => {
    loadFavPokemon();
  }, []);

  const buttonCallback = useCallback(() => {
    navigation.navigate('PokemonMoreInfo', {
      pokemon: favPokemon,
      bgColor: colors.first
    });
  }, [favPokemon, navigation]);

  if (!favPokemon) {
    return (
      <ContainerFull bgColor={colors.first}>
        <Header>Go to Pokemon List and Choose your favourite pokemon!</Header>
      </ContainerFull>
    );
  } else {
    return (
      <ContainerFull bgColor={colors.first}>
        <Header>Your favourite pokemon is {favPokemon.name}!</Header>
        <PokemonComponent pokemon={favPokemon} />
        <ButtonComponent
          bgColor={colors.extra}
          title='More Info'
          buttonCallback={buttonCallback}
        />
      </ContainerFull>
    );
  }
}
