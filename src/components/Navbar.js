import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 15px", color: "#fff" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 15px", color: "#fff" }}>About</Link>
      <Link to="/projects" style={{ margin: "0 15px", color: "#fff" }}>Projects</Link>
      <Link to="/contact" style={{ margin: "0 15px", color: "#fff" }}>Contact</Link>
    </nav>
  );
}
