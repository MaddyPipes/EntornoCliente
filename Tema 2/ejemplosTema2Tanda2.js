// 8. Escriba un programa JavaScript en el que el programa tome un número entero
// aleatorio entre 1 y 10, luego se le pedirá al usuario que ingrese un número
// aproximado. Si la entrada del usuario coincide con el número de conjetura, el
// programa mostrará un mensaje "Buen trabajo"; de lo contrario, mostrará un mensaje
// "No coincide".
document.write("<h3>Ejercicio 8:</h3>");

let randomNumber = Math.floor(Math.random() * 10) + 1;

if (randomNumber === parseInt(prompt(`Introduce el número ${randomNumber}:`, ""))){
    alert("¡Buen trabajo!");
    document.write("El número coincide.")
}
else
    alert("No coincide");
    document.write("El número no coincide.")

// 9. Escriba un programa JavaScript para calcular los días que quedan hasta la
// próxima Navidad.
document.write("<h3>Ejercicio 9:</h3>");

let today = new Date();
let thisYear = today.getFullYear();

if (today.getMonth() == 11 && today.getDate() > 25) {
    thisYear = thisYear + 1;
}

let christmasDate = new Date(thisYear, 11, 25);
let dayMilli = 1000 * 60 * 60 * 24;

let remainingDays = Math.ceil((christmasDate.getTime() - today.getTime()) / (dayMilli))

document.write(`Quedan <span style="color: red">${remainingDays} días</span> para la siguiente Navidad.`);

// 10. Escriba un programa JavaScript para calcular la multiplicación y división de dos
// números (entrada del usuario).
document.write("<h3>Ejercicio 10:</h3>");

let numA = parseInt(prompt("Introduce el primer número:"));
let numB = parseInt(prompt("Introduce el segundo número:"));

let ej10 = (a, b) => {
    document.write(`Multiplicación de ambos números: ${numA*numB}`);
    document.write("<br>")
    document.write(`División de ambos números: ${numA/numB}`);
 }

 ej10(numA, numB);

//  11. Escriba un programa JavaScript para convertir temperaturas desde y hacia
// Celsius, Fahrenheit.
// [Fórmula: c / 5 = (f-32) / 9 [donde c = temperatura en Celsius yf = temperatura en
// Fahrenheit]
// Salida esperada :
// 60 ° C es 140 ° F
// 45 ° F es 7.222222222222222 ° C
document.write("<h3>Ejercicio 11:</h3>");

let temp = prompt("Introduce la temperatura: ");

// 13. Escriba un ejercicio de JavaScript para crear una variable con un nombre
// definido por el usuario.

let userVar = (window[prompt("Introduce un nombre para la variable.","")] = "buena esa");

document.write(userVar);
 




