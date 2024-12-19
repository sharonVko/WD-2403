import { Link, useParams } from 'react-router-dom';
import { ICar } from '../../../interfaces/ICar';
import cars from '../../../cars.json'

interface SingleCarProps {
    singleCar: ICar
}

const SingleCar:React.FC<SingleCarProps> = () => {

    const {carId} = useParams();
    const singleCar = cars.find(car => car.id.toString() === carId); if (!singleCar) { return <p>Car not found</p>; }



    return ( 
        <>
        <article className='car-details'>
            <h3>{singleCar.CarMake}</h3>
            <h4>{singleCar.carModel}</h4>
            <p>{singleCar.CarYear}</p>
            <p>Id: {singleCar.id}</p>
        </article>
        <Link to="/"> 
        <button className="car-info"> ← Back to Home</button> 
        </Link>
        </>
     );
}
 
export default SingleCar;