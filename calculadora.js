function calcular(operacao){
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)
    let resultado;
    let erro;

    switch (operacao){
        case 'somar':
            resultado = num1 + num2;
            erro = ""
            break;
        case 'subtrair':
            resultado = num1 - num2;
            erro = ""
            break;
        case 'multiplicar':
            resultado = num1 * num2;erro = ""
            break;
        case 'dividir':
            if (num2 === 0){
                erro = "Erro: divisão por 0"
                resultado = ""
            }else{
                erro = ""
                resultado = num1 / num2;
            }
            break;
    }
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
    document.getElementById('erro').textContent = erro;
}