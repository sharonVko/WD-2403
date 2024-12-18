import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/productCard/ProductCard";


const Deon = () => {
    return ( 
        <>
        <section className="product-single__page">
            <ProductCard title={""} imgUrl={"./IMGs/Stuhl.png"} route={"/products"}></ProductCard>
            <div>
                <h5>Deon demonstrates what designer Dionne Holstin does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – a must to sit comfortably at your Jenson dinig table. Please take a seat.

                </h5>
            </div>
        </section>
        <Footer/>
        </>
     );
}
 
export default Deon;