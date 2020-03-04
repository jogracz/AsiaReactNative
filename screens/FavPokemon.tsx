import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import getFavPokemon from '../api/pokemon';
import PropRow from '../components/PropRow';
import { Pokemon } from '../api/pokemon';
import { colors } from '../style/styleVariables';
import LoadingFull from '../components/LoadingFull';

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
    return <LoadingFull />;
  } else {
    const types = [...favPokemon.types];
    return (
      <View style={styles.container}>
        <Text style={styles.header}>This is {favPokemon.name}!</Text>
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
        <Button title='More Info' onPress={buttonCallback} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.first,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    // backgroundColor: 'yellow',
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 10
  },
  header: {
    marginTop: 0,
    fontSize: 25,
    fontWeight: '700',
    color: colors.light
  },
  propCard: {
    width: 160,
    marginBottom: 40
  },
  pokeListElement: {
    marginTop: 20
  }
});
