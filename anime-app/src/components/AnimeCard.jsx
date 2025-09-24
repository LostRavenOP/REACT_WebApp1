

function AnimeCard({anime}) {

    function onWatchListClick() {
        alert(`Favourite clicked for anime: ${anime.title}`);
        console.log(`Favourite clicked for anime: ${anime.title}`);
    }

    return (
        <>
            <div className="anime-card">
                <div className="anime-poster">
                    <img src={anime.image_url} alt={anime.title} className="anime-image"/>
                    <div className="anime-overlay">
                        <button className="watchList-btn" onClick={onWatchListClick}>➕</button>
                    </div>
                </div>
                <div className="anime-info">
                    <h2 className="anime-title">{anime.title}</h2>
                    <p className="anime-synopsis">{anime.synopsis}</p>
                    <p className="anime-score">Score: {anime.score}</p>
                    <a href={anime.url} target="_blank" rel="noopener noreferrer" className="anime-link">More Info</a>
                </div>
            </div>
        </>
    )
}

export default AnimeCard