import React, { useReducer } from 'react';
import PokemonContext from './pokemonContext';
import PokemonReducer from './pokemonReducer';
import { Pokemon } from '../api/pokemon';
import { SAVE_FAV_POKEMON } from './types';

const PokemonState = (props: any) => {
  const initialState = {
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
