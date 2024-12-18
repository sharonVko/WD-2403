import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return ( 
        <footer>
            <div className="contacts">
            <hr />
            <div><Link to={"/"}><img src="/IMGs/Logo.png" alt="Logo" /></Link></div>
            <p>(012) 8967453</p>
            <p>woodies@gmail.com</p>
            <p>Jakarta, Indonesia</p>
            </div>
            <p className="copyright">© 2020 WOODIES</p>
            
        </footer>
     );
}
 
export default Footer;