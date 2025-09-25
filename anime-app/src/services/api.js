const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemon(searchTerm) {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${searchTerm.toLowerCase()}`);
    if (!response.ok) throw new Error("Pokémon not found");
    return await response.json();
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return null;
  }
}

export async function fetchPokemonList(limit = 20, offset = 0) {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data.results; // array of { name, url }
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    return [];
  }
}
