const buttonMultiply = document.querySelector('.btn-multiply');
const buttonDivide = document.querySelector('.btn-divide');
const result = document.querySelector('.result')

let num1 = 1
result.innerText = num1
buttonMultiply.addEventListener('click', () => {
    if (num1 < 128) {
        num1 *= 2
        result.innerText = num1
        buttonDivide.disabled = false
    } else {
        buttonMultiply.disabled = true
    }
})

buttonDivide.addEventListener('click', () => {
    if (num1 > 1) {
        num1 /= 2
        result.innerText = num1
        buttonMultiply.disabled = false
    } else {
        buttonDivide.disabled = true
    }
})