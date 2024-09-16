 const infoElement = document.getElementById("info")
 infoElement.innerHTML = "<h1>Hello World</h1>  <h2>How are you?</h2>" 
 /* über innerHTML h1 und h2 hinzugefügt  */

document.getElementById("container").innerHTML ="<p>start of element</p>" /* "container in HTML file erstellt, über innerHTMl p-tag eingefügt" */

document.body.append("endOfElement")
// document.write("end of the element") 
/* Warning: Use of the document.write() method is strongly discouraged. */