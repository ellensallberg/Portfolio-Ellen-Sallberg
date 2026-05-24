import "./navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return(
        <>
            <nav className="navbar">
                <ul className="navbarList">
                    <li><Link to="/" className="navbarListItem">Home</Link></li>
                    <li><Link to="/About" className="navbarListItem">About</Link></li>
                    <li><Link to="/Projects" className="navbarListItem">Projects</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar