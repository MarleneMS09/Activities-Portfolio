/*

Arrays o arreglos

-- Definicion --

Un arreglo o array es un conjunto de datos que se pueden almacenar en una sola variable.

Cuando tenemos una variable, la usamos para almacenar UN solo dato. 
En cambio, en un arreglo, guardamos MUCHOS datos a manera de lista.

Un array ya no es un tipo de dato primitivo, se considera un objeto porque es una estructura de datos

*/


//Ejemplo 1
let nombre = "Felipe"; //Aqui se almacena un solo dato
array = ["Felipe", "Ivonne", "Briana", "Zabdiel", "Alonso"];

//Ejemplo de un array con diferentes tipos de datos
arrayAnimalitosDelBosque = ["Felipe", 23, true, null, undefined];

/*
-- Formas de crear un array --

1.- Primera Forma

Utilizando la palabra reservada "new Array". En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).
*/

var colores = new Array(3); //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.


var colores = new Array(5);
var marcaDeColores = new Array("Mapita", "Prismacolor", "BlancaNieves", "Faber Castell", "Norma", "Crayola");

/*

2.- Segunda Forma

La segunda forma se trata de crear el arreglo solo usando corchetes []. Esta forma es la mas usada para crear arreglos en JS.

*/
var marcaDeColores2 = ["Mapita", "Norma", "Vividel", "Faber Castell", "BlancaNieves"];

//Ejemplos de Arreglos
listaDePerritos = ["Chihuahua", "Calupoh", "Mestizos", "Callejeros", "Pug"];
console.log(listaDePerritos);

//Ejemplo de Arreglo 2
listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
console.log(listaDelSuper)

/*

-- Acceder a elementos de un array

Antes de querer mostrar los elementos de un arreglo, hay que definir algunas cosas:

 - Posicion de los elementos, donde empezamos a enumerar desde el 0 y estas posiciones se llaman indices

 //Posicion de los elementos de la lista del super
    0: "Leche"
    1: "Papitas"
    2: "Jabon"
    3: "Nachos"
    4: "Huevos"

Numero de elementos NO ES LO MISMO que su posicion.


*/


//Ejemplo de Arreglo 2
listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
console.log(listaDelSuper)

console.log("El producto en la posicion 1 es : " + listaDelSuper[1]);
console.log("El producto en la posicion 4 es : " + listaDelSuper[4]);
console.log("El producto en la posicion 2 es : " + listaDelSuper[2]);
console.log("El producto en la posicion 6 es : " + listaDelSuper[6]);

//Encontramos que al tratar de seleccionar un elemento de nuestro que no existe, aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe mas informacion.


/*

Array Asociativo

Son arreglos donde cada elemento esta asociado no solo con su indice, si no que tambien esta asignado a un identificador.

Sintaxis de un arreglo asociativo



*/

//Ejemplo de una Ecommerce
let propiedadesDeMiComputadora = {
    marca: "Hp", //la marca es mi identificador, y "Asus" es mi valor
    modelo: "Pavilon",
    procesador: "Intel Core i5",
    ram: "6 GB",
    almacenamiento: "500gb",
    precio: "11000"
}

console.log(propiedadesDeMiComputadora);
console.log("La RAM de mi computadora es de: ", propiedadesDeMiComputadora["ram"]);
console.log("La marca de la computadora que elegiste: ", propiedadesDeMiComputadora["marca"], "y su precio es de: ", propiedadesDeMiComputadora["precio"]);


//Ejemplo de una Red Social
let publicacionRedSocial = {
    nombre: "Marlene",
    usuario: "@marlenems",
    fecha: "enero",
    likes: "2000",
    descripcion: "Esta es una bonita foto de pizza",
    ubicacion: "Guadalajara"
}

console.log("Estas son las publicaciones de Agosto: ", publicacionRedSocial["fecha"]);


/*
Metodos de los arrays 

En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elemenos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

La sintaxis basica del metodo es .nombreMetodo(valorAModificar);

Podemos dividir estos metodos en 3: 

    - Metodos transformadores
    - Metodos accesores
    - Metodos repetitivos (spoiler)

*/
console.log("//////////////////////////////////////");

var arrayDeEjemplo = ["Manzanas", "Peras", "Mangos", "Mandarinas", "Uvas", "Sandia", "Fresas"];

console.log("Este es nuestro arreglo Original de 7 elementos", arrayDeEjemplo);


//Metodos transformadores

//push(): Agrega un elemento al final del arreglo
arrayDeEjemplo.push("Pitaya");
console.log("Agregamos la Pitaya a nuestro arreglo de ejemplo: ", arrayDeEjemplo);

//pop(): Eliminar el ultimo elemento del arreglo
arrayDeEjemplo.pop(); //con pop no hace falta especificar el dato
console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);

//unshift(): Agregamos uno o mas elementos al princip del arreglo
arrayDeEjemplo.unshift("Bananas", "Tunas", "Aguacate", "lichi");
console.log("Agregamos 4 elementos al principio del arreglo", arrayDeEjemplo);

//shift(): Eliminar el primer elemento del arreglo
arrayDeEjemplo.shift();
console.log("Eliminamos el primer elemento del arreglo", arrayDeEjemplo);

//sort(): Ordenar los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente
arrayDeEjemplo.sort();
console.log("Este es mi arreglo de ejemplo ordenado", arrayDeEjemplo);

//reverse(): Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);


//slice(): Extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, copiando el arreglo (no se modifica nada, sino que creamos una copia)
var saludo1 = "Hola, estoy aprendiendo arreglos en Generation"
var saludo2 = saludo1.slice(3, 4);
console.log("Imprimimos la rebanada del arreglo original", saludo2);

var saludo3 = saludo1.slice(9);
console.log("Imprimimos la rebanada del arreglo original", saludo3);

var saludo4 = saludo1.slice(-9, -5);
console.log("Imprimimos la rebanada del arreglo original", saludo4);

/*
//splice(): Modificar el arreglo en 3 formas distintas

- Eliminar elementos del arreglo
- Agregar elementos nuevos al arreglo
- Reemplazar elementos que ya existen en el arreglo


Sintaxis basica

splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

    - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
    - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
    - elemento a agregar : los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)

*/

let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arrreglo de los meses del anio: ", mesesDelAnio);

//Eliminar y agregar datos usando splice
mesesDelAnio.splice(1, 2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ",mesesDelAnio);


//Agregar elemenos sin borrar nada arreglo
let diasSemana = ["Lunes", "Martes", "Miercoles"];
console.log("Los dias de la semana son: ", diasSemana);

diasSemana.splice(5, 0, "Jueves", "Viernes", "Sabado");

console.log("Los nuevos dias de la semana son: ", diasSemana);


/*
Metodos Accesores
*/

var ensalada = ["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];

//length():Nos permite saber el numero de elementos o longitud del arreglo

console.log("Tenemos estos elementos en el arreglo ensalada ", ensalada.length);


//join(): Nos permite unir los elementos del arreglo con una cadena de texto
console.log("Esta es una feliensalada: ", ensalada.join( "-"));

//concat(): Nos permite unir dos o mas arrays en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos.

let dulces = ["galletas", "chetos", "glorias", "galletas", "gansitos", "picafresas", "tamborines", "galletas"];

let mezcla = ensalada.concat(dulces);
console.log("Esta es mi mezcla: ", mezcla);


//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo

console.log("La posicion de los chetos de mi arreglo dulces: ", dulces.indexOf("chetos"));

//lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo
console.log("La ultima posicion de las galletas es: ", dulces.lastIndexOf("galletas"));


//toString
//valueOf : valor de
console.log(dulces.valueOf())

//toString(): Nos permite convertir el array en una cadena de texto
console.log(mezcla.toString());

//valueof(): Nos permitir devolver el valor de nuestro arreglo
console.log(mezcla.valueOf());

//includes(): Nos permite saber si un elemento existe o no dentro de un arreglo
console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("gansitos")); //true
console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("cacahuates")); //false

//metodos repetidores

//filter (): recorre el array y devuelve uno nuevo con los elementos que cumplan la condición (es como un bucle)
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log ("Numeros del 1 al 10", numeros);
var numeros1al5 = numeros.filter(numero => numero > 5) 
//refactorizacion del código: hacer nuestro código más pequeño


//filtraremos los datos del arreglo
var numeros1al5 = numeros.filter (numero => numero <5);
console.log("Estos son los numeros que cumplen la condicion al ser menores que 5", numeros1al15);
var numero6al9 =numeros.filter (numero =>numero >=6 && numero <10);
console.log ("estos son los numeros que cumplan la condicion al ser mayores que 5 y menores que 10", numeros6al9);

//map(): recorrer el arreglo, modificar los elementos presentes en el y retornar esos valores modificados en uno nuevo con la misma
//longitud que el arreglo original
var map= numeros.map (numeros=> numeros*3)
console.log("estos son los numeros multiplicados por 3", map);

//ejercicio improvisado tablas del 1-10
var arregloBase = [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10];
var tabla2= arregloBase.map (numeros => numeros *2);
console.log ("esta es la tabla del 2", tabla2);
var tabla2= arregloBase.map (numeros => numeros *3);
console.log ("esta es la tabla del 3", tabla3);

//foreach(): este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itrea del array
//al giual que otros iteradores ccomo map o el filter, este metodo recibe algunos parametros:
/*

forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, este metodo recibe algunos parametros:

    - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
    - Indice: La posicion que tiene el elemento dentro del arreglo
    - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

*/

//Ejemplo para remover el primer numero impar de un arreglo

let listaNumeros = [3, 6, 8, 10, 12,];
let impar = 3;

var impares = listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
    if (numero === impar){
        listaNumeros.shift();
    }
});

console.log("Estos son los elementos del array que no son impares", listaNumeros);

/*

Bucles o loops

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condicion. Las condiciones normalmente devuelven un true o false al ser evaluadas, ademas de que el bucle continuara ejecutandose hasta que la condicion devuelva un false
Normalmente tenemos 3 ciclos
-While (mientras)
-Do while (hacer mientras)
-For (para)
Tenemos otras sentencias más especifícas:
-for in: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obtenemos la posición
-for of: sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo, obtenemos su valor 


Sentence while(mientras)
esta sentencia nos va a permitir recorrer un bloque de código siempre que se cumpla una condición especifíca, donde el resultado debe ser true
La estructura Whole es:
palabraReservada while (condicion que tiene ser true) {
    //codigo a ejecutar
}
*/
let numeroInicial = 1;

let valorLimite = prompt(
  "Hola, por favor ingresa un numero entero positivo que sea el limite"
);

while (numeroInicial <= valorLimite) { //MIENTRAS el numero inicial sea menor que el limite, ejecutamos lo de abajo
  if (numeroInicial % 2 != 0) { //si al dividir el numero inicial entre 2, el residuo es diferente de 0 (es impar)...
    console.log(numeroInicial); //Imprimimos el valor de la variable
  }
  numeroInicial++; // Incrementamos de uno en uno nuestra variable inicial
}

/* 
Do while (Hacer mientras o hacer hasta)
El bucle do while nos sirve para ejecutar una sentencia especificada hasta que la condicion
de aprobación de evalua como falsa. La condición se evalua después de ejectutar la sentencia,
dando como resultado, que la sentencia especificada se ejecuta al menos una vez.
En pocas palabras con el while preguntamos una vez, evaluamos la condición y ejecutamos la instrucción al menos una vez
y luego preguntamos la condicion
estructura básica de un do while
palabraReservada do {
    //codigo a ejecutar}
while (condicion);


*/ 
let numerito = 0; //declaramos la variable en 0
do { //eso se hará...
    console.log ("el numero es: ")

}

//While vs Do while
console.log ("While");
let numeroWhile = 0; //iniciamos en 0
while (numeroWhile <5) { //mientras variable sea menor a 5
    numeroWhile ++; // la incremento en 1
    console.log (numeroWhile); //la imprimo
}
console.log ("dowhile");
let numerodowhile =0; //iniciamos en 0
do { //iniciamos en 0
    console.log (numerodowhile); //imprimir
    numerodowhile ++, //aumentar en 1
}
while (numerodowhile <5); //..mientras numero sea menor a 5

/*setencia for (para) 
Este ciclo para iterar sobre una sección de una variable. Es diferente al while porque le podemos pasar una lista de valores
y ejecutar una vez por cada uno de ellos. Para esto tenemos tres elementos:
- El valor inicial de la variable que vamos a iterar (i=0)
-La condición que tiene que cumplirse para que el bucle se siga ejecutando (i <5)
-La aparición que se realiza una vez que termina el bucle (i+++)
Estructura básica del for:
for (valor inicial, condicion, operacion) {

}

*/
//ejemplo:
console.log ("for");
for (let i=0; i<10, i++); {
    console.log (i)
}
//let i=0 es mi valor inicial
// i<5 establece la condición para que el bucle se siga ejecutando
// i++ incrementa el valor en 1