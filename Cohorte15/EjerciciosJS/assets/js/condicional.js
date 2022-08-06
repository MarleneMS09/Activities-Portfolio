const dinero = "False";
const hambre = "true";
alert(dinero = hambre); //false
alert(dinero || hambre) //true
// AND
// Todas las condiciones deben ser true
// true && true  => true
// true  && false => false
// false && false => false


// OR
// Solo una condicion debe ser true
// true || true = true
// true || false = true
// false || false = false

// NOT
// Es la negación a la condición
// true => false, false => true
var a = 2; //undefined
a = a + 1; //3
a = a + 2; //5
a = a + 3; //8
_________________________________________________________
// para ahorrar repetir dos veces la misma variable:
var a = 2;
a += 2; //4
a += 5;  //9
a += 50192384091823; //50192384091832
var hola = "Hola";
hola += "Mundo" //hola mundo
__________________________________________________________
var b = 10;
b -= 5; //5
b -= 10; // -5
var c = "Hola Mundo"
c -= "Mundo" // NAN
c -= 3; //Nan... no se pueden restar strings sólo números
__________________________________________________________
let hora_2 = 8;

if (hora_2 == 8) {
    alert("Buen dia");
}

var hour_2 = 3;

if (hora_2 != 8) {
    console.log("Buen dia");
}
__________________________________________________________
var hungry = true;
if (hungry == true) {
    alert("Tengo mal del porky");
} else {
    alert("two mimir")
}
_________________________________________________________
var hour = 20;

if (hour < 18) {
    alert("Good day");
} else {
    alert("Tardes, ya");
}
_______________________________
var hour = 19;

if (hour <= 18) {
    alert("Todavía hay sol");
} else {
    alert("Tardes, ya");
}
_________________________________________________________
var edad = 21;

if (edad >= 18) {
    alert("Crear cuenta");
} else {
    alert("bai bai");
}
_________________________________________________________
var hora_1= 12;

if (hora_1 <= 7 && hora > 0) {
    alert("Buenas madrugadas");
} else {
    alert("Que tenga un buen dia");
}
_________________________________________________________
var hor = 12;

if (hor > 0) {

    if (hor <= 7) {
        alert("Buenas madrugadas");
    } else {
        alert("Que tenga un buen dia");
    }

} else {

    alert("Su hora no existe");

}
_____________________________________________
var hora = 12;

// Verificar  24 >= hora > 0

if (hora > 0 && hora <= 24) {
	// Codigo
    
    if (hora < 7) {
    	alert("Buenas madrugadas");
    } else {
    	alert("Que tenga un buen dia");
    }
    
    
} else {
	alert("Su hora no es válida");
}
______________________________________
var nineros = prompt ("Ingresa tus nineros");
if (nineros <= 10) {
  alert ("Concha de Vainillay 4 picafresas");
} else if (dineros <=50) {
    alert ("Tacos al vaporware y una agua de horchata");
} else if (dineros <=129) {
    alert ("pizza little ceaser sin piña combo fiesta");
} else if (dineros <=500) {
    alert ("Booneles + aros de cebolla + papas gajo + tarro");
} else {
    alert ("Compra 3 casas, renta 2 y vive en una");
}
__________________________________________________________

   