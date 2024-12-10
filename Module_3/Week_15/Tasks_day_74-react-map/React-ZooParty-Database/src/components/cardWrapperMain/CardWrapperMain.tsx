import AnimalCard from "../animalCard/AnimalCard";
import animalList from "../../../interface/interfaces"
import "./CardWrapperMain.css"


const CardWrapperMain = () => {
    return ( 
        <section className="flex">
            {
                animalList.map((singleAnimal, index) =>(
                    
                    <AnimalCard key={index} animal={singleAnimal}/>
                ))
                }
        </section>
     );
}
 
export default CardWrapperMain;