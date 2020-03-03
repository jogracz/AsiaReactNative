import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavPokemon from '../screens/FavPokemon';
import FavMoreInfo from '../screens/FavMoreInfo';

const Stack = createStackNavigator();

enum StackScreenNames {
  FAV_POKEMON = 'FavPokemon',
  FAV_MORE_INFO = 'FavMoreInfo'
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
        name={StackScreenNames.FAV_MORE_INFO}
        component={FavMoreInfo}
        options={{ title: 'More Info' }}
      />
    </Stack.Navigator>
  );
}
