import "./CarListOutput.css"
import cars from"../../../cars.json"

import SingleCarPreview from '../singleCarPreview/SingleCarPreview';

console.log("cars",cars);

const CarListOutput = () => {
    return ( 
        <section className="car-list-output"> 
        
        <article className="grid"> {
            cars.map((singleCar,index) => (
                <SingleCarPreview key={index} singleCar= {singleCar}/>
            ))
        }
        </article>
        </section> 
     );
    
     
}
 
export default CarListOutput;