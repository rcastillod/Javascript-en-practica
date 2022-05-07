/* -------------------------------------------------------------------------- */
/*                                Color Picker                                */
/* -------------------------------------------------------------------------- */
let buttons = document.querySelectorAll('.btn-color')
let buttonsArray = Array.from(buttons)

let content = document.getElementById('content')
let message = document.getElementById('messageColor')

buttons.forEach( (btn) => {
    btn.addEventListener('click', () => {
        message.classList.remove('show')
        changeColor(btn)
    })
})

const changeColor = (boton) => {
    let color = boton.style.backgroundColor
    content.style.backgroundColor = color
    message.innerHTML = color
    message.classList.add('show')
}