//En primer lugar crearemos las funciones que usaremos para la gestión de las cookies del ejercicio

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
   }

   function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
    c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
    }
    }
    return "";
   }

   function deleteCookie(cname) {
    document.cookie = cname+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
    }

//Ya creadas las funciones, usaremos la primera para crear la coockie del ejercicio con una expiración de 30 días

setCookie("visits", 0, 30);

//Para obtener el número de visitas, creamos una variable counter que empiece valiendo el número de visitas registradas en la coockie

let counter = getCookie("visits");




