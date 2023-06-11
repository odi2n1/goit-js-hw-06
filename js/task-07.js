const inputChange = document.querySelector('input#font-size-control')
const magic = document.querySelector('span#text')

inputChange.addEventListener('change', font => {
    magic.style.fontSize = `${font.target.value}px`
})