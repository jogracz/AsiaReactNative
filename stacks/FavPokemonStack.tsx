import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavPokemon from '../screens/FavPokemon';
import PokemonMoreInfo from '../screens/PokemonMoreInfo';

const Stack = createStackNavigator();

enum StackScreenNames {
  FAV_POKEMON = 'FavPokemon',
  POKEMON_MORE_INFO = 'PokemonMoreInfo'
}

export default function FavPokemonStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackScreenNames.FAV_POKEMON}
        component={FavPokemon}
        options={{ title: 'My Favourite Pokemon' }}
      />
      <Stack.Screen
        name={StackScreenNames.POKEMON_MORE_INFO}
        component={PokemonMoreInfo}
        options={{ title: 'More Info' }}
      />
    </Stack.Navigator>
  );
}
