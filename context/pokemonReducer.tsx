import { PokemonState, PokemonAction } from './PokemonState';
import { PokemonActionType } from './PokemonState';

export default (state: PokemonState, action: PokemonAction): PokemonState => {
  switch (action.type) {
    case PokemonActionType.SAVE_FAV_POKEMON:
      return { favPokemon: action.payload };
    default:
      return state;
  }
};
