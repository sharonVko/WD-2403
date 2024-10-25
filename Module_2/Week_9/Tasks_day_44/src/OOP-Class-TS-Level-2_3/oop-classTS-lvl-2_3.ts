console.log("test");
import Customer from "./Customer";

const firstCustomer = new Customer ("David", "david@gmail.com", "sunny boulevard","79659","sun city");
console.log(firstCustomer);

const invalidCustomer = new Customer("John", "john@gmail.com", "cloudy lane", "123456","cloud city") 
console.log(invalidCustomer);

// tried two options and am still able to create zip code with  more than 5 digits?!