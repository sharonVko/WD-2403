import { Link } from "react-router-dom";
import "./SingleView.css"

const SingleView = () => {
    return ( 
        <section className="single-view__section">
            <p>single-view</p>
            <Link to={"/article"}>Go to articles</Link>
        </section>
     );
}
 
export default SingleView;