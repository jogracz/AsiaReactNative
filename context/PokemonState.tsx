import React, { useReducer } from 'react';
import PokemonContext from './pokemonContext';
import PokemonReducer from './pokemonReducer';
import { Pokemon } from '../api/pokemon';
import {
  PokemonActionTypes,
  PokemonStateInterface
} from './PokemonContextUtils';
import { AsyncStorage } from 'react-native';

const PokemonState = (props: any) => {
  const initialState: PokemonStateInterface = {
    favPokemon: null
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  const POKEMON_STORAGE_KEY = 'FAV_POKEMON';

  // Load Favourite Pokemon
  async function loadFavPokemon() {
    try {
      const fpokemon = await AsyncStorage.getItem(POKEMON_STORAGE_KEY);
      dispatch({
        type: PokemonActionTypes.LOAD_FAV_POKEMON,
        payload: JSON.parse(fpokemon)
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Save Favourite Pokemon
  async function saveFavPokemon(pokemon: Pokemon) {
    try {
      await AsyncStorage.setItem(POKEMON_STORAGE_KEY, JSON.stringify(pokemon));
      dispatch({ type: PokemonActionTypes.SAVE_FAV_POKEMON, payload: pokemon });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <PokemonContext.Provider
      value={{
        favPokemon: state.favPokemon,
        loadFavPokemon,
        saveFavPokemon
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
