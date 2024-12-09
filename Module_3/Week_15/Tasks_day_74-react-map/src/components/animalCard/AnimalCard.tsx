import React from "react";
import { Animal } from '../../../interface/interfaces';
import "./AnimalCard.css"

interface PropsAnimaldata {
    animal: Animal
}

const AnimalCard:React.FC<PropsAnimaldata> = (props) => {
    return (
        <article className="card-style">
            <div className="main-card__info">
            <h3>{props.animal.emoji}</h3>
            <h4>{props.animal.name}</h4>
            <p>{props.animal.species}</p>
            <p>{props.animal.habitat}</p>
            <p>{props.animal.diet}</p>
            <p className="p-lifespan">{props.animal.lifespan} years</p>
            </div>
            <div className="lower-card__funfacts">
                <ul>
                    <li>{props.animal.funFacts[0]}</li>
                    <li>{props.animal.funFacts[1]}</li>
                    <li>{props.animal.funFacts[2]}</li>
                </ul>
            </div>
        </article>
      );
}
 
export default AnimalCard;