import React, { useReducer } from 'react';
import PokemonContext from './pokemonContext';
import PokemonReducer from './pokemonReducer';
import { Pokemon } from '../api/pokemon';
import { SAVE_FAV_POKEMON } from './types';

export interface PokemonState {
  favPokemon: Pokemon | null;
}

enum PokemonActionType {
  SAVE_FAV_POKEMON = 'SAVE_FAV_POKEMON'
}
export type PokemonAction = { type: PokemonActionType; payload: any };

const PokemonState = (props: any) => {
  const initialState: PokemonState = {
    favPokemon: null
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  // Save Favourite Pokemon
  function saveFavPokemon(pokemon: Pokemon) {
    dispatch({ type: PokemonActionType.SAVE_FAV_POKEMON, payload: pokemon });
  }

  return (
    <PokemonContext.Provider
      value={{
        favPokemon: state.favPokemon,
        saveFavPokemon
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
