//EJERCICIO 1
//Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo!.

//alert("¡Hola mundo!")

//EJERCICIO 2
/* Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable y luego muestre por
pantalla el contenido de la variable. */

let saludo = "¡Hola mundo!"
//alert(saludo)

//EJERCICIO 3
/* Escribir un programa que pregunte el nombre del usuario en la consola y después de que el usuario lo
introduzca muestre por pantalla la cadena ¡Hola <nombre>!, donde <nombre> es el nombre que el
usuario haya introducido. */

//let nombre = prompt("Ingrese su nombre")
//alert("¡Hola " + nombre + "!")

//EJERCICIO 4
//Escribir un programa que muestre por pantalla el resultado de la siguiente operación aritmética

//alert(Math.pow((3+2)/(2*5), 2))

//EJERCICIO 5
/* Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste por hora. 
Después debe mostrar por pantalla la paga que le corresponde. */

//let horasTrabajadas = prompt("Ingrese la cantidad de horas trabajadas")
//let costePorHora = prompt("Ingrese el coste por hora")
//let totalPorDia = horasTrabajadas * costePorHora
//let totalPorMes = totalPorDia * 22

/* alert("Coste total por día = " + totalPorDia + "\n" + 
        "Coste total por mes = " + totalPorMes) */

//EJERCICIO 6
/* Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de 
masa corporal y lo almacene en una variable, y muestre por pantalla la frase Tu índice de masa corporal
es <imc> donde <imc> es el índice de masa corporal calculado redondeado con dos decimales. */

/* let peso = prompt("Ingrese su peso en kgs.")
let altura = prompt("Ingrese su estatura en metros")
let imc = peso / Math.pow(altura, 2)

alert("Tu índice de masa corporal es: " + Math.round(imc*100)/100) */

//EJERCICIO 7
/* Escribir un programa que pida al usuario dos números enteros y muestre por pantalla la <n> entre <m> 
da un cociente <c> y un resto <r> donde <n> y <m> son los números introducidos por el usuario, y <c>
y <r> son el cociente y el resto de la división entera respectivamente. */

/* let num1 = prompt("Indique un número: ")
let num2 = prompt("Indique otro número: ")
let cociente = num1 / num2;
let residuo = num1 % num2;

alert(num1 + " entre " + num2 + " da un cociente " + cociente + " y el resto " + residuo) */

//EJERCICIO 8
/* Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el número de 
años, y muestre por pantalla el capital obtenido en la inversión. */

/* let inversion = prompt("Ingrese la cantidad a invertir")
let interesAnual = prompt("Ingrese el interés anual")
let anios = prompt("Ingrese el número de años")
let total = inversion * (interesAnual*100) * anios

alert("El capital total obtenido es: " + total) */


//EJERCICIO 9
/* Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por 
correo y la empresa de logística les cobra por peso de cada paquete así que deben calcular el peso de los
payasos y muñecas que saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 
g. Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y 
calcule el peso total del paquete que será enviado. */

/* let pesoPayaso = 112
let pesoMunieca = 75
let numPayasos = prompt("Ingrese la cantidad de payasos vendidos: ")
let numMuniecas = prompt("Ingrese la cantidad de muñecas vendidos: ")
let pesoTotal = (pesoPayaso * numPayasos) + (pesoMunieca * numMuniecas)

alert("El peso total del paquete es: " + pesoTotal) */

//EJERCICIO 10
/* Una panadería vende barras de pan a 3.49€ cada una. El pan que no es el día tiene un descuento del 
60%. Escribir un programa que comience leyendo el número de barras vendidas que no son del día. 
Después el programa debe mostrar el precio habitual de una barra de pan, el descuento que se le hace 
por no ser fresca y el coste final total. */

let precioPan = 3.49
let numPanPasado = prompt("Ingrese las barras de pan pasadas: ")
let descuento = 0.60

let totalSinDscto = precioPan * numPanPasado
let totalConDscto = precioPan * descuento * numPanPasado
let ahorro = totalSinDscto - totalConDscto

alert("El precio del pan es: " + precioPan + "\n" + 
        "El pan que no es del día tiene un descuento de: " + descuento*100 + "%\n" + 
        "El precio total de pan adquirido es por: " + Math.round(totalSinDscto*100)/100 + " pesos\n" + 
        "El precio con descuento es de: " + Math.round(totalConDscto*100)/100 + " pesos\n" + 
        "Has ahorrado: " + Math.round(ahorro*100)/100)


