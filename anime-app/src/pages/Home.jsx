import AnimeCard from "../components/AnimeCard";
import { useState } from "react"
import '../css/Home.css'

function Home() {

    const [searchTerm, setSearchTerm] = useState("");

    const animes = [
        {title: "Naruto", image_url: "https://cdn.myanimelist.net/images/anime/13/17405.jpg", synopsis: "A story about a ninja", score: 8.3, url: "https://myanimelist.net/anime/20/Naruto"},
        {title: "One Piece", image_url: "https://cdn.myanimelist.net/images/anime/6/73245.jpg", synopsis: "A story about pirates", score: 9.0, url: "https://myanimelist.net/anime/21/One_Piece"},
        {title: "Attack on Titan", image_url: "https://cdn.myanimelist.net/images/anime/10/47347.jpg", synopsis: "A story about humans vs titans", score: 9.1, url: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin"},
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchTerm}`);
    }

    return (
        <div className="home">


            <h1>AniQuest</h1>
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" placeholder="Search for an anime..." className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="anime-list">
                {animes.map((anime, index) => (
                    <AnimeCard key={index} anime={anime} />
                ))}
            </div>
        </div>
    )
}

export default Home