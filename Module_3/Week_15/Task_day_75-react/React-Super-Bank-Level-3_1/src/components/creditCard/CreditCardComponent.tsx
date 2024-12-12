import { CreditCard } from "react-kawaii";
import "./CreditCardComponent.css"

interface CreditProps{
    transaction: number,
    
}

const CreditCardComponent:React.FC<CreditProps> = (props) => {

    const changeMood = () => {
        if(props.transaction < 0) {
            return "sad"
        } else if (props.transaction >= 0 && props.transaction < 1000) {
            return "happy"
        } else {
            return "blissful"
        }
    }
    return (  

        <div className="credit-card">
            
            <CreditCard size={240} mood={changeMood()} color="#add2ff" />
           


 


        </div>
    );
}
 
export default CreditCardComponent;