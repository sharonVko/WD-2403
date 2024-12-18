import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/productCard/ProductCard";

    
    const Krisha = () => {
        return (  
            <>
            <section className="product-single__page">
                <ProductCard title={""} imgUrl={"./IMGs/Schuesseln.png"} route={"/products"}>
                </ProductCard>
                <div className="description">
                    <h5>
                    Krisha demonstrates what designer Lara Orby does best.  Clean lines and an oak finish nail this season's trends. The perfect match for our beautiful Jenson  dining table. Dinner mood? We serve.
                    </h5>
                </div>
            </section>
            <Footer/>
            </>
        );
    }
     
    export default Krisha;