import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import getFavPokemon from '../api/pokemon';
import PropRow from './PropRow';
import { Pokemon } from '../api/pokemon';
import { colors } from '../style/styleVariables';
import LoadingFull from './LoadingFull';

interface Props {
  pokemonName: string;
}
export default function PokemonComponent({ pokemonName }: Props) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function effect() {
      const data = await getFavPokemon(pokemonName);
      setPokemon(data);
      setLoading(false);
    }
    effect();
  }, []);

  if (loading || !pokemon) {
    return <LoadingFull bgColor={colors.first} />;
  } else {
    const types = [...pokemon.types];
    return (
      <View>
        <Image
          style={styles.image}
          source={{ uri: pokemon.sprites.front_default }}
        />
        <View style={styles.propCard}>
          <PropRow
            left='Type:'
            right={types.map(t => t.type.name).join(', ')}
          />
          <PropRow left='Weight:' right={pokemon.weight} />
          <PropRow left='Height:' right={pokemon.height} />
          <PropRow left='Base experience:' right={pokemon.base_experience} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 10
  },
  propCard: {
    width: 160,
    marginBottom: 40
  },
  pokeListElement: {
    marginTop: 20
  }
});
