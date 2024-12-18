import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/productCard/ProductCard";

const Jenson = () => {
    return ( 
        <>
        <section className="product-single__page">
            <ProductCard title={""} imgUrl={"./IMGs/Tisch.png"}route={"/products"}/>
            <div className="description">
                <h5>Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.
                </h5>
                    
            </div>
        </section>
        <Footer/>
        </>
     );
}
 
export default Jenson;