import "./Counter.css"
import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState<number>(0)

    const addOne =() => {
        setCounter(counter +1)
    }

    const minusOne = () => {
        setCounter(counter >0 ? counter -1 : 0) /* dont't allow clicking below zero */
    }

    const resetCounter = () => {
        setCounter(0) /* reset couter back  */
    }
    return (  

        <section className="counter-wrapper">
            <div>
                <button onClick={addOne}>+</button>
                <p>{counter}</p>
                <button onClick={minusOne}>-</button>
            </div>
            <button onClick={resetCounter}>Reset</button>
        </section>
    );
}
 
export default Counter;