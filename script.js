
function calcular(){
    let primerValor = parseInt(prompt("Ingrese el Primer valor"));
    let operador = prompt("Ingrese el calculo que desea realizar   + - / *");
    let segundoValor = parseInt(prompt("Ingrese el Segundo valor"));
    let resultado;
    let correcto = true;

    switch(operador) {
        case "+":
          resultado = primerValor + segundoValor;
          break;
        case "-":
            resultado = primerValor - segundoValor;
          break;
        case "*":
            resultado = primerValor * segundoValor;
          break;          
        case "/":
            if(segundoValor !== 0){
                resultado = primerValor / segundoValor;
            }else{
                resultado = "No se puede dividir por 0";
                correcto = false;
            }
          break;
        default:
            resultado = "El operador ingresado es incorrecto";
            correcto = false;
    }

    if(isNaN(primerValor) || isNaN(segundoValor)){
        resultado = resultado + " Uno de los valores ingresados no es numerico";
        correcto = false;
    }

    if(correcto){
        alert("El resultado es: " + resultado);
    }else{
        alert("Se han ingresado valores incorrectos: " + resultado);
    }
}

