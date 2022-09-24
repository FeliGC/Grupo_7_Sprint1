window.addEventListener("load",function(){
    
    let formulario = document.querySelector("form")

    formulario.addEventListener("submit",function(e){
        
        let errores = [];

        let nombre = document.querySelector('input.firstName')
        if(nombre.value == ""){
            errores.push("El campo de nombre tiene que estar completo")
        } else if(nombre.value.length < 4){
            errores.push("El campo de nombre debe tener al menos 4 caracteres")
        };

        let apellido = document.querySelector('input.lastName')
        if(apellido.value == ""){
            errores.push("El campo de apellido tiene que estar completo")
        } else if(apellido.value.length < 3){
            errores.push("El campo de apellido debe tener al menos 3 caracteres")
        };

        let email = document.querySelector('input.email')
        if(email.value == ""){
            errores.push("El campo de email tiene que estar completo")
        }; 

        let password = document.querySelector("input.password")
        if(password.value == ""){
            errores.push("El campo de contraseña tiene que estar completo")
        } else if(password.value.length < 8){
            errores.push("El campo contraseña debe tener al menos 8 caracteres")
        };

        let imagen = document.querySelector('input.userAvatar');
        let extensionesValidas = ".png, .gif, .jpeg, .jpg";

        if (imagen == "") {
            errores.push('No puedes continuar sin una imagen')
        }else if(imagen.value =! extensionesValidas) {
            errores.push('Tu imagen debe ser .png, .gif, .jpeg o .jpg')
        }
        
        if (errores.length > 0){
            e.preventDefault()

            let ulErrores = document.querySelector("div.errores ul")

            for(let i = 0;i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] +"</li>"
            }
        }

        if (errores.length > 0){
            e.preventDefault()

            let ulErrores = document.querySelector("div.errores ul")

            for(let i = 0;i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] +"</li>"
            }
        }
    })


})