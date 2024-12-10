import CardWrapperMain from '../../components/cardWrapperMain/CardWrapperMain';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import "./Home.css"

const Home = () => {
    return ( 
        <div>
            <Header/>
            <CardWrapperMain/>
            <Footer/>
        </div>
     );
}
 
export default Home;