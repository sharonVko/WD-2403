import "./Week.css"
import Day from "../day/Day"
import weather from "../../data/WeatherData";


const Week = () => {
    return ( 
        <div className="display-week__wrapper">
            {weather.map((day, index) => (
                <Day key={index} dailyForecast={day}/>
            ))}
        </div>
     );
}
 
export default Week;