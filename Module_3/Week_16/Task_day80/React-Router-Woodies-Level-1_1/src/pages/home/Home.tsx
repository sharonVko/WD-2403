import "./Home.css"
import { Link} from 'react-router-dom';

const Home = () => {
    return ( 
        <section className="home-section">
            <img className="pink-bg" src="./IMGs/pinkRectangle.png" alt="pink backround" />
            <article>
                <div className="text">
            <h2>Are you looking for <span>wooden furniture</span> for your place?</h2>
            <h1>This is the Right Place</h1>
            <Link to={"/products"}>
            <button className="btn">Explore Categories</button>
            </Link>
            </div>
            <div>
                <img src="./IMGs/Home.png" alt="Table img" />
            </div>
            </article>
        </section>
     );
}
 
export default Home;