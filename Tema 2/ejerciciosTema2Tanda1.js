//Ejercicio 1
document.write("<h3>Ejercicio 1:</h3>");
let nombre = "Alex";
let edad = 31;

document.write(`Nombre: ${nombre} <br> Edad: ${edad}`);

//Ejercicio 2
document.write("<h3>Ejercicio 2:</h3>");
let nombreEmpleado = "Alejandro Ceballos Cuevas";
let sueldo = 1000;

document.write(`Nombre empleado: ${nombreEmpleado} <br>Salario: ${edad}`);

//Ejercicio 3
document.write("<h3>Ejercicio 3:</h3>");
let nombreUsuario = prompt("Introduce tu nick:","");
let email = prompt("Introduce tu email:","");

document.write(`Usuario: ${nombreUsuario} <br> Email: ${email}`);

//Ejercicio 4
document.write("<h3>Ejercicio 4:</h3>");
let lado = prompt("Introduce el lado de un cuadrado para calcular su perímetro:","");

document.write(`Perímetro: ${lado*4}`);

//Ejercicio 5
document.write("<h3>Ejercicio 5:</h3>");

let numero1 = prompt("Introduce el primer número:","");
let numero2 = prompt("Introduce el segundo número:","");
let numero3 = prompt("Introduce el tercer número:","");
let numero4 = prompt("Introduce el cuarto número:","");

document.write(`Suma de los dos primeros números: ${numero1 + numero2}<br>Producto de los dos últimos números: ${numero3*numero4}`);

//Ejercicio 6
document.write("<h3>Ejercicio 6:</h3>");

let notas = [];

notas[0] = prompt("Introduce la nota del alumno 1:","");
notas[1] = prompt("Introduce la nota del alumno 1:","");
notas[2] = prompt("Introduce la nota del alumno 1:","");

if((notas[0]+notas[1]+notas[2])/notas.length >= 7)
    alert("Promocionado.")
else
    alert("No Promocionado.");

let pass = prompt("Introduce una contraseña:","");
if(pass == prompt("Repite la contraseña:",""))
    document.writeln("La contraseña ha sido cambiada con éxito");
else
    document.writeln("La contraseña no coincide.");