import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FavPokemon from './components/FavPokemon';
import PokemonList from './components/PokemonList';
import NativeModule from './components/NativeModule';

const Stack = createStackNavigator();
const TabNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'FavPokemon') {
              iconName = 'md-heart';
            } else if (route.name === 'PokemonList') {
              iconName = 'md-paw';
            } else if ((route.name = 'NativeModule')) {
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
        <TabNav.Screen name='FavPokemon' component={FavPokemon} />
        <TabNav.Screen name='PokemonList' component={PokemonList} />
        <TabNav.Screen name='NativeModule' component={NativeModule} />
      </TabNav.Navigator>
      {/* <Stack.Navigator initialRouteName='FavPokemon'>
        <Stack.Screen
          name='FavPokemon'
          component={FavPokemon}
          options={{ title: 'My Favourite Pokemon' }}
        />
        <Stack.Screen
          name='PokemonList'
          component={PokemonList}
          options={{ title: 'List Of Pokemons' }}
        />
        <Stack.Screen name='NativeModule' component={NativeModule} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    backgroundColor: 'yellow',
    width: 150,
    height: 150,
    marginTop: 30,
    marginBottom: 10
  },
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: 'orange'
  }
});
