import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonList from '../screens/PokemonList';
import PokemonFromTheList from '../screens/PokemonFromTheList';
import PokemonMoreInfo from '../screens/PokemonMoreInfo';

const Stack = createStackNavigator();

enum StackScreenNames {
  POKEMON_LIST = 'PokemonList',
  POKEMON_FROM_THE_LIST = 'PokemonFromTheList',
  POKEMON_MORE_INFO = 'PokemonMoreInfo'
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
      />
      <Stack.Screen
        name={StackScreenNames.POKEMON_MORE_INFO}
        component={PokemonMoreInfo}
      />
    </Stack.Navigator>
  );
}
