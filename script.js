'use strict';
const SimularButton = document.getElementById('btn_simular')
const VoltarButton = document.getElementById('btn_voltar')
const MainClass = document.getElementsByTagName('main')[0]
const Simulador = document.getElementsByClassName('simulado')[0]

let elementValorParcelas = document.getElementById('valor_parcelas');
let elementValorTotal = document.getElementById('valor_total');

var ValorCarroFixo = 103000

var taxaBanco = [
    {nome : 'banco_brasil', taxa : 1.13},
    {nome : 'santander', taxa : 1.12},
    {nome : 'caixa', taxa : 1.03},
]
var valorMeses = [
    {tempo: 12, taxa: 3},
    {tempo: 36, taxa: 6},
    {tempo: 48, taxa: 12}
]

SimularButton.addEventListener('click', () => {
    const FormInputs = {
        valor : document.getElementById('valor').value,
        banco : document.getElementById('banco').value,
        meses : document.getElementById('tempo').value
    }
    
    if(FormInputs.meses == 'null' || FormInputs.valor == "" || FormInputs.banco == 'null'){
        alert('Você precisa preencher todos os campos!')
        return
    }
    var mesesNumero = Number(FormInputs.meses)
    var valorNumero = Number(FormInputs.valor)
    console.log(valorNumero)
    if(isNaN(valorNumero)){
        alert('No campo de valor, deve-se informar apenas numeros!')
        return
    }
    
    MainClass.style.display = 'none'
    Simulador.style.display = 'flex'

    let jurosBanco = taxaBanco.find(e => e.nome == FormInputs.banco).taxa
    let jurosTempo = valorMeses.find(e => e.tempo == mesesNumero).taxa

    let valorTotal = ((ValorCarroFixo-valorNumero)*jurosBanco)*jurosTempo
    let valorParcelas = valorTotal/mesesNumero

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