import "./FAQ.css"
import { useState } from "react";

const FAQ = () => {

    const [answer, setAnswer] = useState<boolean>(false)

    const displayAnswer = () => {

        setAnswer(!answer)
    }

    return ( 

        <section className="faq-wrapper">
            <div className="question-wrapper">
                <p>Why is React great?</p>
                <button className="q-btn" onClick={displayAnswer}>^</button>
                <hr />
            </div>
            <div className="answer-wrapper">
            <p className= {`${answer&&"answer-display"}`}>Fast learning Curve</p>
            </div>
        </section>
     );
}
 
export default FAQ;