import { Link } from "react-router";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <nav className="header__container">
                <div className="header__logo">
                    <h1>ASO<span className="header__site">ESFOT</span></h1>
                </div>

                <div className={`header__barra ${menuOpen ? 'active' : ''}`}>
                    <div className="navegacion">
                        <Link to="/" className="navegacion__link" onClick={() => setMenuOpen(false)}>Inicio</Link>
                        <Link to="/about" className="navegacion__link" onClick={() => setMenuOpen(false)}>Nosotros</Link>
                        <Link to="/service" className="navegacion__link" onClick={() => setMenuOpen(false)}>Servicios</Link>
                        <Link to="/contact" className="navegacion__link" onClick={() => setMenuOpen(false)}>Contactos</Link>
                    </div>
                    <div className="buttons">
                        <Link to="/login" className="button" onClick={() => setMenuOpen(false)}>Login</Link>
                        <Link to="/register" className="button" onClick={() => setMenuOpen(false)}>Registro</Link>
                    </div>
                </div>

                <div className="header__hamburger" onClick={toggleMenu}>
                    <i className="fas fa-bars hamburger"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;

