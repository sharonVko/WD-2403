import"./Form.css" 
import React, { useState } from 'react';
const Form = () => {

    const [name, setName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const getNameInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const getLastNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    }

    const getEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    return ( 

        <section className='form'>
            <input onChange={getNameInput} type="text" value={name} />
            <input onChange={getLastNameInput} type="text" value={lastName} />
            <input onChange={getEmailInput} type="email" value={email} />

            <p>Vorname: {name}</p> {/* output of input value text */}
            <p>Nachname: {lastName}</p>
            <p>Email: {email} </p>
        </section>
     );
}
 
export default Form;