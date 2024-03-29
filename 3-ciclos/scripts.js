//EJERCICIO 1
/* 1. Escribir un programa que pida al usuario una palabra y la muestre por 
pantalla 10 veces. */

/* let palabra = prompt("Ingrese la palabra a repetir: ")

for (let i = 0; i < 10; i++) {
    alert(i + 1 + ". " + palabra)
} */

//EJERCICIO 2
/* 2. Escribir un programa que pregunte al usuario su edad y muestre por 
pantalla todos los años que ha cumplido (desde 1 hasta su edad). */

/* let edad = prompt("Ingrese su edad")

for (i = 1; i <= edad; i++) {
    alert(i);
} */

//EJERCICIO 3
/* 3. Escribir un programa que pida al usuario un número entero positivo y 
muestre por pantalla todos los números desde 1 hasta ese número 
separados por comas. */

/* let numero = prompt("Ingrese un número")

let mensaje = 1
for (i = 2; i <= numero; i++) {
    mensaje = mensaje + ", " + i
}

alert(mensaje) */

//EJERCICIO 4
/* 4. Escribir un programa que pida al usuario un número entero positivo y 
muestre por pantalla la cuenta atrás desde ese número hasta cero 
separados por comas. */

/* let numero = prompt("Ingrese un número")

let mensaje = numero
for (i = numero - 1; i >= 0; i--) {
    mensaje = mensaje + ", " + i
}

alert(mensaje) */

//EJERCICIO 5
/* 5. Escribir un programa que pregunte al usuario una cantidad a invertir, el 
interés anual y el número de años, y muestre por pantalla el capital 
obtenido en la inversión cada año que dura la inversión. */

/* let inversion = prompt("Ingrese la cantidad a invertir")
let interes = prompt("Ingrese la tasa de interés anual (%)")
let anios = prompt("Ingrese la cantidad de años")
let cumulo = parseInt(inversion)

let capital
let mensaje
for (i = 1; i <= anios; i++) {
    capital = cumulo * (interes/100)
    cumulo = cumulo + capital
    alert("La inversión fue de: " + inversion + "\n" + 
        "En el año " + i + " el capital obtenido fue de: " + Math.round(capital*100)/100 + "\n" + 
        "y la inversión creció a: " + Math.round(cumulo*100)/100)
} */

//EJERCICIO 6
/* 6. Escribir un programa que muestre por pantalla la tabla de multiplicar del 
1 al 10. */

/* for (i = 1; i <= 10; i++) {
    let mensaje = ""
    for (j = 0; j <= 10; j++) {
        producto = i * j
        mensaje = mensaje + i + " x " + j + " = " + producto + "\n"
    }
    alert(mensaje)
} */

//EJERCICIO 7
/* 7. Escribir un programa que almacene la cadena de caracteres contraseña 
en una variable, pregunte al usuario por la contraseña hasta que 
introduzca la contraseña correcta. */

/* let contrasenia = "alvaro12345"

let intento
do {
    intento = prompt("Ingrese la contraseña correcta: ")
} while(intento != contrasenia) */

//EJERCICIO 8
/* 8. Escribir un programa que pida al usuario un número entero y muestre 
por pantalla si es un número primo o no. */

let numero = prompt("Ingrese un número entero")

//Dividir el número elegido entre si mismo y todos los números previos hasta llegar a 1
//Sólo si la división entre si mismo y 1 es exacta, el número es primo
//Si algún otro número resulta en división exacta, no es primo

for (i = numero-1; i > 1; i--) {
    if(numero % i == 0) {
        console.log("El numero no es primo")
        alert("El numero no es primo")
        break;
    }
}