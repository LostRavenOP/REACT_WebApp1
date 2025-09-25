import '../css/AnimeCard.css'

function AnimeCard({anime}) {

    function onWatchListClick() {
        alert(`Favourite clicked for anime: ${anime.name}`);
        console.log(`Favourite clicked for anime: ${anime.name}`);
    }

    const toTitleCase = (str) => {
        if (typeof str === 'string' && str.length > 0) {
            return str.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            ).join(' ');
        }
        return '';
        };

    return (
        <>
            <div className="anime-card">
        <div className="anime-poster">
          <img
            src={anime.sprites?.front_default}  // Pokémon sprite instead of anime poster
            alt={anime.name}
            className="anime-image"
          />
          <div className="anime-overlay">
            <button className="watchList-btn" onClick={onWatchListClick}>
              ➕
            </button>
          </div>
        </div>

        <div className="anime-info">
          <h2 className="anime-title">{toTitleCase(anime.name)}</h2>

          {/* No synopsis in PokéAPI, so we'll fake one with stats */}
          <p className="anime-synopsis">
            Height: {anime.height}, Weight: {anime.weight}
          </p>

          {/* Pokémon don’t have "score", so let’s show base experience */}
          <p className="anime-score">Base XP: {anime.base_experience}</p>

          {/* Link back to Pokédex entry URL */}
          <a
            href={`https://pokeapi.co/api/v2/pokemon/${anime.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="anime-link"
          >
            More Info
          </a>
        </div>
      </div>
        </>
    )
}

export default AnimeCard