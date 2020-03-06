import { SAVE_FAV_POKEMON } from './types';

export default (state: any, action: any) => {
  switch (action.type) {
    case SAVE_FAV_POKEMON:
      return {
        ...state,
        favPokemon: action.payload
      };
    default:
      return state;
  }
};
