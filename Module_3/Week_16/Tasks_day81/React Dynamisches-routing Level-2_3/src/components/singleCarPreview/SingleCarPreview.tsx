import { Link } from "react-router-dom";
import { ICar } from "../../../interfaces/ICar";


interface SingleCarPreviewProps {
    singleCar: ICar
};

const SingleCarPreview:React.FC<SingleCarPreviewProps> = ({singleCar}) => {
    return ( 
        <article className="single-preview">
            <h3>{singleCar.CarMake}</h3>
            <Link to={`carInfo/${singleCar.id}`}>Read more</Link> {/* zu carlist output! */}
        </article>
     );
}
 
export default SingleCarPreview;
