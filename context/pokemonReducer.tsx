import { SAVE_FAV_POKEMON } from './types';
import { State, Action } from './PokemonState';

export default (state: State, action: Action): State => {
  switch (action.type) {
    case SAVE_FAV_POKEMON:
      return { favPokemon: action.payload };
    default:
      return state;
  }
};
