import { useNavigate } from "react-router-dom";
import { ICar } from "../../../interfaces/ICar";
import SingleCar from "../../components/singleCar/SingleCar";

interface CarInfoProps {
    singleCar: ICar
}


const CarInfo:React.FC<CarInfoProps> = ({singleCar}) => {

    const navigate = useNavigate()
    return ( 
        <section className="car-info">
            <button onClick={() => navigate(-1)}>Back</button>
            {/* <Link to="/">back</Link> */}
            <SingleCar singleCar={singleCar}/>
        </section>
     );
}
 
export default CarInfo;