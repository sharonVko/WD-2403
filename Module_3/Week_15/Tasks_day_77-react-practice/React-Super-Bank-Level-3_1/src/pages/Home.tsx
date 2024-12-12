import { useState } from "react";
import CreditCard from "../components/creditCard/CreditCardComponent";
import TransactionContainer from "../components/transactionContainer/TransactionContainer";

const Home = () => {
    const [transaction, setTransaction] = useState<number>(0)
    return ( 

        <section>
            <CreditCard transaction= {transaction}/>
            <h1>Superbank</h1>
            <TransactionContainer transaction={transaction} setTransaction={setTransaction}/>
        </section>
     );
}
 
export default Home;