'use strict'

window.alert('Bienvenido a la calculadora')

const calculadora = {

  lastResult: 0

}

do {
  let numero1
  let numero2
  let error
  let operaciones

  function introducirOpera () {
    do {
      operaciones = window.prompt('Introduzca una operación (+, -, * ó /)')

      if (operaciones === null) {
        break
      }
      operaciones.trim()

      if (operaciones === '+' | operaciones === '-' | operaciones === '*' | operaciones === '/') {
        error = true
      } else {
        error = false
        window.alert('Error solo operaciones')
      }
    } while (!error)
  }

  introducirOpera()
  if (operaciones === null) {
    break
  }

  const comprobarOpera = function () {
    do {
      const numeros = window.prompt('Introduzca dos números con un espacio: ').trim()
      numero1 = Number(numeros.substring(0, numeros.indexOf(' ')))
      numero2 = Number(numeros.substring(numeros.indexOf(' '), numeros.length))

      if (numeros.substring(0, numeros.indexOf(' ')) === 'R') {
        numero1 = calculadora.lastResult
      }

      if (numeros.substring(numeros.indexOf(' '), numeros.length).trim() === 'R') {
        numero2 = calculadora.lastResult
      }

      if (numero1 || numero2) {
        error = true
      } else {
        error = false
        window.alert('Error solo números')
      }
    } while (!error)
  }

  comprobarOpera()

  calculadora.sumar = function () {
    this.lastResult = numero1 + numero2
    return this.lastResult
  }

  calculadora.restar = function () {
    this.lastResult = numero1 - numero2
    return this.lastResult
  }

  calculadora.multiplica = function () {
    this.lastResult = numero1 * numero2
    return this.lastResult
  }

  calculadora.divide = function () {
    this.lastResult = numero1 / numero2
    return this.lastResult
  }

  switch (operaciones) {
    case '+':
      window.alert(calculadora.sumar())
      break

    case '-':
      window.alert(calculadora.restar())
      break

    case '*':
      window.alert(calculadora.multiplica())
      break

    case '/':
      window.alert(calculadora.divide())
      break
  }
} while (window.confirm('¿Quiere realizar otra operacion?'))
