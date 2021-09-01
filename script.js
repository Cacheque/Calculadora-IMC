
const calcular = document.getElementById('calcular')

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        var classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso'
            document.body.style.background = 'yellowgreen'
        } else if(valorIMC < 25){
            classificacao = 'com o seu peso ideal. Continue assim!'
            document.body.style.background = '#008000'
        } else if(valorIMC < 30){
            classificacao = ' com sobrepeso'
            document.body.style.background = 'yellow'
        } else if(valorIMC < 35){
            classificacao = 'com obesidade grau 1'
            document.body.style.background = '#995151'
        } else if(valorIMC < 40){
            classificacao = 'com obesidade grau II'
            document.body.style.background = 'red'

        } else {
            classificacao = 'com obesidade grau III. Cuide rapidamente da sua saúde'
            document.body.style.background = 'purple'

        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e tu estás ${classificacao}`;

    } else{
        resultado.textContent = 'Por favor, preencha todos os campos!'
    }

}

calcular.addEventListener('click', imc);