import React, { useEffect, useState, useCallback } from 'react';
import getFavPokemon from '../api/pokemon';
import { Pokemon } from '../api/pokemon';
import { colors } from '../style/styleVariables';
import LoadingFull from '../components/LoadingFull';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';
import PokemonComponent from '../components/PokemonComponent';
import MoreInfoButton from '../components/MoreInfoButton';

interface Props {
  navigation: { navigate(where: string, prop: {}): {} };
}

export default function FavPokemon({ navigation }: Props) {
  // these will come from Context
  const [favPokemon, setFavPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  //This will be removed after I make the context part
  useEffect(() => {
    async function effect() {
      const pokemon = await getFavPokemon('vulpix');
      setFavPokemon(pokemon);
      setLoading(false);
    }
    effect();
  }, []);

  const buttonCallback = useCallback(() => {
    navigation.navigate('PokemonMoreInfo', {
      pokemon: favPokemon,
      bgColor: colors.first
    });
  }, [favPokemon, navigation]);

  if (loading || !favPokemon) {
    return <LoadingFull bgColor={colors.first} />;
  } else {
    return (
      <ContainerFull bgColor={colors.first}>
        <Header>Your favourite pokemon is {favPokemon.name}!</Header>
        <PokemonComponent pokemon={favPokemon} />
        <MoreInfoButton
          bgColor={colors.extra}
          buttonCallback={buttonCallback}
        />
      </ContainerFull>
    );
  }
}
