/* -------------------------------------------------------------------------- */
/*                              Valida Formulario                             */
/* -------------------------------------------------------------------------- */
let form = document.getElementById('formulario')
let button = document.getElementById('button')

formulario.addEventListener( 'submit', (e) => {
    e.preventDefault()

    limpiaErrores()

    if (validaCampos()) {
        mensajeExito()
    } else {
        mensajeError()
    }

})

const validaCampos = () => {

    let nombre = document.getElementById('nombre').value
    let asunto = document.getElementById('asunto').value
    let mensaje = document.getElementById('mensaje').value
    let valid = true

    if ( nombre == '' ) {
        valid = false
        document.querySelector('.errorNombre').innerHTML = 'El campo nombre esta vacío.'
        
    } else if ( validaTexto(nombre) == false ) {
        valid = false
        document.querySelector('.errorNombre').innerHTML = 'El campo nombre no debe contener números.'
    }
    
    if ( asunto == '' ) {
        valid = false
        document.querySelector('.errorAsunto').innerHTML = 'El campo asunto esta vacío.'
    } else if ( validaTexto(asunto) == false ) {
        valid = false
        document.querySelector('.errorAsunto').innerHTML = 'El campo asunto no debe contener números.'
    }
    
    if ( mensaje == '' ) {
        valid = false
        document.querySelector('.errorMensaje').innerHTML = 'El campo mensaje esta vacío.'
    } else if ( validaTexto(mensaje) == false ) {
        valid = false
        document.querySelector('.errorMensaje').innerHTML = 'El campo mensaje no debe contener números'
    }

    return valid

}

const validaTexto = (texto) => {
    let pattern = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]*[.,]*(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)+$/gi
    let textResult = pattern.test(texto)
    return textResult
}

const limpiaErrores = () => {
    document.querySelector('.errorNombre').innerHTML = ''
    document.querySelector('.errorAsunto').innerHTML = ''
    document.querySelector('.errorMensaje').innerHTML = ''
}

const mensajeExito = () => {
    let msg = document.getElementById('message')
    msg.innerHTML = 'Tu mensaje ha sido enviado con éxito.'
    msg.classList.remove('error')
    msg.classList.add('show', 'exito')
}

const mensajeError = () => {
    let msg = document.getElementById('message')
    msg.innerHTML = 'Uno de los campos tiene problemas.'
    msg.classList.remove('exito')
    msg.classList.add('show', 'error')
}