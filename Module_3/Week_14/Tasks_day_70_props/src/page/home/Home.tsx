// ! React-Props-Products-Level-2_1

import "./Home.css"
import ProductCard from "../../assets/components/productCard/ProductCard";

const Home = () => {
    return ( 
        <main>
        <h1>React-Props-Products-Level-2_1</h1>
        <section className="product-card__wrapper">
          <ProductCard imgUrl="./public/product-imgs/img_1-cocooil.jpg" productName="cocooil" price="$ 20"/>  
          <ProductCard imgUrl="./public/product-imgs/img_2-polaroid.jpg" productName="polaroid" price="$ 40"/>  
          <ProductCard imgUrl="./public/product-imgs/img_3-maui-shampoo.jpg" productName="shampoo" price="$ 15"/>  
        </section>
        </main>
     );
}
 
export default Home;

