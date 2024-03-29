//EJERCICIO 1
/* 1. Escribir una función que muestre por pantalla el saludo ¡Hola amiga! 
cada vez que se la invoque. */

/* function saludo() {
    alert("¡Hola amiga!")
}

saludo() */

//EJERCICIO 2
/* 2. Escribir una función a la que se le pase una cadena <nombre> y muestre
por pantalla el saludo ¡hola <nombre>!. */

/* function saludo(nombre) {
    alert("¡Hola " + nombre + "!")
}

saludo("Alvaro") */

//EJERCICIO 3
/* 3. Escribir una función que reciba un número entero positivo y devuelva su 
factorial. */

/* function factorial(numero) {
    if (numero < 0) {
        alert("El número debe ser mayor a 0")
    }

    for (i = numero-1; i > 0; i--) {
        numero *= i
    }

    return numero
}

alert(factorial(Number(prompt("Ingrese un número entero positivo")))) */

//EJERCICIO 4
/* 4. Escribir una función que calcule el total de una factura tras aplicarle el 
IVA. La función debe recibir la cantidad sin IVA y el porcentaje de IVA a 
aplicar, y devolver el total de la factura. Si se invoca la función sin 
pasarle el porcentaje de IVA, deberá aplicar un 21%. */

/* let monto = Number(prompt("¿Cuánto es el subtotal?"))
let iva = Number(prompt("¿Cuánto es el IVA?"))

function calcularTotal(monto, iva = 21) {
    if (iva == 0) {
        iva = 21
    }
    return monto += (monto * (iva/100))
}

alert(calcularTotal(monto, iva)) */

//EJERCICIO 5
/* 5. Escribir una función que calcule el área de un círculo y otra que calcule el
volumen de un cilindro usando la primera función. */

/* let radio = Number(prompt("Indicar el radio del círculo"))

function calculaAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2)
}

function calculaAreaLateralCilindro(radio) {
    let altura = Number(prompt("Indique la altura del cilindro"))
    return 2 * Math.PI * radio * altura
}

function calculaAreaCilindro(areaCirculo, areaLateral) {
    return Math.round((areaLateral + (2 * areaCirculo))*100)/100
}

alert(calculaAreaCilindro(calculaAreaCirculo(radio), calculaAreaLateralCilindro(radio))) */

//EJERCICIO 6
/* 6. Escribir una función que reciba una muestra de números en una lista y 
devuelva su media. */

/* function media() {
    let suma = 0

    for (i = 0; i < 5; i++) {
        let numero = Number(prompt("Ingrese un número"))
        if(numero == 0) {
            return suma / i
        }
        suma += numero
    }
}

alert(media()) */

//EJERCICIO 7
/* 7. CREATIVIDAD: escribir una función que resuelva un pequeño problema y 
cumpla con las siguientes carácteristicas...
1. Que no reciba parámetros y no devuelva ningún dato.
2. Que reciba parámetros y no devuelva ningún dato.
3. Que no reciba parámetros y devuelva algún dato.
4. Que reciba parámetros y devuelva algún dato. */

