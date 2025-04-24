import { Link } from "react-router-dom";

export const Header = () => (
  <header className="bg-indigo-600 text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-extrabold tracking-tight">MC React</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-indigo-200 transition">Home</Link>
        <Link to="/contact" className="hover:text-indigo-200 transition">Contact</Link>
      </nav>
    </div>
  </header>
);
export default Header;  