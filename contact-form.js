
`use strict`


const checkForValue = Array.from(document.getElementsByClassName(`inp-text`));
const errorForValue = Array.from(document.getElementsByClassName(`error-for-value`));

const submit = document.querySelector(`#submit`);

const radioInp = Array.from(document.getElementsByClassName(`radio-inp`));
const errorRadio = document.querySelector(`.radio-error`)

const checkbox = document.querySelector(`.custom-checkbox`);
const errorCheckbox = document.querySelector(`.error-checkbox`);

const errors = Array.from(document.getElementsByClassName(`error`));

const sent = document.querySelector(`.sent`)

const letsGo = function() {
    return errors.some(e => e.classList.contains(`visible`))
}



console.log(radioInp)


submit.addEventListener(`click`, function(e) {

    e.preventDefault();

    checkForValue.forEach((e,i) => {
        if(e.value === ``) {
            errorForValue[i].classList.add(`visible`)
            e.style.border = `1px solid red`
        } else {
            errorForValue[i].classList.remove(`visible`)
            e.style.border = ``
        }
    });

    for(let i=0; i<radioInp.length; i++) {
        if(radioInp[0].checked || radioInp[1].checked) {
            errorRadio.classList.remove(`visible`)
        } else {
            errorRadio.classList.add(`visible`)
        }
    }

    if(checkbox.checked) {
        errorCheckbox.classList.remove(`visible`)
    } else {
        errorCheckbox.classList.add(`visible`)
    }


    if (!letsGo()) {
        sent.classList.add(`visible`)
    } else {
        sent.classList.remove(`visible`)
    }


})