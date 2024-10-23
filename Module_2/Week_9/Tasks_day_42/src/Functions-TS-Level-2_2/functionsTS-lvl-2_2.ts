const firstNameInput= document.querySelector('#firstNameInput') as HTMLInputElement;
const lastNameInput= document.querySelector('#lastNameInput') as HTMLInputElement;
const emailInput= document.querySelector('#emailInput') as HTMLInputElement;
const phoneInput= document.querySelector('#phoneInput') as HTMLInputElement;
const submitBtn= document.querySelector('#submitBtn') as HTMLInputElement
const greetingOutput= document.querySelector('#greetingOutput') as HTMLButtonElement;

//defining the type for newCustomer
type TNewCustomer = {
        firstName: string;
        lastName: string;
        email?: string;
        phone?: string;
};

//- Lege zwei Funktionen an, die jeweils das gleiche Ergebnis liefern, nämlich einen Begrüßungstext als String zurückgeben, mit Begrüßungstext lautet, je nachdem ob email und/oder phone oder nichts von beiden angegeben wurden
//greetNewUser1 mit einem Parameter vom Typ NewCustomer

const greetNewUser1 = (customer:TNewCustomer):string => {
    let firstGreeting = `Hello ${customer.firstName} ${customer.lastName}.`;
    if (customer.email && customer.phone) {
        firstGreeting += `We will conntact you via ${customer.email} and ${customer.phone}.`;
    } else if (customer.email) {
        firstGreeting += `We will contact you via ${customer.email}.`;

    }else if (customer.phone) {
        firstGreeting += `We will contact you via ${customer.phone}.`;
    }else {
        firstGreeting += `We will not contact you.`
    }
    return firstGreeting;
}

//greetNewUser2 mit 4 Parametern (firstName, lastName, email, phone)

const greetNewUser2 = (firstName:string, lastName:string, email?:string, phone?:string):string => {
    let welcomeGreeting = `Hello ${firstName} ${lastName}.`;
    if(email && phone) {
        welcomeGreeting += `We will contact you via ${email} and ${phone}.`;
    } else if(email) {
        welcomeGreeting += `We will contact you via ${email}.`;
    } else if (phone) {
        welcomeGreeting += `We will contact you via ${phone}.`;
    } else {
        welcomeGreeting += `We will not contact you.`;
    }
    return welcomeGreeting;
};

console.log(firstNameInput,lastNameInput,phoneInput,emailInput,submitBtn,greetingOutput,greetNewUser1,greetNewUser2);

//ein Objekt vom Typ NewCustomer wird angelegt
//greetNewUser1 wird aufgerufen , das Ergebnis von greetNewUserVar1 wird auf die Konsole geloggt 
//greetNewUser2 wird aufgerufen, das Ergebnis von greetNewUserVar2 wird im HTML unterhalb des Submit-Buttons ausgegeben
submitBtn?.addEventListener('click', () => {
    const newCustomer: TNewCustomer = { /* object of TNewCustomer, catching each input value */
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
    };
    console.log(greetNewUser1(newCustomer)); /* console returns every input */
    greetingOutput.innerHTML = greetNewUser2(firstNameInput.value, lastNameInput.value, emailInput.value, phoneInput.value); /* user inputs are shown in #greetingoutput section of html */
});