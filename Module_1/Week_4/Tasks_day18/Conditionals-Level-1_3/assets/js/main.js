function shisha (){

    let age2smoke = document.getElementById("ageinput").value;
    
    let ageCanSmoke = "Ja, Du kannst Shisha rauchen";

    let ageDontSmoke = "Du darfst noch nicht Shisha rauchen";
    
    if (age2smoke >= 18){
        document.querySelector("p").innerText = ageCanSmoke;
    } else {
        document.querySelector("p").innerText =
        ageDontSmoke;
    }

}