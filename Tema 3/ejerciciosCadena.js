//4. Escriba una función de JavaScript para extraer un número específico de
// caracteres de una cadena.

//Creamos la función usando substring

let extraerCadena = (cadena, n) => cadena.substring(0, n);

//6. Escriba una función de JavaScript para ocultar direcciones de correo
// electrónico y protegerlas de usuarios no autorizados.

//Creamos una función que recorra un string desde la tercera posición hasta llegar al @ y vaya guardando el string y, por último, sustituya
//en el anterior string el contenido del creado en el bucle por ...

function hideMail(mail) {

    let cadenaAReemplazar = '';

    for (let i = 2; mail[i] != '@' || i < mail.length ; i++) {
        cadenaAReemplazar = cadenaAReemplazar.concat(mail[i]);
    }

    let hiddenMail = mail.replace(cadenaAReemplazar, '...');

    return hiddenMail;
}

//9. Escriba una función de JavaScript para poner en mayúscula la primera letra
// de cada palabra en una cadena

//Creamos una función que con replace y  RegEx cambie los carácteres a mayúscula.

//Guía RegEx
// -^\w{1} significa que tome el carácter del principio de la cadena, sea cual sea.
// -\s+\w{1} significa que tome cualquier carácter que se encuentre después de un espacio.

let firstWordUpper = (cadena) => cadena.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());


//14. Escriba una función de JavaScript para insertar una cadena dentro de una
// cadena en una posición particular (el valor predeterminado es 1).

//Creamos una función que recoja una posición (con el 1 como predeterminado) y una cadena que introducir

function insert(cadena, injerto = "", pos = 0) {

    //Cortamos la cadena con slice desde 0 a pos para la primera parte y de pos a fin para la segunda.

    let part1 = cadena.slice(0, pos);
    let part2 = cadena.slice(pos);

    //Concatenamos con el injerto tras la parte 1 y luego concatenamos la parte dos.

    return part1.concat(injerto.concat(part2));

}

//18. Escriba una función de JavaScript para contar la aparición de una
// subcadena en una cadena.

//Creamos una función que acepte dos cadenas, la cadena principal y la cadena a buscar

let isPresent = (cadena, subcadena) => {if(cadena.indexOf(subcadena) != -1) return true; else return false}

//29.Escriba una función de JavaScript para encontrar una palabra dentro de
// una cadena

//Creamos una función que acepte una cadena en la que buscar y la subcadena que buscamos saber cuántas veces se repite

function findSubstr(cadena, subcadena) {

    //Creamos una variable para contar el número de coincidencias, otra que sirva como índice de control del bucle y otra que sirva como 
    //control de dónde empezar a contar.
    let coincidencias = 0;
    let n = 0;
    let i = 0;

    do{
        //Dentro del bucle haremos un indexOf de la cadena en busca de la subcadena que empiece a buscar a partir de n
        //y el resultado, será el nuevo valor de n i
        i = cadena.indexOf(subcadena,n);
        //Si i da algo distinto a -1 es que habrá coincidencia, así que aumentamos el contador
        //aumentamos el valor de n en un valor igual a la longitud de la substr + i para que no vuelva a encontrar esa misma ocurrencia
        if(i != -1)
            coincidencias++;
            n = i+subcadena.length;
        //Si en cambio el resultado es de -1, el bucle terminará, de lo contrario, en la siguiente iteración indexOf comenzará a buscar a partir de
        //donde encontró la coincidencia
    }while(i != -1);

    return coincidencias;
}