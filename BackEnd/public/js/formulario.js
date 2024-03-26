window.addEventListener("load", function(){

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo. De 4 a 16 digitos.
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos. De 1 a 50 digitos.
        password: /^.{6,150}$/, // De 6 a 150 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // De 7 a 14 numeros.
    } 

    let inputs = document.querySelectorAll(".form-register div input"); //Guarda en un array, cada uno de los inputs del formulario

    const validarFormulario = (e) => {
        switch(e.target.name){
            case "nombre":
                if(expresiones.nombre.test(e.target.value)){
                    document.querySelector("#nombre").classList.remove("formulario-incorrecto");
                    document.querySelector("#nombre").classList.add("formulario-correcto");
                    document.querySelector("#blue-mark").classList.add("validation-mark");
                    document.querySelector("#red-mark").classList.remove("validation-mark");
                } else{
                    document.querySelector("#nombre").classList.remove("formulario-correcto");
                    document.querySelector("#nombre").classList.add("formulario-incorrecto");
                    document.querySelector("#red-mark").classList.add("validation-mark");
                    document.querySelector("#blue-mark").classList.remove("validation-mark");
                }
                break;    
            case "apellido":
                if(expresiones.nombre.test(e.target.value)){
                    document.querySelector("#apellido").classList.remove("formulario-incorrecto");
                    document.querySelector("#apellido").classList.add("formulario-correcto");
                    document.querySelector("#blue-mark-2").classList.add("validation-mark");
                    document.querySelector("#red-mark-2").classList.remove("validation-mark");
                } else{
                    document.querySelector("#apellido").classList.remove("formulario-correcto");
                    document.querySelector("#apellido").classList.add("formulario-incorrecto");
                    document.querySelector("#red-mark-2").classList.add("validation-mark");
                    document.querySelector("#blue-mark-2").classList.remove("validation-mark");
                }
                break;   
            case "correo":
                if(expresiones.correo.test(e.target.value)){
                    document.querySelector("#correo").classList.remove("formulario-incorrecto");
                    document.querySelector("#correo").classList.add("formulario-correcto");
                    document.querySelector("#blue-mark-3").classList.add("validation-mark");
                    document.querySelector("#red-mark-3").classList.remove("validation-mark");
                } else{
                    document.querySelector("#correo").classList.remove("formulario-correcto");
                    document.querySelector("#correo").classList.add("formulario-incorrecto");
                    document.querySelector("#red-mark-3").classList.add("validation-mark");
                    document.querySelector("#blue-mark-3").classList.remove("validation-mark");
                }
                break;             
        };
    };

    inputs.forEach((input) => {
        input.addEventListener("keyup", validarFormulario);
        input.addEventListener("blur", validarFormulario);
    });
});