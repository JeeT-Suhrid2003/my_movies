
import { Link } from "react-router-dom"
function Navbar (){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" >movie app</Link>
        </div>
        <div className="navbar-Links">
            
            <Link to="/" className="nav-Link" >Home</Link>
            <Link to="/fav" className="nav-f" >favs</Link>
            
        </div>
    </nav>
}
export default Navbar