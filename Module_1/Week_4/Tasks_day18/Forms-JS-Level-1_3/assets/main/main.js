function difference(){

    let age1 = document.getElementById("ageinput").value;
    let age2 = document.getElementById("ageinput2").value;

    let diff = age1 - age2;

    document.getElementById("output").innerText = diff;
}