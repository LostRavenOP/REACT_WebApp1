import '../css/Modal.css';

function PokemonModal({ pokemon, onClose }) {
  if (!pokemon) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        
        <h2>{pokemon.name.toUpperCase()}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        <h3>Types:</h3>
        <ul>
          {pokemon.types.map((t, i) => (
            <li key={i}>{t.type.name}</li>
          ))}
        </ul>

        <h3>Abilities:</h3>
        <ul>
          {pokemon.abilities.map((a, i) => (
            <li key={i}>{a.ability.name}</li>
          ))}
        </ul>

        <h3>Stats:</h3>
        <ul>
          {pokemon.stats.map((s, i) => (
            <li key={i}>{s.stat.name}: {s.base_stat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonModal;