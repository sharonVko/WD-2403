import { useState } from "react";
import"./TransactionContainer.css"

interface TransactionProps{
    transaction: number,
    setTransaction: React.Dispatch<React.SetStateAction<number>>
}

const TransactionContainer: React.FC<TransactionProps> = (props) => {

    const [amount,setAmout] = useState<number>(0)

    const Einzahlung = () => {
        props.setTransaction(props.transaction + amount)
    }

    const Auszahlung = () => {
        props.setTransaction(props.transaction - amount)
    }
    const getAmount =(event:React.ChangeEvent<HTMLInputElement> ) =>
        setAmout(event.target.valueAsNumber || 0)
    return ( 

        <section className="transaction-container">
            <p>Dein Girokonto</p>
            <p>{props.transaction}€</p>
            <input onChange={getAmount} type="number"  />
            <div className="button-wrapper">
                <button onClick={Einzahlung} type="button">Einzahlen</button>
                <button onClick={Auszahlung} type="button">Auszahlen</button>
            </div>
        </section>
     );
}
 
export default TransactionContainer;