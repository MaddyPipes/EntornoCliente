//En primer lugar crearemos las funciones que usaremos para la gestión de las cookies del ejercicio

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

   function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
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
       
   //Una vez creadas, usamos la función de check y la adaptamos para que cuente las visitas
   //Para ello creamos la coockie de visitas si no existiera y en caso de que lo haga, obtenemos el valor de la coockie y le sumamos 1.

   function checkCookie() {
    let visits = getCookie("visits");
    if (visits != "") {
      visits++;
    } else {
        setCookie("visits", 0, 30);
    }
   }

   //Y creamos los eventos sobre nuestra página
   //El que llamará a la función que actualiza la coockie se encuentra vinculado al body en el HTML
   
   //El que va unido al botón de mostrar visitas que hará un alert con el valor
   function mostrarVisitas(){
    alert(`Número de Visitas: ${getCookie("visits")}`);
   };
   //El quee va unido al botón de eliminar las coockies en el HTML simplemente llamo a la función de delete usando "visits" como parámetro
