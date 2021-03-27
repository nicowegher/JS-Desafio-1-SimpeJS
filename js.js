let nombre = prompt("Escriba su nombre:");
// document.getElementById("someInput").value = nombre;
let apellido = prompt ("Gracias "+nombre+ ", ahora por favor escriba su apellido");
console.log(nombre);
alert("Perfecto, sus datos completos son: "+ nombre + " " + apellido +". Ya puede ingresar al sitio web." ) ;
console.log(apellido);
let fullname = nombre +" "+ apellido;
console.log(fullname);
document.getElementById("fullName").innerHTML = fullname;