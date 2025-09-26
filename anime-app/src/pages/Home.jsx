import AnimeCard from "../components/AnimeCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { fetchPokemon, fetchPokemonList } from "../services/api";
import PokemonModal from "../components/PokemonModal";

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [animes, setAnimes] = useState([]); // store Pokémon list for display
    const [allPokemon, setAllPokemon] = useState([]); // store all names
    const [pokemonCache, setPokemonCache] = useState({}); // cache of { name: details }
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null); // NEW
    const [isModalOpen, setIsModalOpen] = useState(false); // NEW

    // Load first 151 Pokémon on mount
    useEffect(() => {
        async function loadInitialPokemon() {
        setLoading(true);
        const list = await fetchPokemonList(151, 0);
        setAllPokemon(list);

        // Fetch details only once
        const details = await Promise.all(
            list.map(async (p) => {
            if (pokemonCache[p.name]) return pokemonCache[p.name];
            const data = await fetchPokemon(p.name);
            return data;
            })
        );

        // Build cache
        const newCache = {};
        details.forEach((d) => {
            if (d) newCache[d.name] = d;
        });
        setPokemonCache(newCache);

        setAnimes(details.filter(Boolean));
        setLoading(false);
        }
        loadInitialPokemon();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        setError("");

        if (!searchTerm) {
        setAnimes(Object.values(pokemonCache)); // show all cached
        return;
        }

        const matches = allPokemon.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (matches.length === 0) {
        setError("No matches found.");
        return;
        }

        const details = await Promise.all(
        matches.map(async (p) => {
            if (pokemonCache[p.name]) return pokemonCache[p.name];
            const data = await fetchPokemon(p.name);
            setPokemonCache((prev) => ({ ...prev, [p.name]: data }));
            return data;
        })
        );

        setAnimes(details.filter(Boolean));
    };

    const openModal = (pokemon) => {
        setSelectedPokemon(pokemon);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedPokemon(null);
        setIsModalOpen(false);
    };

    return (
        <div className="home">
        <h1>AniQuest</h1>

        <form className="search-form" onSubmit={handleSearch}>
            <input
            type="text"
            placeholder="Search for an anime..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading && <p>Loading Pokémon...</p>}

        <div className="anime-list">
            {animes.map((anime, index) => (
            <AnimeCard key={index} anime={anime} onClick={() => openModal(anime)}/>
            ))}
        </div>
        {isModalOpen && (
        <PokemonModal 
        pokemon={selectedPokemon} 
        onClose={closeModal} 
        />
        )}
        </div>
    );
}

export default Home;