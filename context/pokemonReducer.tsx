import { SAVE_FAV_POKEMON } from './types';
import { PokemonState, PokemonAction } from './PokemonState';

export default (state: PokemonState, action: PokemonAction): PokemonState => {
  switch (action.type) {
    case SAVE_FAV_POKEMON:
      return { favPokemon: action.payload };
    default:
      return state;
  }
};
