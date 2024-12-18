import "./Header.css"
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
            <Link to={"/"}>
            <div><img src="/IMGs/Logo.png" alt="Logo" /></div>
            </Link>
                <div>
                    <nav>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/about"}>About us</NavLink>
                        <NavLink to={"/products"}>Products</NavLink>
                    </nav>
                </div>
        </header>
     );
}
 
export default Header;