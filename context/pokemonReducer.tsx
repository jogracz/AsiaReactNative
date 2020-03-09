import {
  PokemonActionTypes,
  PokemonAction,
  PokemonStateInterface
} from './PokemonContextUtils';

export default (
  state: PokemonStateInterface,
  action: PokemonAction
): PokemonStateInterface => {
  switch (action.type) {
    case PokemonActionTypes.LOAD_FAV_POKEMON:
    case PokemonActionTypes.SAVE_FAV_POKEMON:
      return { favPokemon: action.payload };
    default:
      return state;
  }
};
