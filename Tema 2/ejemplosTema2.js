//Ejemplo alertas y logs.

console.log("Hola Mundo!");

alert("SERGIO DUCHATE Y DEJA EL WOW");

//Ejemplo concatenación

let edad = 23, nueva_edad, incremento;

const nombre = "Rosa Garcia";

incremento = 4;

nueva_edad = edad + incremento;

console.log(`${nombre} dentro de ${incremento} años tendrá ${nueva_edad}`);

//Ejemplo arrays

let miVector = [];

miVector[0] = 1;
miVector[1] = 2;
miVector[2] = 3;
miVector[3] = 4;
miVector[4] = 5;
miVector[5] = 6;
miVector[6] = 7;
miVector[7] = 8;
miVector[8] = 9;
miVector[9] = 10;

let otroArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(miVector[3]);

console.log(otroArray[5]);

console.log(miVector);

console.log(miVector.length);

//Ejemplo condicionales

let roll = Math.floor(Math.random() * 20) + 1;

if (roll === 20) {
    console.log("¡Has sacado un 20!¡CRÍTICO!");
}
else if (roll === 1) {
    console.log("Un 1... Pifia...");
}
else
    console.log(roll);

//Ejemplo bucle "for"
let potenciasDeDos = [];
let contadorPosicion = 0;
console.time("loop")
for (i = 2; i <= 1000; i *= 2) {
    potenciasDeDos[contadorPosicion] = i;
    contadorPosicion++;
} console.log(potenciasDeDos);
console.timeEnd("loop")
//Ejemplo bucle "while"
potenciasDeDos = [];
contadorPosicion = 0;
let c = 2;
console.time("loop")
while (c <= 1000) {
    potenciasDeDos[contadorPosicion] = c;
    contadorPosicion++;
    c *= 2;
}
console.log(potenciasDeDos);
console.timeEnd("loop")
//Ejemplo bucle "do while"

potenciasDeDos = [];
contadorPosicion = 0;
c = 2;
console.time("loop")
do {
    potenciasDeDos[contadorPosicion] = c;
    contadorPosicion++;
    c *= 2;
} while (c <= 1000);
console.log(potenciasDeDos);
console.timeEnd("loop")
//Ejemplo break:

let clave = true;
let numveces = 0;

while (clave !== "bocachanclas" && clave) {
    clave = prompt("Introduce la clave ", "");
    numveces++;
    if (numveces === 2)
        break;
}
if (clave == "bocachanclas"){
    console.log("La clave es correcta");
} else {
    console.log("La clave es incorrecta");
}

//Ejemplo continue

for (i=0;i<=50;i+=3){
 if ((i%2)===0)
 continue;
 console.log(i);
}
