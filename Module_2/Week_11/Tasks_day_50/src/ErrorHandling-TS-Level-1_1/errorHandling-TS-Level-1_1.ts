console.log("log");


const greetUser = ():void => {
    try{
    const username = window.prompt("Please enter your username");
    if(username === null || username.trim() === " ") { // checking if no username was entered or cuuting empty spaces 
        throw new Error("Username is missing and must be entered!")
        
    }else {
        console.log(`Welcome ${username}`);
    }    
    }catch (err) { // (err) placeholder for throw new error text
        console.error("Hello stranger!", err);
        
    }
};

greetUser()







