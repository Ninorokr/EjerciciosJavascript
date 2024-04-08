//ARRAYS

//EJERCICIO 1
/* 1. Escribir un programa que almacene las asignaturas de un curso (por ejemplo 
Matemáticas, Física, Química, Historia y Lengua) en un array y la muestre por 
pantalla. */

let asignaturas = ['Matemáticas', 'Física', 'Química', 'Historia', 'Lengua']

//alert(asignaturas)

/* let asignaturasString = ""
for (const asignatura of asignaturas) {
    asignaturasString = asignaturasString + asignatura + ", "
}

alert(asignaturasString) */

//alert(asignaturas.join(", "))
    
//EJERCICIO 2
/* 2. Escribir un programa que almacene las asignaturas de un curso (por ejemplo 
Matemáticas, Física, Química, Historia y Lengua) en un array y la muestre por 
pantalla el mensaje Yo estudio <asignatura>, donde <asignatura> es cada una de 
las asignaturas del array. */

/* for (const asignatura of asignaturas) {
    alert("Yo estudio " + asignatura)
} */
        
//EJERCICIO 3
/* 3. Escribir un programa que almacene las asignaturas de un curso (por ejemplo 
Matemáticas, Física, Química, Historia y Lengua) en un array, pregunte al usuario 
la nota que ha sacado en cada asignatura, y después las muestre por pantalla con 
el mensaje En <asignatura> has sacado <nota> donde <asignatura> es cada una 
des las asignaturas del array y <nota> cada una de las correspondientes notas 
introducidas por el usuario. */

//SIN OBJETOS

/* let notas = []
let i = 0
for (const asignatura of asignaturas) {
    notas[i++] = prompt("Ingrese su nota para " + asignatura)
}

i = 0
for (const asignatura of asignaturas) {
    alert("En " + asignatura + " has sacado " + notas[i++])
} */

//CON OBJETOS

/* let objAsignaturas = [
    {nom: 'Matemáticas', nota: 0},
    {nom: 'Física', nota: 0},
    {nom: 'Química', nota: 0},
    {nom: 'Historia', nota: 0},
    {nom: 'Lengua', nota: 0}
]

for (const objAsignatura of objAsignaturas) {
    objAsignatura["nota"] = prompt("Ingrese su nota para " + objAsignatura["nom"])
}

for(const objAsignatura of objAsignaturas) {
    alert("En " + objAsignatura.nom + " has sacado " + objAsignatura.nota)
} */
            
//EJERCICIO 4
/* 4. Escribir un programa que pregunte al usuario los números ganadores de la lotería 
primitiva, los almacene en un array y los muestre por pantalla ordenados de menor 
a mayor. */

/* function compareNumbers(a, b) {
    return a - b
} */

/* const cantNumeros = 6
let numerosLoteria = []

for (i = 1; i <= cantNumeros; i++) {
    numerosLoteria[i-1] = prompt("Ingrese el número " + i + " a jugar")
    console.log(i-1 + ": " + numerosLoteria[i-1])
} */

//let nrosOrdenados = numerosLoteria.sort()

//alert("Los números elegidos son: " + numerosLoteria.sort(compareNumbers).join(", "))

//16, 2, 22, 40, 13, 6

//INCOMPLETO

/* for (i = 0; i <= cantNumeros-1; i++) {
    console.log("i = " + i + " = " + numerosLoteria[i] + "; i+1 = " + Number(i+1) + " = " + numerosLoteria[Number(i+1)])
    if (numerosLoteria[i] > numerosLoteria[i+1]) {
        console.log("i = " + i + ": " + numerosLoteria[i] + " vs. " + numerosLoteria[i-1])
        let temp = numerosLoteria[i]
        numerosLoteria[i] = numerosLoteria[i+1]
        numerosLoteria[i+1] = temp
        i--
    }
}

alert("Los números elegidos son: " + numerosLoteria.join(", ")) */
            
//EJERCICIO 5
/* 5. Escribir un programa que almacene en un array los números del 1 al 10 y los 
muestre por pantalla en orden inverso separados por comas. */

/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

alert(numeros.reverse().join(", ")) */

//EJERCICIO 6
/* 6. Escribir un programa que almacene las asignaturas de un curso (por ejemplo 
Matemáticas, Física, Química, Historia y Lengua) en un array, pregunte al usuario 
la nota que ha sacado en cada asignatura y elimine del array las asignaturas 
aprobadas. Al final el programa debe mostrar por pantalla las asignaturas que el 
usuario tiene que repetir. */

const notaReprobatoria = 11

let objAsignaturas = [
    {nom: 'Matemáticas', nota: 0},
    {nom: 'Física', nota: 0},
    {nom: 'Química', nota: 0},
    {nom: 'Historia', nota: 0},
    {nom: 'Lengua', nota: 0}
]

for (const objAsignatura of objAsignaturas) {
    objAsignatura["nota"] = prompt("Ingrese su nota para " + objAsignatura["nom"])
}

for (i = 0; i < objAsignaturas.length; i++) {
    if (objAsignaturas[i].nota > notaReprobatoria) {
        objAsignaturas.splice(i, 1)
    }
}
   
let cursos = ""
for (const objAsignatura of objAsignaturas) {
    cursos = cursos + objAsignatura.nom + ", "
}

alert("Los cursos a repetir son " + cursos)
    
//EJERCICIO 7
/* 7. Escribir un programa que almacene el abecedario en un array, elimine las letras 
que ocupen posiciones múltiplos de 3, y muestre por pantalla la lista resultante. */
            
//EJERCICIO 8
/* 8. Escribir un programa que pida al usuario una lista de letras y muestre por pantalla 
el número de veces que ingresó cada vocal. */

//EJERCICIO 9
/* 9. Escribir un programa que almacene en un array los siguientes precios, 50, 75, 46, 
22, 80, 65, 8, y muestre por pantalla el menor y el mayor de los precios. */