import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavMain from './FavMain';
import FavMoreInfo from './FavMoreInfo';

const Stack = createStackNavigator();

enum StackScreenNames {
  FAV_MAIN = 'FavMain',
  FAV_MORE_INFO = 'FavMoreInfo'
}

export default function FavPokemon() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackScreenNames.FAV_MAIN}
        component={FavMain}
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
