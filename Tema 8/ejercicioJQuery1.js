//Creamos una función que se asocie al botón del primer ejercicio y que cuente los li del array resultante de jquery

function cuantasAsignaturas() {
    let cursos = $('#segundoDAW li').length
    alert("El ciclo de 2 DAW está compuesto por " + cursos + " asignaturas.");
}

//Creamos una función para añadirle la función de mostrar la lista cuando se pase el ratón encima
function mostrarLista() {

    $primeroDaw = $("#primeroDAW");
    $segundoDaw = $("#segundoDAW");

    $primeroDaw.children("ul").addClass("hidden");
    $segundoDaw.children("ul").addClass("hidden");

    $primeroDaw.hover(function () {
        $(this).children("ul").fadeIn(2000);
    }, function () {
        $(this).children("ul").fadeOut(2000);
    });

    $segundoDaw.hover(function () {
        $(this).children("ul").fadeIn(2000);
    }, function () {
        $(this).children("ul").fadeOut(2000);
    });

}

//Para el tercero creamos un evento que al clickear lo muestre y desmuestre (toggle) dentro de un evento que llame a estos

function clicks() {
    $("#primeroDAW").on("click", function () {
        $(this).children("ul").toggle("fast");
    });

    $("#segundoDAW").on("click", function () {
        $(this).children("ul").toggle("fast");
    });
}

//Para hacerlo de un sólo click, añadimos a la función anterior el mismo efecto del segundo ejercicio (puesto que toggle no serviría en este caso)

function clickUnico() {

    $("#primeroDAW").on("click", function () {
        $(this).children("ul").fadeOut(2000);
    }, function () {
        $(this).children("ul").fadeIn(2000);
    });


    $("#segundoDAW").on("click", function () {
        $(this).children("ul").fadeOut(2000);
    }, function () {
        $(this).children("ul").fadeIn(2000);
    });
}

//Para borrar los efectos en el ejercico 5 creamos una función asociada al botón

function eliminarEfectos() {

    $("#primeroDAW").off("click");

    $("#segundoDAW").off("click");

}

//Hacemos una función muy similar a las anteriores, pero añadimos one en lugar de on, para que sólo pueda ocurrir una vez
//y una evento keydown a la tecla M que muestre el contenido si se activa



function efectoKeydown() {

    $(document).one("keydown", function (e) {
        if (e.key == "m") {

            $("#primeroDAW").children("ul").fadeOut(2000, function () {
                $("#primeroDAW").children("ul").fadeIn(2000);
            });

            $("#segundoDAW").children("ul").fadeOut(2000, function () {
                $("#segundoDAW").children("ul").fadeIn(2000);
            });

        }
    })
}

//Para el séptimo ejercicio sólo tendremos que crear una función que añada un tooltip a cada elemento con el atributo title

function mostrarHoras() {

    //Asignaturas 1 DAW

    $("#primeroDAW").children("ul").children("li")[0].setAttribute("title", "5 Horas");
    $("#primeroDAW").children("ul").children("li")[1].setAttribute("title", "6 Horas");
    $("#primeroDAW").children("ul").children("li")[2].setAttribute("title", "3 Horas");
    $("#primeroDAW").children("ul").children("li")[3].setAttribute("title", "2 Horas");
    $("#primeroDAW").children("ul").children("li")[4].setAttribute("title", "5 Horas");
    $("#primeroDAW").children("ul").children("li")[5].setAttribute("title", "3 Horas");
    $("#primeroDAW").children("ul").children("li")[6].setAttribute("title", "4 Horas");

    //Asignaturas de 2 DAW

    $("#segundoDAW").children("ul").children("li")[0].setAttribute("title", "3 Horas");
    $("#segundoDAW").children("ul").children("li")[1].setAttribute("title", "5 Horas");
    $("#segundoDAW").children("ul").children("li")[2].setAttribute("title", "6 Horas");
    $("#segundoDAW").children("ul").children("li")[3].setAttribute("title", "6 Horas");
    $("#segundoDAW").children("ul").children("li")[4].setAttribute("title", "4 Horas");
    $("#segundoDAW").children("ul").children("li")[5].setAttribute("title", "2 Horas");

}

//Para el octavo haremos algo parecido, pero añadiendo texto a la lista

function mostrarHorasClick() {

    //Asignaturas 1 DAW

    $("#primeroDAW").children("ul").children("li:first-child").one("click", function () { $(this).html($(this).html() + " <b>Horas semanales:</b>5 Horas") });
    $("#primeroDAW").children("ul").children("li:nth-child(2)").one("click", function () { $(this).html($(this).html() + " <b>Horas semanales:</b>6 Horas") });
    $("#primeroDAW").children("ul").children("li:nth-child(3)").one("click", function () { $(this).html($(this).html() + " <b>Horas semanales:</b>3 Horas") });
    $("#primeroDAW").children("ul").children("li:nth-child(4)").one("click", function () { $(this).html($(this).html() + " <b>Horas semanales:</b>2 Horas") });
    $("#primeroDAW").children("ul").children("li:nth-child(5)").one("click", function () { $(this).html($(this).html() + " <b>Horas semanales:</b>5 Horas") });
    $("#primeroDAW").children("ul").children("li:nth-child(6)").one("click", function () { $(this).html($(this).html() + " <b>Horas semanales:</b>3 Horas") });
    $("#primeroDAW").children("ul").children("li:last-child").one("click", function () { $(this).html($(this).html() + " <b>Horas semanales:</b>4 Horas") });

    //Asignaturas 2 DAW

    $("#segundoDAW").children("ul").children("li:first-child").one("click", function () { $(this).html($(this).html() + " <b>Horas semanales:</b>3 Horas") });
    $("#segundoDAW").children("ul").children("li:nth-child(2)").one("click", function () { $(this).html($(this).html() + " <b>Horas semanales:</b>5 Horas") });
    $("#segundoDAW").children("ul").children("li:nth-child(3)").one("click", function () { $(this).html($(this).html() + " <b>Horas semanales:</b>6 Horas") });
    $("#segundoDAW").children("ul").children("li:nth-child(4)").one("click", function () { $(this).html($(this).html() + " <b>Horas semanales:</b>6 Horas") });
    $("#segundoDAW").children("ul").children("li:nth-child(5)").one("click", function () { $(this).html($(this).html() + " <b>Horas semanales:</b>4 Horas") });
    $("#segundoDAW").children("ul").children("li:last-child").one("click", function () { $(this).html($(this).html() + " <b>Horas semanales:</b>2 Horas") });

}

//El noveno ejerccicio será exactamente igual al anterior, pero añadiendo la modalidad al texto

function mostrarModalidadClick(){
    
    //Asignaturas 1 DAW

    $("#primeroDAW").children("ul").children("li:first-child").one("click", function () { $(this).html($(this).html() + " <b>Modalidad: </b> Presencial") });
    $("#primeroDAW").children("ul").children("li:nth-child(2)").one("click", function () { $(this).html($(this).html() + " <b>Modalidad: </b> Presencial") });
    $("#primeroDAW").children("ul").children("li:nth-child(3)").one("click", function () { $(this).html($(this).html() + " <b>Modalidad: </b> Presencial") });
    $("#primeroDAW").children("ul").children("li:nth-child(4)").one("click", function () { $(this).html($(this).html() + " <b>Modalidad: </b> Presencial") });
    $("#primeroDAW").children("ul").children("li:nth-child(5)").one("click", function () { $(this).html($(this).html() + " <b>Modalidad: </b> Presencial") });
    $("#primeroDAW").children("ul").children("li:nth-child(6)").one("click", function () { $(this).html($(this).html() + " <b>Modalidad: </b> Presencial") });
    $("#primeroDAW").children("ul").children("li:last-child").one("click", function () { $(this).html($(this).html() + " <b>Modalidad: </b> Presencial") });

    //Asignaturas 2 DAW

    $("#segundoDAW").children("ul").children("li:first-child").one("click", function () { $(this).html($(this).html() + " <b>Modalidad: </b> Presencial") });
    $("#segundoDAW").children("ul").children("li:nth-child(2)").one("click", function () { $(this).html($(this).html() + " <b>Modalidad: </b> Presencial") });
    $("#segundoDAW").children("ul").children("li:nth-child(3)").one("click", function () { $(this).html($(this).html() + " <b>Modalidad: </b> Presencial") });
    $("#segundoDAW").children("ul").children("li:nth-child(4)").one("click", function () { $(this).html($(this).html() + " <b>Modalidad: </b> Presencial") });
    $("#segundoDAW").children("ul").children("li:nth-child(5)").one("click", function () { $(this).html($(this).html() + " <b>Modalidad: </b> Presencial") });
    $("#segundoDAW").children("ul").children("li:last-child").one("click", function () { $(this).html($(this).html() + " <b>Modalidad: </b> Presencial") });

}


