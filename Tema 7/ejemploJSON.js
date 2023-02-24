//Creamos un array de ejemplo que guadar como localStorage

let bestGorillazSongs = ["Clint Eastwood", "Feel Good Inc", "Dare"];

//Lo guardamos en el Storage como un JSON hecho string.

localStorage.setItem('bestGorillazSongs', JSON.stringify(bestGorillazSongs));

//Si quisiéramos recuperar ese JSON

let newGorillazArray = JSON.parse(localStorage.bestGorillazSongs);