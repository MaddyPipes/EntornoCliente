// 8. Escriba un programa JavaScript en el que el programa tome un número entero
// aleatorio entre 1 y 10, luego se le pedirá al usuario que ingrese un número
// aproximado. Si la entrada del usuario coincide con el número de conjetura, el
// programa mostrará un mensaje "Buen trabajo"; de lo contrario, mostrará un mensaje
// "No coincide".
document.write("<h3>Ejercicio 8:</h3>");

let randomNumber = Math.floor(Math.random() * 10) + 1;

if (randomNumber === parseInt(prompt(`Introduce el número ${randomNumber}:`, ""))) {
    alert("¡Buen trabajo!");
    document.write("El número coincide.")
}
else{
    alert("No coincide");
    document.write("El número no coincide.")
}
    
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
    document.write(`Multiplicación de ambos números: ${numA * numB}`);
    document.write("<br>")
    document.write(`División de ambos números: ${numA / numB}`);
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

function tempUnitChanger(a) {
    let localNumber = a.substring(0, a.length - 1);
    let localUnit = a.slice(a.length - 1).toUpperCase();
    if (localUnit == 'C') {
        if ((localNumber * 1.8) + 32 == NaN) {
            document.write("¡Formato de temperatura incorrecto!");
        } else
            document.write(`La temperatura dada, pasada a Fahrenheit es: ${(localNumber * 1.8) + 32}`);
    } else if (localUnit == 'F') {
        if (((localNumber - 32) / 1.8) == NaN) {
            document.write("¡Formato de temperatura incorrecto!");
        } else
            document.write(`La temperatura dada, pasada a Celsius es: ${((localNumber - 32) / 1.8)}`);
    } else {
        document.write("¡Formato de temperatura incorrecto!");
    }
}

let tempeUnit = prompt("Introduce la temperatura (Recuerda usar C para Celsius y F para Fahrenheit):");
tempUnitChanger(tempeUnit);

// 12. Escriba un programa JavaScript para obtener la URL del sitio web (página de
//     carga).
document.write("<h3>Ejercicio 12:</h3>");
let actualURL = window.location;

document.write(actualURL);

// 13. Escriba un ejercicio de JavaScript para crear una variable con un nombre
// definido por el usuario.
document.write("<h3>Ejercicio 13:</h3>");

let userVar = (window[prompt("Introduce un nombre para la variable.", "")] = "buena esa");

document.write(userVar);

// 14. Escriba un ejercicio de JavaScript para obtener la extensión de un nombre de
// archivo.
document.write("<h3>Ejercicio 14:</h3>");

let fileTrimmer = (a)=> a.split('.').pop();

let newFile = prompt("Introduce el nombre completo de un archivo"+"");

document.write(`La extensión del archivo dado es .${fileTrimmer(newFile)}`);

//15. Escriba un programa JavaScript para obtener la diferencia entre un número dado
//y 13, si el número es mayor que 13 devuelva el doble de la diferencia absoluta.
document.write("<h3>Ejercicio 15: </h3>");

let num15 = parseInt(prompt("Introduce un número a tu elección, cualquiera, vaya.",""));
while(!num15){
    num15 = parseInt(prompt("Eso no es un número hombre, vamos a hacer las cosas bien, introduce otro.", ""));
}
num15 = num15-13;

if(num15 > 0){
    document.write(`La diferencia entre el número dado y 13 es ${num15} y el doble de esa diferencia es ${num15*2}`);
}else if(num15 == 0){
    document.write("El número introducido es 13, así que no hay diferencia entre ambos.");
}else if(num15 < 0){
    document.write(`La diferencia entre el número dado y 13, en valor absoluto, es ${num15-(num15*2)}`);
}

// 16. Escriba un programa JavaScript para calcular la suma de los dos números
// enteros dados. Si los dos valores son iguales, devuelve el triple de su suma.
document.write("<h3>Ejercicio 16: </h3>");

let sumaTres = (a, b) => {
    if(a === b)
        return (a+b)*3;
    else
        return a+b;
}

let num16A = parseInt(prompt("Introduce un número entero:",""));
let num16B = parseInt(prompt("Introduce otro número entero:",""));

if(num16A == num16B)
    document.write(`¡Los dos números dados eran iguales! Pues triplazo: ${sumaTres(num16A, num16B)}`);
else
    document.write(`La suma de los dos números dados es: ${sumaTres(num16A, num16B)}`);

// 17. Escriba un programa JavaScript para calcular la diferencia absoluta entre un
// número especificado y 19. Devuelve el triple de su diferencia absoluta si el número
// especificado es mayor que 19.
document.write("<h3>Ejercicio 17: </h3>");

let difTres = (a) => {
    let result = a-19;
    if(result<=0)
        return result-(result*2);
    else
        return result*19;
}

let num17 = prompt("Introduce un número que comparar con el 19: ","");
if(num17>19)
    document.write(`El triple de la diferencia entre ambos números es ${difTres(num17)}`);
else
    document.write(`La diferencia en valores absolutos entre ambos números es ${difTres(num17)}`);

// 18. Escriba un programa JavaScript para verificar dos números dados y devolver
// verdadero si uno de los números es 50 o si su suma es 50
document.write("<h3>Ejercicio 18: </h3>");

let very50 = (a, b) => {if((a+b)==50 || a == 50 || b == 50) return true; else return false}

let num18A = prompt("Introduce un número a comparar", "");
let num18B = prompt("Introduce otro número a comparar", "");

if(very50(a,b))
    document.write("Uno de los números o la suma de ambos es 50");
else
    document.write("Ninguno de los números ni la suma de ambos es 50");

// 28. Escriba un programa JavaScript para verificar si dos valores enteros dados están
// en el rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho
// rango.
document.write("<h3>Ejercicio 18: </h3>");

let isInside = (a, b) =>{
    if(a>=50 || a<=99 || b>=50 || b <= 99)
        return true;
    else
        return false;
}

let num28A = prompt("Introduce un número a evaluar: ", "");
let num28B = prompt("Introduce otro número a evaluar: ","");

document.write(`¿Se encuentra alguno de los números dados en el intervalo entre 50 y 99?: ${isInside(num28A, num28B)}`);




