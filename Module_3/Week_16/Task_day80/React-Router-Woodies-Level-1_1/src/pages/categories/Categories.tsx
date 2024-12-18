import"./Categories.css"
import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/productCard/ProductCard";

const Categories = () => {
    return ( /* in figma 'products' */
        <>
        <section className="categories-section">

            <ProductCard title={"Jenson"} imgUrl={"./IMGs/Tisch.png"}route={"/jenson"}>
            </ProductCard>
            <ProductCard title={"Deon"} imgUrl={"./IMGs/Stuhl.png"} route={"/deon"}>
            </ProductCard>
            <ProductCard title={"Krisha"} imgUrl={"./IMGs/Schuesseln.png"} route={"/krisha"}>
            </ProductCard>
            
        </section>
            <Footer/>
            </>
     );
}
 
export default Categories;