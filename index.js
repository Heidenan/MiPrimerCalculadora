const FnSuma = require("./modules/suma")
const FnResta = require("./modules/resta")
const FnMultiplicacion = require("./modules/multiplicacion")
const FnDivision = require("./modules/division")
const process = require ("process")
const params = process.argv
let action = params [2]
let numberOne = params [3]
let numberTwo = params [4]
numberOne = parseInt (numberOne)
numberTwo = parseInt (numberTwo)

console.log ("params", params)

if (action === "suma")
{let resultadoSuma = FnSuma (numberOne,numberTwo);
    console.log ("La suma da como resultado "+ resultadoSuma)

}
if (action === "resta") {
    
let resultadoResta = FnResta (numberOne, numberTwo);
console.log ("La resta da como resultado "+ resultadoResta)

}

if (action === "multiplicacion") {
    let resultadoMultiplicacion = FnMultiplicacion (numberOne,numberTwo);
console.log ("La multiplicacion da como resultado "+ resultadoMultiplicacion)

}

if (action === "division" && numberOne && numberTwo != 0) {
    let resultadoDivision = FnDivision (numberOne,numberTwo);
    console.log ("La division da como resultado "+ resultadoDivision)
} else console.log ("No se puede dividir por 0")


