"use strict";
let numero1;
let numero2;
let error;
let operaciones;


alert( 'Bienvenido a la calculadora' );

do{
    do{
        operaciones= prompt ('Introduzca una operación (+, -, * ó /)').trim();
        if(operaciones === "+" | operaciones === "-"| operaciones === "*"| operaciones === "/"){
            error = true;
        }
        else{
            error = false;
            alert( 'Error solo operaciones');  
        }

    }while(!error);
    
    do{
        let numeros = prompt ('Introduzca dos números con un espacio: ').trim();
        numero1 = Number(numeros.substring(0, numeros.indexOf(' ')));
        numero2 = Number(numeros.substring(numeros.indexOf(' '), numeros.length));
        if(numero1 && numero2){
            error = true;
        }else{    
            error = false;
            alert( 'Error solo números' );
        }
    }while(!error);

    switch (operaciones) {
        case "+": 
        alert(numero1 + numero2);
        break;

        case "-":
        alert(numero1 - numero2);
        break;

        case "*": 
        alert(numero1 * numero2);
        break;

        case "/":
            alert(numero1 / numero2);
        break;
        default:
    }

}while(confirm("¿Quiere realizar otra operacion?"));



