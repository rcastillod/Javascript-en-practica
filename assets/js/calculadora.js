/* -------------------------------------------------------------------------- */
/*                                 Calculadora                                */
/* -------------------------------------------------------------------------- */
let btnSuma = document.getElementById('suma')
let btnResta = document.getElementById('resta')

let resText = document.getElementById('resText')
let resNumber = document.getElementById('resNumber')

btnSuma.addEventListener('click', e => {
    e.preventDefault()
    
    let numero1 = parseInt(document.getElementById('numero_uno').value)
    let numero2 = parseInt(document.getElementById('numero_dos').value)
    
    suma(numero1, numero2)

    document.getElementById('resultado').classList.add('show')

})

btnResta.addEventListener('click', e => {
    e.preventDefault()
    
    let numero1 = parseInt(document.getElementById('numero_uno').value)
    let numero2 = parseInt(document.getElementById('numero_dos').value)
    
    resta(numero1, numero2)

    document.getElementById('resultado').classList.add('show')

})

const suma = (num1, num2) => {
    let resSuma = num1 + num2
    resText.innerHTML = 'El resultado de la suma es:'
    resNumber.innerHTML = resSuma
}

const resta = (num1, num2) => {
    let resResta = num1 - num2
    if ( resResta < 0 ) {
        resResta = 0
    }
    resText.innerHTML = 'El resultado de la resta es:'
    resNumber.innerHTML = resResta
}