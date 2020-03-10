import { Pokemon } from '../api/pokemon';

export enum PokemonActionTypes {
  SAVE_FAV_POKEMON = 'SAVE_FAV_POKEMON',
  LOAD_FAV_POKEMON = 'LOAD_FAV_POKEMON'
}

export interface PokemonStateInterface {
  favPokemon: Pokemon | null;
}

export type PokemonAction = { type: PokemonActionTypes; payload: any };
