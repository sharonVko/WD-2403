import "./Day.css"

interface IDayProps {
    dailyForecast: {
        day: string,
        temperature: string,
        condition: string,
        emoji: string
    }
}


const Day:React.FC<IDayProps> = (props) => {
    return ( 
        <article className="display-daily">
            <h3>{props.dailyForecast.day}</h3>
            <h4>{props.dailyForecast.temperature}</h4>
            <p>{props.dailyForecast.emoji}</p>
            <p>{props.dailyForecast.condition}</p>
        </article>
     );
}
 
export default Day;




