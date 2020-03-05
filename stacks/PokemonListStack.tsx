import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonList from '../screens/PokemonList';
import PokemonFromTheList from '../screens/PokemonFromTheList';
import FavMoreInfo from '../screens/FavMoreInfo';

const Stack = createStackNavigator();

enum StackScreenNames {
  POKEMON_LIST = 'PokemonList',
  POKEMON_FROM_THE_LIST = 'PokemonFromTheList'
}

export default function PokemonListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackScreenNames.POKEMON_LIST}
        component={PokemonList}
        options={{ title: 'Pokemon List' }}
      />
      <Stack.Screen
        name={StackScreenNames.POKEMON_FROM_THE_LIST}
        component={PokemonFromTheList}
        options={{ title: 'Check out this pokemon!' }}
      />
    </Stack.Navigator>
  );
}
