import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FavPokemonStack from './stacks/FavPokemonStack';
import NativeModule from './screens/NativeModule';
import PokemonListStack from './stacks/PokemonListStack';
import { colors } from './style/styleVariables';

const TabNav = createBottomTabNavigator();

export default function App() {
  enum TabScreenNames {
    FAV_POKEMON = 'FavPokemonStack',
    POKEMON_LIST = 'PokemonListStack',
    NATIVE_MODULE = 'NativeModule'
  }

  return (
    <NavigationContainer>
      <TabNav.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === TabScreenNames.FAV_POKEMON) {
              iconName = 'md-heart';
            } else if (route.name === TabScreenNames.POKEMON_LIST) {
              iconName = 'md-paw';
            } else if ((route.name = TabScreenNames.NATIVE_MODULE)) {
              iconName = 'md-cafe';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: colors.first,
          inactiveTintColor: 'gray'
        }}
      >
        <TabNav.Screen
          name={TabScreenNames.FAV_POKEMON}
          component={FavPokemonStack}
        />
        <TabNav.Screen
          name={TabScreenNames.POKEMON_LIST}
          component={PokemonListStack}
        />
        <TabNav.Screen
          name={TabScreenNames.NATIVE_MODULE}
          component={NativeModule}
        />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}
