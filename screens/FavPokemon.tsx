import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import getFavPokemon from '../api/pokemon';
import PropRow from '../components/PropRow';
import { Pokemon } from '../api/pokemon';
import { colors } from '../style/styleVariables';
import LoadingFull from '../components/LoadingFull';
import ContainerFull from '../components/ContainerFull';
import Header from '../components/Header';

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
        <Header>This is {favPokemon.name}!</Header>
        <Image
          style={styles.image}
          source={{ uri: favPokemon.sprites.front_default }}
        />
        <View style={styles.propCard}>
          <PropRow
            left='Type:'
            right={types.map(t => t.type.name).join(', ')}
          />
          <PropRow left='Weight:' right={favPokemon.weight} />
          <PropRow left='Height:' right={favPokemon.height} />
          <PropRow left='Base experience:' right={favPokemon.base_experience} />
        </View>
        <View style={styles.buttonView}>
          <Button
            color={colors.fourth}
            title='More Info'
            onPress={buttonCallback}
          />
        </View>
      </ContainerFull>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 10
  },
  propCard: {
    width: 160,
    marginBottom: 40
  },
  pokeListElement: {
    marginTop: 20
  },
  buttonView: {
    marginBottom: 70,
    marginTop: 50
  }
});
