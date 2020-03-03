interface Pokemon {
  name: string;
  weight: number;
  height: number;
  base_experience: number;
  sprites: [object];
}

export default async function getFavPokemon(favPokemonName) {
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

export async function getAllPokemons(offset, limit) {
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
