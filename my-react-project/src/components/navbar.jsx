
import {Link} from "react-router-dom"
import "./navbar.css"

function Navbar() {
    return(
        <>
        <h1>HELLO WORLD</h1>
            <nav className="navbar">
                <ul className="navbarList">
                    <li className="navbarListItem"><Link to="/">Home</Link></li>
                    <li className="navbarListItem"><Link to="/About">About</Link></li>
                    <li className="navbarListItem"><Link to="/Projects">Projects</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar