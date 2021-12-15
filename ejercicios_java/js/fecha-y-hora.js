"use string"
/* Obtner fecha y hora */
console.log("===Fecha y Hora GMT===");
var TimeGMT = new Date();
console.log(TimeGMT);

/* Convertuiir fecha a String */
console.log("===Fecha y Hora Local===");
var tiempotractual = new Date();


console.log(tiempotractual.toString());
/* Extraer elementos de la fecha */
/* Extraer el dia */
console.log("===Obtener el dia????===");
var NumDiasemana = new Date();
console.log(NumDiasemana.getDay());
/* mostar la semana */
var numdia = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
var numactual = new Date();
var dato = numactual.getDay();

console.log(numdia[dato]);

/* Mostrar fecha dormateada */
console.log("== Fecha y Hora Local Desfragmetada");
var time = new Date();
console.log("Dia de la semana "+time.getDay());
console.log("Mes del Año "+time.getMonth());
console.log("Dia del mes "+time.getDate());
console.log("Año"+time.getFullYear());
console.log("horas "+time.getHours());
console.log("minutos"+time.getMinutes());
console.log("segundos "+time.getSeconds());
console.log("Milisegundos "+ time.getMilliseconds());

/* Ejercicio */
console.log("===Ejercicio===")

var semanas = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
var mesesaño = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","Noviembre","diciembre"];
var dato5 = time.getMonth();
var añomes = (mesesaño[dato5]);
var time2 = new Date();
var dato7 = time2.getDay();
var horas2 = time2.getHours();
var año = time2.getFullYear();
var minutos2 = time2.getMinutes();
var diasemana =(semanas[dato7]);
if(horas2 > 12 ){
    horas2 = horas2 -12;
    sufijo = 'pm';
}
else{
    var sufijo = 'am';
}
if(minutos2 < 10){
    minutos2 = "0" + minutos2.toString();
}
console.log("Hoy es "+diasemana+" "+time2.getDate()+" de "+añomes+" del año "+año+" son las "+horas2+":"+minutos2+ sufijo+" Bienvenido!!!!!!");

/* Ejercicio numeros estaticos */
 var fechanavidad = new Date("december 24, 2021")
var fechahoy = new Date();
/*  */
var mstoday = fechahoy.getTime();
var msnavidad = fechanavidad.getTime();
var msfaltantes = msnavidad - mstoday;
var sgfaltantes = (msfaltantes / 1000);
var mnfaltantes = (sgfaltantes / 60);
var hofaltantes = (mnfaltantes / 60);
var diasfaltantes = (hofaltantes / 24);
/* para redondear math.floor("codigo a redondear") */
console.log(Math.floor(diasfaltantes));
