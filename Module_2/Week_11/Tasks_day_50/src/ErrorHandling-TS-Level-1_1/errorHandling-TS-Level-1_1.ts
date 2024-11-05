console.log("log");


const greetUser = ():void => {
    try{
    const username = window.prompt("Please enter your username");
    if(username === null || username.trim() === " ") { // checking if no username was entered or cuuting empty spaces 
        throw new Error("Username is missing and must be entered!")
        
    }else {
        console.log(`Welcome ${username}`);
    }    
    }catch (err) {
        console.log("Hello stranger!");
        
    }
};

greetUser()

// not clear why error in line 8 needs a longer text, if it's not shown. internal "error naming" ?





