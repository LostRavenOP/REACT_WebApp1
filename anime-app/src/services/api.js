const API_KEY = 123456789; // Replace with your actual API key
const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchAnimes(searchTerm) {
    try {
        const response = await fetch(`${BASE_URL}/anime?search=${searchTerm}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching animes:", error);
        return [];
    }
}