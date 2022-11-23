//1.- Script para cambiar la imagen del evento
let image = document.getElementById("ej01");

//Creamos un evento que se active al pulsar el ratón y cambie el contenido del atribute "src" de la imagen.
image.addEventListener("mousedown", () => image.setAttribute("src", "https://i.kym-cdn.com/photos/images/newsfeed/001/931/957/b02.jpg"))
//Creamos otro evento igual, pero que se active al soltar.
image.addEventListener("mouseup", () => image.setAttribute("src", "https://i.kym-cdn.com/photos/images/newsfeed/001/931/955/181.jpg"))

//2.- Script para cambiar los colores del cuadrado
let cuadrao = document.getElementById("ej02");

//Creamos eventos que cambien el background color
    //Al pulsar el ratón
    cuadrao.addEventListener("mousedown", () => cuadrao.setAttribute("style", "background-color: #FFFF00;"))
    //Al soltarlo
    cuadrao.addEventListener("mouseup", () => cuadrao.setAttribute("style", "background-color: white;"))
    //Al pulsar una tecla
    cuadrao.addEventListener("keypress", (e) => cuadrao.setAttribute("style", "background-color: blue;"))

//3.- Script para desactivar el click derecho en el documento
let left_click_btn = document.getElementById("ej03");

//El evento afectará únicamente al cuadro del botón, si se quisiera hacer para todo el documento, bastaría con que hiciera target al documento.
left_click_btn.addEventListener("click", function(){
    //El evento llamará a otro evento que desactive el default del menu contextual (desabilitidándolo)
    left_click_btn.addEventListener("contextmenu", (e) => e.preventDefault(), false)
})

//4.- Script para reconocer qué click se ha pulsado
let click_info = document.getElementById("ej04");

//El evento afectará al documento entero y cambiará el texto interno del span que hemos guardado en la variable click_info
document.addEventListener("mousedown", function(e){
    //La información del evento (recogida en el parámetro e) dependerá del click que se haya usado. Por defecto 0 es left, 1 es auxiliar y 2 es right, 3 es up y 4 es back
    switch(e.buttons){
        case 0: click_info.innerHTML = "Mid Click"
        break;
        case 1: click_info.innerHTML = "Left Click"
        break;
        case 2: click_info.innerHTML = "Right Click"
        break;
        case 3: click_info.innerHTML = "Up Click"
        break;
        case 4: click_info.innerHTML = "Down Click"
        break;
    }
})

//5.- Script para mostrar la url
//En este caso, para facilitar el manejo del objeto resultando del evento, creamos una función que será añadida al "onmouseover" de las imágenes

function urlhover(e){
    let show_url = document.getElementById("ej05");
    let imageURL = document.getElementById(e).getAttribute("src");
    show_url.innerHTML = imageURL;
}

//6.- Creamos un evento que afecte al documento completo que devuelva la tecla usada como string y añadiendo si se pulsó o no control, shift o alt
let keypress = document.getElementById("ej06");
//Primero creamos un string
let special_k = "";
document.addEventListener("keydown", function(e){ 
    //Después evaluamos si la tecla que se ha pulsado ha sido alt, ctrl o shift, si se cumple, no sacará la tecla por pantalla, pero la añadirá a la variable special_k
    if(e.key == "Alt")
    special_k = "+Alt";
    else if(e.key == "Control")
    special_k = "+Ctrl";
    else if(e.key == "Shift")
    special_k = "+Shift";
    //Cuando pulsemos una tecla que NO sea una de las citadas, sacará el resultado y reiniciará la variable
    else{
        keypress.innerHTML = `${e.key}${special_k}`;
        special_k = "";
    }   
})