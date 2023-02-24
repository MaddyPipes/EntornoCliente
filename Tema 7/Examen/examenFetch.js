//Creamos un string con la dirección del archivo JSON

let url = "./alumnos.json";

//Creamos la función que mostrará todos los vuelos

function verAlumnos(event) {

    //Evitamos que la página recargue al pulsar el botón

    event.preventDefault();

    //Guardamos el valor de los select en variables para usarlas en los filtros

    let ciudad = document.getElementById("ciudades").value;

    let sexo = document.getElementById("sexo").value;

    //Guardamos el valor de la fecha en diferentes variables

    let fecha = document.getElementById("fecha").value;

    // fecha = fecha.split("-");

    // let dia = fecha[0];
    // let mes = fecha[1];
    // let anio = fecha[2];
    

    //Realizamos el fetch a la url

    fetch(url).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {

                //Una vez tenemos la petición hecha y convertida, mostramos la info a través de un bucle que recorra el objeto del JSON.

                let body = "";

                //Comprobando los filtros que hayan sido marcados

                //En caso de que estén marcados los filtros de mejor nota
                //Creamos una variable para guardar las notas e ir comparando
                   
                let notaMax = 0;
                let alumnoNotaMax = "";
                
                
                //Creamos variables nuevas para las medias y fechas

                let mediaMax = 0;
            
                for (let i = 0; i < data.length; i++) {
                    //Filtro de ciudad
                    if (data[i].ciudad == ciudad || !ciudad) {

                        //Filtro de sexo

                        if (data[i].sexo == sexo || !sexo){

                            //Filtro de mejor nota 1DAW
                            if(document.getElementById("1daw").checked){
                                if(data[i].notaMedia1DAW > notaMax){
                                    notaMax = data[i].notaMedia1DAW;
                                    alumnoNotaMax = data[i].nombre;
                                }
                            }
                            //Filtro de mejor nota 1DAW
                            if(document.getElementById("2daw").checked){
                                if(data[i].notaMedia2DAW > notaMax){
                                    notaMax = data[i].notaMedia2DAW;
                                    alumnoNotaMax = data[i].nombre;
                                }
                            }
                            //Filtro de mejor nota media según fecha
                            if(fecha != "" && data[i].fechaFinalizacion >= fecha){
                                if((data[i].notaMedia2DAW + data[i].notaMedia2DAW)/2 > notaMax){
                                    mediaMax = (data[i].notaMedia2DAW + data[i].notaMedia2DAW)/2 ;
                                    alumnoNotaMax = data[i].nombre;
                                }
                            }
                            body += `<tr id="${i}"><td>${data[i].nombre}</td><td>${data[i].apellidos}</td><td>${data[i].edad}</td><td>${data[i].sexo}</td><td>${data[i].notaMedia1DAW}</td><td>${data[i].notaMedia2DAW}</td><td>${data[i].ciudad}</td><td>${data[i].fechaFinalizacion}</td></tr>`;
                        }

                    }
                }
                //Mostramos el alumno con mejor nota 

                if(document.getElementById("1daw").checked){
                    alert(`EL alumno con mejor nota de 1DAW es: ${alumnoNotaMax} con un ${notaMax}`);
                }
                if(document.getElementById("2daw").checked){
                    alert(`EL alumno con mejor nota de 2DAW es: ${alumnoNotaMax} con un ${notaMax}`);
                    //En caso de que fuese 2 DAW, pintamos de verde su nombre en verde en la lista para marcarle
                    for (let i = 0; i < data.length; i++){
                        if(data[i].nombre == alumnoNotaMax){
                            document.getElementById(i+"").style.backgroundColor = "green";
                        }
                    }
                }
                if(fecha != ""){
                    alert(`EL alumno con mejor nota media desde esa fecha es: ${alumnoNotaMax} con un ${mediaMax}`);
                }


                document.getElementById('alumnos').innerHTML = body;
            })
        }
    }).catch()
}