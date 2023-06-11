
let counter = 0
const Counter = document.querySelector('#value')
const buttonMinus = document.querySelector('button[data-action="decrement"]')
const buttonPlus = document.querySelector('button[data-action="increment"]')

buttonMinus.addEventListener('click', () => {
    counter--
    Counter.textContent = counter
})

buttonPlus.addEventListener('click', () => {
    counter++
    Counter.textContent = counter
}) 