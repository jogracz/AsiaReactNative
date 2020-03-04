export interface Pokemon {
  name: string;
  weight: string;
  height: string;
  base_experience: string;
  sprites: [{ front_default: string; front_shiny: string }];
  url: string;
  types: [{ type: { name: string } }];
}

export default async function getFavPokemon(favPokemonName: string) {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${favPokemonName}`
    );
    const pokemon: Pokemon = await res.json();
    return pokemon;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllPokemons(offset: number, limit: number) {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await res.json();
    const pokemons: ReadonlyArray<Pokemon> = data.results;
    return pokemons;
  } catch (error) {
    console.error(error);
    return null;
  }
}
