// Actividad 1: Diseña una clase “Colegio”. Dicha clase tendrá como atributos “nombre”, numeroAulas” y “numeroAlumnos”. Cada alumno se representará como un objeto de la clase “Alumno”. En ella se guardaran los atributos “DNI”, “nombre” y “notaMedia”.
// Implementa métodos en Colegio y Alumno para modificar la nota media.


class Alumno {


    constructor(id, nombre, notaMedia) {
        // Atributos clase alumno
        this.id = id;
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }
    // Funciones clase alumno

    consultarNota() {
        console.log("El alumno " + this.nombre + " tiene de nota " + this.notaMedia);
    }

    // Cambia la nota media
    cambiarNotaMedia(nuevaNota) {
        this.notaMedia = nuevaNota;
    }

}

class Colegio {

    builder(nombre, numeroAulas, numeroAlumnos) {
        this.nombre = nombre;
        this.numeroAulas = numeroAulas;
        this.numeroAlumnos = numeroAlumnos;
        this.arrayAlumnos = [];

        for (i = 0; i < numeroAlumnos; i++) {
            this.arrayAlumnos[i] = new Alumno(i, "Alumno".concat(i) + 5.0);
        }
    }

    consultarNotaMedia(n) {
        this.arrayAlumnos[n].consultarNota();
    }

    cambiarNotaMedia(n, nuevaNota) {
        this.arrayAlumnos[n].cambiarNotaMedia(nuevaNota);
    }

}


//Actividad 2: Diseña una clase “Aeropuerto”. Tendrá como atributos “nombre”, “ciudad” y “numeroVuelosDiarios”. Cada vuelo diario se 
// representará como una objeto de la clase “Vuelo”. En ella se guardaran los atributos “codigo”, “hora_llegada” y “hora_salida”.
// Implementa métodos en aeropuerto y vuelo para modificar la hora de llegada, 
// para modificar la hora de salida y para comprobar si la hora de salida es posterior a la hora de llegada.

class Vuelo {

    builder(codigo, horaLlegada, horaSalida){

        this.codigo = codigo;
        this.horaLlegada = horaLlegada;
        this.horaSalida = horaSalida;

    }

    builder();

    cambiarHoraSalida(nuevaHoraSalida){
        this.horaSalida = nuevaHoraSalida;
    }

    cambiarHoraLlegada(nuevaHoraLlegada){
        this.horaLlegada = nuevaHoraLlegada;
    }

    comprobarHorarios(){
        if(this.horaLlegada<this.horaSalida)
            console.log("Los horarios son erróneos.")
        else
            console.log("Todo correcto.")
    }
}

class Aeropuerto {

    builder(nombre, ciudad, numeroVuelosDiarios){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.numeroVuelosDiarios = numeroVuelosDiarios;
        this.arrayVuelos = [];

        for(i=0; i<numeroVuelosDiarios; i++){
            this.arrayVuelos[i] = new Vuelo();
        }
    }

    cambiarHoraSalida(n, nuevaHoraSalida){
        this.arrayVuelos[n].horaSalida = nuevaHoraSalida;
    }

    cambiarHoraLlegada(n, nuevaHoraLlegada){
        this.arrayVuelos[n].horaLlegada = nuevaHoraLlegada;
    }

    comprobarHorarios(n){
        if(this.arrayVuelos[n].horaLlegada<this.arrayVuelos[n].horaSalida)
            console.log("Los horarios son erróneos.")
        else
            console.log("Todo correcto.")
    }
}

// Diseña una clase “Hospital”. Tendrá como atributos “nombre”, “ciudad” y “numPacientes” (número de pacientes ingresados). 
// Cada paciente se representará como un objeto de la clase “Paciente”. En ella se guardaran los atributos “DNI”, “nombre”, “enfermedad”.
// Implementa un método en “Hospital” que reciba el código de paciente y se le de alta a dicho paciente (equivale a eliminar al paciente).

class paciente {

    builder(DNI, nombre, enfermedad){
        this.DNI = DNI;
        this.nombre = nombre;
        this.enfermedad = enfermedad;
    }

}

class Hospital {

    builder(nombre, ciudad, numPacientes){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.numPacientes = numPacientes;
        this.arrayPacientes = [];
        for(i = 0; i<this.arrayPacientes; i++){
            this.arrayPacientes[i] = new paciente(DNI, nombre, enfermedad);
        }
    }

    darAlta(DNIiden){
        for(i = 0; i<this.arrayPacientes.length; i++){
            if(DNIiden == this.arrayPacientes[i].DNI){
                this.arrayPacientes.splice(i,i+1);
            }
        }
    }
}