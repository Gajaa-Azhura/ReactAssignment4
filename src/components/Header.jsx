import { Link } from "react-router-dom";
import "../App.css";

export const Header = () => (
  <header className="header">
    <div className="header-container">
      <div>
        <h1 className="header-title">MC React</h1>
        <p className="header-tagline">Building the Future of the Web</p>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </div>
  </header>
);