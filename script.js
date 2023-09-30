'use strict';
const SimularButton = document.getElementById('btn_simular')
console.log('JS carregado')

SimularButton.addEventListener('click', () => {
    const FormInputs = {
        valor : document.getElementById('valor').value,
        banco : document.getElementById('banco').value,
        meses : document.getElementById('tempo').value
    }
    console.log(FormInputs)
    alert('Ola mundo!')
})
//alert('Ola Mundo!');