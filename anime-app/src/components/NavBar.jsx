import { Link } from "react-router-dom";
import "../css/NavBar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-Brand">
                <Link to="/" className="nav-logo">AnimeApp</Link>
            </div>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favourites" className="nav-link">Favourites</Link>
            </div>
        </nav>
    );
}

export default NavBar