import"./DayNightSection.css"
import { useState } from "react";

const DayNightSection = () => {

    const [mode, setMode] = useState<boolean>(true)

    const turnNight = () => {
        setMode(!mode)
    }


    return ( 
        <section className={`${mode&&"night"}`}>
            <h2>Day</h2>
            <button onClick={turnNight}>Change to Night</button>
        </section>
     );
}
 
export default DayNightSection;