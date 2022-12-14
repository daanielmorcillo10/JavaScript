"use strict";

alert('Bienvenido a la calculadora');

do {

    let numero1;
    let numero2;
    let error;
    let operaciones;

    function introducirOpera() {
        do {
            operaciones = prompt('Introduzca una operación (+, -, * ó /)');
            if (operaciones === null) {
                break;
            }
            operaciones.trim();
            if (operaciones === "+" | operaciones === "-" | operaciones === "*" | operaciones === "/") {
                error = true;
            }
            else {
                error = false;
                alert('Error solo operaciones');
            }

        } while (!error);
    }

    introducirOpera();
    if (operaciones === null) {
        break;
    }

    let comprobarOpera = function () {

        do {
            let numeros = prompt('Introduzca dos números con un espacio: ').trim();
            numero1 = Number(numeros.substring(0, numeros.indexOf(' ')));
            numero2 = Number(numeros.substring(numeros.indexOf(' '), numeros.length));
            if (numero1 || numero2) {
                error = true;
            } else {
                error = false;
                alert('Error solo números');
            }
        } while (!error);
    }

    comprobarOpera();

    let sum = (numero1, numero2) => numero1 + numero2;


    let resta = (numero1, numero2) => numero1 - numero2;


    let multiplica = (numero1, numero2) => numero1 * numero2;


    let divide = (numero1, numero2) => numero1 / numero2;

    switch (operaciones) {
        case "+":
            alert(sum(numero1, numero2));
            break;

        case "-":
            alert(resta(numero1, numero2));
            break;

        case "*":
            alert(multiplica(numero1, numero2));
            break;

        case "/":
            alert(divide(numero1, numero2));
            break;
    }

} while (confirm("¿Quiere realizar otra operacion?"));
