import { Link } from "react-router-dom";
import "./ProductCard.css"

interface ICardProps {
    title: string;
    imgUrl: string;
    route: string
}

const ProductCard:React.FC<ICardProps> = ({title, imgUrl, route
}) => {
    return ( 
        <article className="product-card">
            <h4>{title || ""} </h4> {/* to use for single product pages without text as well */}
            <img src={imgUrl} alt={title} />
            <Link to={route}>
                <button type="button" className="btn">Shop now</button>
            </Link>
        </article>
     );
}
 
export default ProductCard;