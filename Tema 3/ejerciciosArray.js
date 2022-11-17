//4a. Escriba un programa JavaScript para calcular la suma de una matriz de números
// enteros.
// Ejemplo: var array = [1, 2, 3, 4, 5, 6] Resultado esperado: 21

let sumArray = (array) => {

    //En la función vamos sumando los valores del array con un bucle que lo vaya recorriendo y añadiendo a la variable.

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
//Comprobación:

console.log(sumArray([1, 2, 3, 4, 5, 6]));

//4b. Escriba una función de JavaScript para obtener el nombre del mes a partir de
// una fecha en particular.
// Funcion( mes,año) Devuelve 30 o 31 dias

function mes(month, year) {

    //Creamos un array con los nombres de los meses en español.

    let arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    //Creamos una fecha a partir del parámetro, restándole 1 debido al return de la función que usaremos más adelante para el mes.

    let fecha = new Date(year, month - 1);

    //Devolvemos el string que se encuentre en la posición del return de la función para obtener el mes.

    return arrayMeses[fecha.getMonth()];
}
//Comprobación:

console.log(mes(12, 1990));

//6. Escriba una función de JavaScript para encontrar el valor más alto en una matriz.
// funcion[11,3,16,90] Devuelve 90

//Usamos el método de MATH para obtener el máximo de una cadena o lista, usando como primer argumento ..., que indicará que lo que va a entrar es
//únicamente un array.

let max = (array) => Math.max(...array);

//Comprobación

console.log(max([11, 3, 16, 90]));

// 8a. Escriba una función de JavaScript para obtener la diferencia entre dos fechas en
// días.
// Funcion(fecha1, fecha2) Devuelve la diferencia de dias 

function dayDiff(fecha1, fecha2) {

    //Guardamos ambas fechas en objetos Date

    let date1 = new Date(fecha1);
    let date2 = new Date(fecha2);

    //Estos objetos poseen la capacidad de poder ser restados, lo que dará una diferencia en un formato de fecha, para sacar los días, usamos
    //las operaciones aritméticas correspondientes.

    return `${Math.floor((date2 - date1) / (1000 * 60 * 60 * 24))} días entre ambas fechas`;

}

//Comprobación

console.log(dayDiff("2017-12-23", "2020-10-10"));

// 18. Escriba una función de JavaScript para calcular el producto de valores en una
// matriz

let multArray = (array) => {

    //En la función vamos multiplicando los valores del array con un bucle que lo vaya recorriendo y añadiendo a la variable.
    //¡Cuidado con inicializar a 0!
    let mult = 1;
    for (let i = 0; i < array.length; i++) {
        mult *= array[i];
    }
    return mult;
}

//Comprobación:

console.log(multArray([1, 2, 3, 4, 5, 6]));

// 31. Escriba una función de JavaScript para obtener el número más alto de tres
// números diferentes. 

function mayorQue(num1, num2, num3) {
    //Empezamos metiendo los 3 números en un array.
    let arrayNum = [];
    arrayNum.push(num1, num2, num3);

    //Llamamos a la función que creamos previamente.

    return max(arrayNum);

}

//Comprobación

console.log(mayorQue(2, 9, 5));

// 5. Escriba un programa JavaScript simple para unir todos los elementos de una
// matriz en una cadena

let arrayToString = (array) => {

    //Creamos un string vacío
    let cadena = "";

    //Hacemos un concat indicando que vamos a concatenar todo el contenido de un array

    return cadena.concat(...array);
}

//Comprobación

console.log(arrayToString(['a', 'b', 'c', 'd', 'e']));

// 8b. Escriba un programa JavaScript para encontrar el elemento más frecuente de
// una matriz.

function moreOcurrences(array) {

    //Creamos en primer lugar un array asociativo vacío que irá conteniendo el mayor número de ocurrencias y una variable
    let ocurrencias = {};

    //En primer lugar con un map, vamos inicializando los valores del array asociativo
    array.map(x => {
        ocurrencias[x] = 0;
    })

    //En segundo lugar, vamos sumando 1 al valor del array asociativo para cada coincidencia

    array.map(x => {
        ocurrencias[x] += 1;
    })

    //Creamos una variable para guardar el carácter del array y el número de veces que se repite

    maxChar = '';
    numOcu = 0;

    //Y hacemos un bucle for-in

    for (let key in ocurrencias) {
        let ocu = ocurrencias[key];
        if (ocu > numOcu) {
            numOcu = ocu;
            maxChar = key;
        }
    }

    return `${maxChar} es el carácter más repetido con ${numOcu} ocurrencias encontradas.`;
}

//Comprobación:

console.log(moreOcurrences(['a', 'b', 'a', 'c', 'b', 'a']));

// 31. Escriba una función de JavaScript para eliminar un elemento específico de una
// matriz.
// Remueve ([2,4,5,9],5) Devuelve [2,4,9]

let remove = (array, deleteValue) =>{
    array.splice(array.indexOf(deleteValue), 1);
    return array;
} 

//Comprobación:

console.log(remove([2,4,5,9], 5));
