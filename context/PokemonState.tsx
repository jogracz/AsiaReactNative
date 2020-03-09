import React, { useReducer } from 'react';
import PokemonContext from './pokemonContext';
import PokemonReducer from './pokemonReducer';
import { Pokemon } from '../api/pokemon';
import { SAVE_FAV_POKEMON } from './types';

export interface State {
  favPokemon: Pokemon | null;
}

export type Action = { type: 'SAVE_FAV_POKEMON'; payload: any };

const PokemonState = (props: any) => {
  const initialState: State = {
    favPokemon: null
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  // Save Favourite Pokemon
  function saveFavPokemon(pokemon: Pokemon) {
    dispatch({ type: SAVE_FAV_POKEMON, payload: pokemon });
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
