window.addEventListener('load', function () {

    let formulario = document.querySelector('form')

    formulario.addEventListener('submit', function (event) {

        let nombre = document.querySelector('input.name');

        let errores = []

        if (nombre == "") {
            errores.push('El campo de nombre no puede estar vacío')
        } else if (nombre <= 5) {
            errores.push('El campo de nombre debe tener por lo menos 5 caracteres')
            nombre.style.border = '4px #c51244 solid'
        }

        let descripcion = document.querySelector('input.description');

        if (descripcion == "") {
            errores.push('El campo de descripción no puede estar vacío')
        } else if (descripcion <= 20) {
            errores.push('Debes agregar una descripción con al menos 20 caracteres')
            descripcion.style.border = '4px #c51244 solid'
        }

        let imagen = document.querySelector('input.image');
        let extensionesValidas = ".png, .gif, .jpeg, .jpg";

        if (imagen == "") {
            errores.push('No puedes continuar sin una imagen')
        } else if (imagen.value = !extensionesValidas) {
            errores.push('Tu imagen debe tener una extensión válida')

        }

        if (errores.length > 0) {
            event.preventDefault()

            let ulErrores = document.querySelector('div.errores ul')

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML = '<li>' + errores[i] + '</li>'
            }
        }


    })


})