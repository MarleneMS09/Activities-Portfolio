// Switch

// Obtener la fecha actual

//var fecha = new Date().getDay();
var dia = 0
 function evalDate (day) {
    //alert(fecha);
var dia = new Date().getDay();
switch (dia) {
    case 0:
        return "Domingo";
        break;
    case 1:
        return "Lunes";
        break;
    case 2:
        return "Martes";
        break;
    case 3:
        return "Miercoles";
        break;
    case 4:
        return "Jueves";
        break;
    case 5:
        return "Viernes";
    case 6:
        return "Sabado"
        break;
    default:
        return "Su fecha no es valida";
} 
}
alert (evalDate(dia));
__________________________________________




















