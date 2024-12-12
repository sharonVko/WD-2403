import { useState } from "react";
import"./TemperatureConverter.css"

const TemperatureConverter:React.FC = () => {


    const [celcius, setCelsius] = useState<number>(0)
    const [fahrenheit, setFahrenheit] = useState<number>(0)
    const [boilingTemperature, setBoilingTemperature]= useState<boolean>(false)

   /*  const getCelcius = (event:React.ChangeEvent<HTMLInputElement>) => {
        setCelsius(event.target.valueAsNumber || 0)
    }

 */
    const convertCelsius = (event:React.ChangeEvent<HTMLInputElement>) => {
        const valueC = event.target.valueAsNumber;
        setCelsius(valueC);
        setFahrenheit((valueC * 9/5) + 32);
        setBoilingTemperature(valueC >= 100);
    }


    const convertFahrenheit = (event:React.ChangeEvent<HTMLInputElement>) => {
        const valueF =event.target.valueAsNumber ;
        setFahrenheit(valueF);
        setCelsius((valueF -32) * 5/9);
        setBoilingTemperature(valueF >=212);
    }

    const checkBoilingTemperature =() => {
        return boilingTemperature? "The water IS boiling." : "The water is not boiling."
    }



    return ( 

        <section className="converter-wrapper">
            <fieldset>
                <legend>Schreibe Temperatur in Celsius</legend>
                <input type="number" onChange={convertCelsius} value={celcius}/>
            </fieldset>
            <fieldset>
                <legend>Schreibe Temperatur in Fahrenheit</legend>
                <input type="number" onChange={convertFahrenheit} value={fahrenheit} />
            </fieldset>
            <p className={`${boilingTemperature ? "hot-enough" : ""}`}>{checkBoilingTemperature()}</p>
        </section>
     );
}
 
export default TemperatureConverter;