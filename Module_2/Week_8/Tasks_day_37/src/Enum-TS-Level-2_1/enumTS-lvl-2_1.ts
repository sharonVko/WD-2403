console.log("practice enums");

//Definiere ein Enum HtmlError mit folgenden HTML-Error-Codes

enum HtmlError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError= 500
};
console.log(HtmlError); /* console returns: {200: 'OK', 300: 'Redirect', 400: 'BadRequest', 500: 'InternalServerError', OK: 200, Redirect: 300, BadRequest: 400, InternalServerError: 500} */

console.log(HtmlError.BadRequest); /* console returns: 400 */

const showHtmlError = () => {
     const randomNumber = Math.floor(Math.random() * 5) + 1 /* damit die 5 included ist */
     console.log(randomNumber);
     if (randomNumber === 0 || 
        randomNumber === 1 ||
        randomNumber === 2 ){
            console.log(HtmlError.OK);
            
        } else if (randomNumber === 3){
            console.log(HtmlError.Redirect);
            
        }else if ( randomNumber === 4){
            console.log(HtmlError.BadRequest);
            
        }else {
            console.log(HtmlError.InternalServerError);
        }
};

showHtmlError();

