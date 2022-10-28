//Creamos una clase alumno que guarde los datos.

class alumno {

    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

}

//Creamos un array que haga las veces de lista de alumnos en la BD/Hoja de Cálculo
let listaAlumnos = [];

//Y hacemos funciones para añadir y eliminar alumnos y otra para mostrar la lista.

let agregar_alumnos_lista = (alumno) => listaAlumnos.push(alumno);

let eliminar_alumnos_lista = (n) => listaAlumnos.splice(n, 1);

function mostrar_alumnos(alumnos) {
    for (let i = 0; i < alumnos.length; i++) {
        console.log[`-.${i + 1}: ${alumnos[i].nombre}`]
    }
}

//Una vez tenemos la lista de alumnos procedemos a crear la habitación

class habitacion {

    constructor(numeroHabitacion) {

        this.numeroHabitacion = numeroHabitacion;
        this.nAlumnos = 3;
    }

    ocupantes = [];

    //Y creamos una función para añadir ocupantes, otra para eliminarlos y otra para mostrar la lista

    agregar_alumno_habitacion(n) {
            this.ocupantes.push(listaAlumnos[n]);
    }

    eliminar_alumno_habitacion(n) {
        this.ocupantes.splice(n, 1);
    }

    mostrar_alumnos_habitacion() {
        for (let i = 0; i < this.nAlumnos; i++) {
            console.log(`-.${i + 1}: ${this.ocupantes[i].nombre} ${this.ocupantes[i].apellido} DNI: ${this.ocupantes[i].dni}`)
        }
    }

}

//Y por último creamos una residencia que contendrá las habitaciones.

class residencia {

    constructor(numeroResidencia) {
        this.numeroResidencia = numeroResidencia;
    }

    habitaciones = [];

    //Y una función para registrar habitaciones en la residencia, otra para desocupar y otra para mostrar la lista de habitaciones.

    registrar_habitacion(habitacion) {
        this.habitaciones.push(habitacion);
    }

    desocupar_habitacion(n) {
        this.habitaciones.splice(n, 1);
    }

    mostrar_habitaciones() {
        console.log(`Lista de habitaciones ocupadas en la residencia ${this.numeroResidencia}:`)
        for (let i = 0; i < this.habitaciones.length; i++) {
            console.log(`\n-HABITACIÓN Nº${this.habitaciones[i].numeroHabitacion}:\n`)
            this.habitaciones[i].mostrar_alumnos_habitacion();
        }
    }
}

//Procedemos a probar su funcionamiento con una serie de llamadas a la consola.

//Creamos 6 alumnos, 2 habitaciones y una residencia para probar.

let alumno1 = new alumno("Pedro", "Picapiedra", "1234972F");
let alumno2 = new alumno("Casius", "Klei", "4431873R");
let alumno3 = new alumno("Carrero", "Blanco", "867248V");
let alumno4 = new alumno("Sergio", "Ramos", "8449615N");
let alumno5 = new alumno("El", "Kaki", "DNI ME VA PEDI, TU MA VISTO CARA DE TENE DNI");
let alumno6 = new alumno("Optimus", "Prime", "0101001010011101010010100011110010100101");

mostrar_alumnos(listaAlumnos);

let habitacion1 =  new habitacion("12B");
let habitacion2 =  new habitacion("09Z");

let residencia1 =  new residencia("Desengaño 21")

//Introducimos a los alumnos en la lista de los alumnos.

agregar_alumnos_lista(alumno1);
agregar_alumnos_lista(alumno2);
agregar_alumnos_lista(alumno3);
agregar_alumnos_lista(alumno4);
agregar_alumnos_lista(alumno5);
agregar_alumnos_lista(alumno6);

//Introducimos a los alumnos en las habitaciones a través de la lista.

habitacion1.agregar_alumno_habitacion(0);
habitacion1.agregar_alumno_habitacion(1);
habitacion1.agregar_alumno_habitacion(2);

habitacion2.agregar_alumno_habitacion(3);
habitacion2.agregar_alumno_habitacion(4);
habitacion2.agregar_alumno_habitacion(5);

//Introducimos las habitaciones en la residencia

residencia1.registrar_habitacion(habitacion1);
residencia1.registrar_habitacion(habitacion2);

//Mostramos los alumnos y las habitaciones de la residencia

residencia1.mostrar_habitaciones();



