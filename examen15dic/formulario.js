//Creamos una función que se llevará a cabo al ser pulsado el botón de enviar en el html

function validate(){
    
    //Creamos una expresión regular que evalúe el contenido del campo
    let regExDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;

    let dni = document.getElementById("dni");

    //Lo evaluamos con un test
    if (!regExDNI.test(dni.value)){
        //Si sale mal, mostramos el mensaje en el documento cambiando el estilo display
        document.getElementById("dni_fail").style.display = "inline";
    }else{
        document.getElementById("dni_fail").style.display = "none";
    }

    //Validación email

    //Capturamos el campo del mail
    let mail = document.getElementById("mail");
    //Creamos una expresión regular que evalúe el mail
    let regExMail = /^[a-zA-Z0-9_.+-]+@(gmail|g.educaand.es)$/;

    //Lo evaluamos con un test
    if(!regExMail.test(mail.value)){
        //Y de nuevo, si sale mal, mostramos el mensaje en el documento cambiando el estilo display
        document.getElementById("mail_fail").style.display = "inline";
    }else{
        document.getElementById("mail_fail").style.display = "none";
    }

    //Comprobación del tipo de usuario
    
    //Para esta comprobación lo que haremos será examinar si el campo admin está marcado
    if(document.getElementById("admin").checked){
        //Y si lo está comprobaremos que la pass sea específicamente la de educaand
        let regExMailEducaand = /^[a-zA-Z0-9_.+-]+@g.educaand.es$/;
        if(!regExMailEducaand.test(mail.value)){
            document.getElementById("admin_fail").style.display = "inline";
        }else{
            document.getElementById("admin_fail").style.display = "none";
        }
    }

    //Comprobación de la contraseña

    //Para comprobar los datos de la contraseña, guardamos el valor de todos los campos relacionados

    let pass = document.getElementById("pass");
    let pass2 = document.getElementById("pass2");
    let passId = document.getElementById("pass_ind");

    //Creamos una regEx para la contraseña
    
    let regExPass = /^(?=.*[0-9])[A-Z][a-zA-Z0-9]{6,}$/;

    if(!regExPass.test(pass.value)){
        document.getElementById("pass_fail").style.display = "inline";
    }else{
        document.getElementById("pass_fail").style.display = "none";
    }

    //Comprobamos si coinciden las dos contraseñas

    if(pass.value != pass2.value){
        document.getElementById("pass2_fail").style.display = "inline";
    }else{
        document.getElementById("pass2_fail").style.display = "none";
    }

    //Comprobamos el indicio de contraseña


    //Si todo está correcto, añadimos el mensaje

    if((pass.value == pass2.value)&&(regExPass.test(pass.value)) &&  (regExDNI.test(dni.value)) && regExMail.test(mail.value)){
       let result =  document.getElementById("result");
       result.innerHTML = "USUARIO VALIDO";
    } 

}

