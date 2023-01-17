//Creamos la función que se ejcutará cuando cargue la página

function visits() {
    //Comprobará si el objeto en cuestión existe
    if (localStorage.visits) {
        //Y si lo hace, le sumamos uno (Conviertiendo el valor a número)
        localStorage.visits = Number(localStorage.visits) + 1;
      } else {
        //Si no existe, lo creamos valiendo 1 (puesto que ya se habrá entrado una vez al cargarse la página por primeza vez)
        localStorage.visits = 1;
      }
}

//La función para ver el número de visitas

function showVisits() {
    alert(`Número de visitas: ${localStorage.visits}`)
}

//La funcion para borrar el storage

function clearVisits () {
    localStorage.removeItem("visits");
}