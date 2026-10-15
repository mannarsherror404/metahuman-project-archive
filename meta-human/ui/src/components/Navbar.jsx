import { Link } from "react-router"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="site-navbar" aria-label="Primary">
      <Link className="site-brand" to="/">MetaHuman</Link>
      <div className="site-nav-links">
        <Link to="/">Home</Link>
        <Link to="/system-files">Features</Link>
        <Link to="/project">Project Matrix</Link>
        <Link to="/about">About Us</Link>
      </div>
    </nav>
  )
}

export default Navbar
