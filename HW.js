const buttonPlus = document.querySelector('.btn-plus');
const buttonMinus = document.querySelector('.btn-minus');
const result = document.querySelector('.result')
const buttonMultiply = document.querySelector('.btn-multiply');
const buttonDivide = document.querySelector('.btn-divide');
const numberButtons = document.querySelectorAll('[data-number]')
const buttonReset = document.querySelector('.clear-btn')
const buttonEqual = document.querySelector('.equal-btn')

let num = '0'
result.innerText = num

buttonReset.addEventListener('click', () => {
    if (num !== '0'){
        if (num.length > 1){
            num = num.slice(0, -1)
            result.innerText = num
        } else {
            num = '0'
            result.innerText = num
            buttonPlus.disabled = false
            buttonMinus.disabled = false
        }
    }
})
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (num === '0'){
            result.innerText = button.innerText
        }
        else {
            result.innerText = result.innerText + button.innerText
        }
        num = result.innerText

    })
})

buttonEqual.addEventListener('click', () => {
    if(result.innerText.includes('+')){
        let a = Number(result.innerText.slice(0, result.innerText.indexOf('+')))
        let b = Number(result.innerText.slice(result.innerText.indexOf('+'), result.innerText.length))
        result.innerText = a + b
    } else if (result.innerText.includes('-')){
        let a = Number(result.innerText.slice(0, result.innerText.indexOf('-')))
        let b = Number(result.innerText.slice(result.innerText.indexOf('-')+1, result.innerText.length))
        result.innerText = a - b
    } else if (result.innerText.includes('*')) {
        let a = Number(result.innerText.slice(0, result.innerText.indexOf('*')))
        let b = Number(result.innerText.slice(result.innerText.indexOf('*') +1, result.innerText.length))
        result.innerText = a * b
    } else if (result.innerText.includes('/')) {
        let a = Number(result.innerText.slice(0, result.innerText.indexOf('/')))
        let b = Number(result.innerText.slice(result.innerText.indexOf('/') +1, result.innerText.length))
        result.innerText = a / b
    }

})
buttonPlus.addEventListener('click', () => {
    if (result.innerText.includes('+')){
        let a = Number(result.innerText.slice(0, result.innerText.indexOf('+')))
        let b = Number(result.innerText.slice(result.innerText.indexOf('+'), result.innerText.length))
        result.innerText = (a + b)
    }  else {
        result.innerText = result.innerText + buttonPlus.innerText
    }

})

buttonMinus.addEventListener('click', () => {
    if (result.innerText.includes('-')){
        let a = Number(result.innerText.slice(0, result.innerText.indexOf('-')))
        let b = Number(result.innerText.slice(result.innerText.indexOf('-'), result.innerText.length))
        result.innerText = `${a}-${b}`
    } else {
        result.innerText = `${result.innerText}${buttonMinus.innerText}`
    }
})


num = '0'

buttonMultiply.addEventListener('click', () => {
    if (result.innerText.includes('*')){
        let a = Number(result.innerText.slice(0, result.innerText.indexOf('*')))
        let b = Number(result.innerText.slice(result.innerText.indexOf('*'), result.innerText.length))
        result.innerText = `${a}*${b}`
    } else {
        result.innerText = `${result.innerText}${buttonMultiply.innerText}`
    }
})

buttonDivide.addEventListener('click', () => {
    if (result.innerText.includes('/')){
        let a = Number(result.innerText.slice(0, result.innerText.indexOf('/')))
        let b = Number(result.innerText.slice(result.innerText.indexOf('/'), result.innerText.length))
        result.innerText = `${a}/${b}`
    } else {
        result.innerText = `${result.innerText}${buttonDivide.innerText}`
    }
})