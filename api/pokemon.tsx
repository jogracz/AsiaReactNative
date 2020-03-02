export default async function getFavPokemon(favPokemonName) {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${favPokemonName}`
    );
    const pokemon: Pokemon = await res.json();
    return pokemon;
  } catch (error) {
    console.error(error);
  }
}

interface Pokemon {
  name: string;
  weight: number;
  height: number;
  base_experience: number;
  sprites: [object];
}
