import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FavPokemon from './screens/FavPokemon';
import PokemonList from './screens/PokemonList';
import NativeModule from './screens/NativeModule';

const Stack = createStackNavigator();
const TabNav = createBottomTabNavigator();

export default function App() {
  enum TabScreenNames {
    FAV_POKEMON = 'FavPokemon',
    POKEMON_LIST = 'PokemonList',
    NATIVE_MODULE = 'NativeModule'
  }

  return (
    <NavigationContainer>
      <TabNav.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
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
          activeTintColor: '#59B6AE',
          inactiveTintColor: 'gray'
        }}
      >
        <TabNav.Screen
          name={TabScreenNames.FAV_POKEMON}
          component={FavPokemon}
        />
        <TabNav.Screen
          name={TabScreenNames.POKEMON_LIST}
          component={PokemonList}
        />
        <TabNav.Screen
          name={TabScreenNames.NATIVE_MODULE}
          component={NativeModule}
        />
      </TabNav.Navigator>
      {/* <Stack.Navigator initialRouteName='FavPokemon'>
        <Stack.Screen
          name={TabScreenNames.FAV_POKEMON}
          component={FavPokemon}
          options={{ title: 'My Favourite Pokemon' }}
        />
        <Stack.Screen
          name={TabScreenNames.POKEMON_LIST}
          component={PokemonList}
          options={{ title: 'List Of Pokemons' }}
        />
        <Stack.Screen name={TabScreenNames.NATIVE_MODULE} component={NativeModule} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
