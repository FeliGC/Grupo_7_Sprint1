window.addEventListener("load",function(){
    
    let formulario = this.document.querySelector("form")

    formulario.addEventListener("submit",function(e){
        
        let errores = []

        let nombre = document.querySelector("input.name")
        if(nombre.value == ""){
            errores.push("El campo de nombre tiene que estar completo")
        } else if(nombre.value.length < 4){
            errores.push("El campo de nombre debe tener al menos 4 caracteres")
        }

        let password = document.querySelector("input.password")
        if(password.value == ""){
            errores.push("El campo de contraseña tiene que estar completo")
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