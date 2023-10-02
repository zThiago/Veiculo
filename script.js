'use strict';
const SimularButton = document.getElementById('btn_simular')
const VoltarButton = document.getElementById('btn_voltar')
const MainClass = document.getElementsByTagName('main')[0]
const Simulador = document.getElementsByClassName('simulado')[0]

let elementValorParcelas = document.getElementById('valor_parcelas');
let elementValorTotal = document.getElementById('valor_total');

SimularButton.addEventListener('click', () => {
    const FormInputs = {
        valor : document.getElementById('valor').value,
        banco : document.getElementById('banco').value,
        meses : document.getElementById('tempo').value
    }
    console.log(FormInputs)
    MainClass.style.display = 'none'
    Simulador.style.display = 'flex'

    let valorParcelas = 1302.23
    let valorTotal = 62507.04

    let atualParcelas = 0
    let atualTotal = 0
    let iUpdate = 0
    let TaxadeAtualizacao = 60

    elementValorParcelas.innerHTML = Number(atualParcelas).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',}).toString()
    elementValorParcelas.style.color = 'orange'
    elementValorTotal.innerHTML = Number(atualTotal).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',}).toString()
    elementValorTotal.style.color = 'orange'

    function AtualizarValor() {
        atualParcelas += valorParcelas/TaxadeAtualizacao
        elementValorParcelas.innerHTML = Number(atualParcelas).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',}).toString()
        atualTotal += valorTotal/TaxadeAtualizacao
        elementValorTotal.innerHTML = Number(atualTotal).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL',}).toString()
        iUpdate += 1
        console.log('atualizando valor')
        setTimeout(function () {
          if(iUpdate < TaxadeAtualizacao){
             AtualizarValor()
        }else{
            elementValorTotal.style.color = 'black'
            elementValorParcelas.style.color = 'black'
        }
        }, 10)
    }
    AtualizarValor()
})

VoltarButton.addEventListener('click', () => {
    MainClass.style.display = 'flex'
    Simulador.style.display = 'none'
})