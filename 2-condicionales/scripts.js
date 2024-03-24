//EJERCICIO 1
/* Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es 
mayor de edad o no */

/* const mayoriaDeEdad = 18
let edadUsuario = prompt("Ingrese su edad")

if (edadUsuario >= mayoriaDeEdad) {
    alert("Es mayor de edad")
} else {
    alert("Es menor de edad")
} */

//EJERCICIO 2
/* Escribir un programa que almacene la cadena de caracteres contraseña en una 
variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña 
introducida por el usuario coincide con la guardada en la variable sin tener en cuenta 
mayúsculas y minúsculas. */

/* const contrasenia = "12345abc"
let input = prompt("Ingrese su contraseña".toLowerCase())

if (contrasenia == input) {
    alert("¡Bienvenido!")
} else {
    alert("Contraseña incorrecta")
} */

//EJERCICIO 3
/* Escribir un programa que pida al usuario dos números y muestre por pantalla su 
división. Si el divisor es cero el programa debe mostrar un error. */

/* let dividendo = prompt("Ingrese el dividendo: ")
let divisor = prompt("Ingrese el divisor: ")

if (divisor == 0) {
    alert("Error: El divisor no puede ser igual a 0")
} else {
    alert(dividendo / divisor)
} */

//EJERCICIO 4
/* Escribir un programa que pida al usuario un número entero y muestre por pantalla si es
par o impar. */

/* let numero = prompt("Ingrese un número")

if (numero % 2 == 0) {
    alert("El número es par")
} else {
    alert("El número es impar")
} */

//EJERCICIO 5
/* Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos 
ingresos iguales o superiores a 1000 € mensuales. Escribir un programa que pregunte 
al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene 
que tributar o no. */

/* let edad = prompt("Ingrese su edad")
let ingreso = prompt("Ingrese su sueldo mensual")

if (edad >= 16 && ingreso >= 1000) {
    alert("El usuario tiene obligación a tributar")
} else {
    alert("El usuario está exento de tributar")
} */

//EJERCICIO 6
/* Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el 
nombre. El grupo A esta formado por las mujeres con un nombre anterior a la M y los 
hombres con un nombre posterior a la N y el grupo B por el resto. Escribir un programa 
que pregunte al usuario su nombre y sexo, y muestre por pantalla el grupo que le 
corresponde. */

/* let nombre = prompt("Ingrese su nombre").toLowerCase()
let sexo = prompt("Ingrese su sexo (M o F)").toLowerCase()

alert("Primera letra nombre " + nombre[0] + "\n" + 
    "Sexo: " + sexo)

if ((nombre[0] < 'm' && sexo == 'f') || (nombre[0] > 'm' && sexo == 'm')) {
    alert("Estás en el grupo A")
} else {
    alert("Estás en el grupo B")
} */

//EJERCICIO 7
/* Los tramos impositivos para la declaración de la renta en un determinado país son los 
siguientes:

            RENTA               |   TIPO IMPOSITIVO
        Menos de 10,000€        |       5%
    Entre de 10,000€ y 20,000€  |       15%
    Entre de 20,000€ y 35,000€  |       20%
    Entre de 35,000€ y 60,000€  |       30%
        Más de 65,000€          |       45%

Escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el 
tipo impositivo que le corresponde. */

let rentaAnual = prompt("Ingrese su renta anual: ")

if (rentaAnual < 10000) {
    alert("Le corresponde 5% de tipo impositivo")
} else if (rentaAnual >= 10000 && rentaAnual < 20000) {
    alert("Le corresponde 15% de tipo impositivo")
} else if (rentaAnual >= 20000 && rentaAnual < 35000) {
    alert("Le corresponde 20% de tipo impositivo")
} else if (rentaAnual >= 35000 && rentaAnual < 60000) {
    alert("Le corresponde 30% de tipo impositivo")
} else if (rentaAnual >= 60000) {
    alert("Le corresponde 45% de tipo impositivo")
}

//EJERCICIO 8
/* Escribir un programa para una empresa que tiene salas de juegos para todas las 
edades y quiere calcular de forma automática el precio que debe cobrar a sus clientes 
por entrar. El programa debe preguntar al usuario la edad del cliente y mostrar el 
precio de la entrada. Si el cliente es menor de 4 años puede entrar gratis, si tiene entre
4 y 12 años debe pagar 5€, si tiene entre 13 y 17 debe pagar 8€ y si es mayor de 18 
años, 10€. */

