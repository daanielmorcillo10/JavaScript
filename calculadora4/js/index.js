'use strict'

window.alert('Bienvenido a la calculadora')

let numero1
let numero2

class Calculadora {
  lastResult = 0

  sumar () {
    this.lastResult = numero1 + numero2
    return this.lastResult
  }

  restar () {
    this.lastResult = numero1 - numero2
    return this.lastResult
  }

  multiplica () {
    this.lastResult = numero1 * numero2
    return this.lastResult
  }

  divide () {
    this.lastResult = numero1 / numero2
    return this.lastResult
  }
}

class ValidationError extends Error {
  constructor (message, name) {
    super(message)
    this.name = name
  }
}

const calculadora = new Calculadora()

do {
  let error
  let operaciones
  let numeros

  function introducirOpera () {
    operaciones = window.prompt('Introduzca una operación (+, -, * ó /)')

    try {
      operaciones.trim()
    } catch (error) {
      throw new ValidationError('Error solo operaciones', 'Salir')
    }

    if (!(operaciones === '+' | operaciones === '-' | operaciones === '*' | operaciones === '/')) {
      throw new ValidationError('Error solo operaciones', 'Operaciones')
    }
  }

  do {
    error = true
    try {
      introducirOpera()
    } catch (exception) {
      if (exception.name === 'Salir') {
        break
      } else {
        window.alert(exception.message)
        error = false
      }
    }
  } while (!error)

  if (operaciones === null) {
    break
  }

  const comprobarOpera = function () {
    numeros = window.prompt('Introduzca dos números con un espacio: ')

    try {
      numeros.trim()
    } catch (error) {
      throw new ValidationError('Error solo números', 'Salir')
    }

    numero1 = Number(numeros.substring(0, numeros.indexOf(' ')))
    numero2 = Number(numeros.substring(numeros.indexOf(' '), numeros.length))

    if (numeros.substring(0, numeros.indexOf(' ')) === 'R') {
      numero1 = calculadora.lastResult
    }

    if (numeros.substring(numeros.indexOf(' '), numeros.length).trim() === 'R') {
      numero2 = calculadora.lastResult
    }

    if (!numero1 || !numero2) {
      throw new ValidationError('Error solo números', 'números')
    }
  }

  do {
    error = true
    try {
      comprobarOpera()
    } catch (exception) {
      if (exception.name === 'Salir') {
        break
      } else {
        window.alert(exception.message)
        error = false
      }
    }
  } while (!error)

  if (numeros === null) {
    break
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
