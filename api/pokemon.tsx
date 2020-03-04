interface Pokemon {
  name: string;
  weight: number;
  height: number;
  base_experience: number;
  sprites: [object];
  url: string;
}

export default async function getFavPokemon(
  favPokemonName: string
): Promise<Pokemon> {
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

export async function getAllPokemons(
  offset: number,
  limit: number
): Promise<ReadonlyArray<Pokemon>> {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
}
