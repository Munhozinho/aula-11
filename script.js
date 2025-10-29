function escuro() {
    //window.alert("Apertou")
    window.document.body.style.background = '#000000'
}
function claro() {
    //window.alert("Apertou")
    window.document.body.style.background = '#F0FFFF'
}

function sair(){
    var resposta = window.confirm("Você deseja sair?")

    if(resposta == true){
        window.location.href = 'sair.html'
    } else{
        alert("Você continua na página!")
    }
}

function calcular() {
    var numero1 = parseInt (document.getElementById('num1').value) 
    var numero2 = parseInt (document.getElementById('num2').value)
    var soma = numero1 + numero2

if(soma >= 10) {
    document.getElementById('resultado').innerHTML = "Mais que 10 igual a " + soma 
} else if (soma >= 5) {
    document.getElementById('resultado').innerHTML = "Mais que 5 igual a " + soma
} else {
    alert ('A soma é diferente de de mais que 5 e 10')
}

   
}


