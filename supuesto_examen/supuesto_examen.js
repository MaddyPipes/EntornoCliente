//Cuando el formulario mande el submit, se ejecutarán los procesos de validación de las librerías de formulario de JS, basadas en el tipo de input
//del que se trate. Por defecto no hará falta añadir nada más a texto o email, ya que sus validaciones estándar son las que se piden en el ejercicio.

(function () {
    //Usamos estricto para evitar que haya problemas con las librerías.
    'use strict'
    //Seleccionamos todos los campos que requieran validación (ya que tendrán esta clase)
    const forms = document.querySelectorAll('.requires-validation');

    //Especificaciones contraseña
    const pass_regEx = /^(?=\w*\d)(?=\w*[a-z])\S{8,255}$/

    //Guardamos especificamente el campo de la contraseña, para evitar trastear el array de elementos HTML del formulario
    let pass = document.getElementById("pass");
    let pass_2 = document.getElementById("pass_2");

    //Convertimos la lista en array para aplicar un foreach que vaya añadiendo, mediante una función, el evento de validación por separado a cada elemento (cada campo)
    const array_forms = Array.from(forms);

    //Le damos valores randomizados a la suma, creando variables random y una tercera que guarde el resultado.
    let num1 = Math.floor(Math.random() * 9 + 1);
    let num2 = Math.floor(Math.random() * 9 + 1);
    let catcha_result = num1 + num2;

    //Guardamos el elemento que hará las veces de etiqueta del catcha y el input del resultado.

    let catcha = document.getElementById("catcha");
    let catcha_input = document.getElementById("catcha-result");

    //Le damos valor

    catcha.innerHTML = `¿ ${num1} + ${num2} = x ?`;

    array_forms.forEach(function (form) {
        form.addEventListener('submit', function (e) {
            //Las funciones se harán usando la biblioteca específica para formularios "form", usando el método checkValidity(), que hará las comprobaciones por defecto de
            //cada tipo de input y, en caso de que no las valide, mostrará el contenido de las labels del HTML de "invalid-feedback".
            if (!form.checkValidity()) {
                //¡Importante!¡Hay que prevenir la propagación del script por los campos o las validaciones se irán amontonando! Además de prevenir la
                //acción por defecto del formulario (mandarnos a otra página).


                e.preventDefault()
                e.stopPropagation()
            }

            //Carácteres de la contraseña

            //En caso de que la contraseña no pase el test de carácteres, accedemos al primer div que contenga la clase .invalid-feedback-2 y eliminamos su clase hidden.
            if (!pass_regEx.test(pass.value)) {
                document.querySelector('.invalid-feedback-2').classList.remove("hidden");
            }
            //En caso de que se arregle y se haga submit, volverá a añadírsele la clase que la oculta.
            else {
                document.querySelector('.invalid-feedback-2').classList.add("hidden");
            }

            //Contraseñas iguales

            //Si las contraseñas no coinciden, eliminará el hidden del segundo mensaje de invalid-feedback customizado.
            if (pass.value != pass_2.value) {
                document.querySelectorAll('.invalid-feedback-2')[1].classList.remove('hidden');
            } else {
                document.querySelectorAll('.invalid-feedback-2')[1].classList.add('hidden');
            }

            //Catcha de suma

            //Comprobamos la suma usando los mismos métodos usados para la contraseña.

            if (catcha_input.value != catcha_result) {
                document.querySelectorAll('.invalid-feedback-2')[2].classList.remove('hidden');

                //Volvemos a asignar los valores, para que cambien con cada submit fallido.

                num1 = Math.floor(Math.random() * 9 + 1);
                num2 = Math.floor(Math.random() * 9 + 1);
                catcha_result = num1 + num2;

                catcha.innerHTML = `¿ ${num1} + ${num2} = x ?`;

            } else {
                document.querySelectorAll('.invalid-feedback-2')[2].classList.add('hidden');
            }



            form.classList.add('was-validated')
        }, false)



    })

})()

//Creamos una función a parte de la función ejecutable main, que será llamada cuando el check de las condiciones sea marcado.

//En primer lugar capturamos en una constante los elementos del check y del botón
const check_conditions = document.getElementById("accept");
const input_btn = document.getElementById("submit");

function able_submit() {
    if (check_conditions.checked)
        input_btn.removeAttribute("disabled");
    else
        input_btn.setAttribute("disabled", "");

}
