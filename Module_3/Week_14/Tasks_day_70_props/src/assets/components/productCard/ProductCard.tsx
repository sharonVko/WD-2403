import "./ProductCard.css"

interface ProductCardProperties{
    imgUrl : string,
    productName: string,
    price: string
}

const ProductCard: React.FC<ProductCardProperties> = (props) => {
    return ( 
        <article className="product-card">
            <img src={props.imgUrl} alt="product img"/>
            <p>{props.productName}</p>
            <p>{props.price}</p>
            <a href="#" className="buy_btn">BUY NOW</a>

        </article>
     );
}
 
export default ProductCard;