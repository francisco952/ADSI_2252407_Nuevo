/* Ejercicio Fecha de Cumpleaños */
var fechahappy = new Date("march 15, 2022")
var fechahoy = new Date();
/*  */
var mstoday = fechahoy.getTime();
var msnavidad = fechahappy.getTime();
var msfaltantes = msnavidad - mstoday;
var sgfaltantes = (msfaltantes / 1000);
var mnfaltantes = (sgfaltantes / 60);
var hofaltantes = (mnfaltantes / 60);
var diasfaltantes = (hofaltantes / 24);
/* para redondear math.ceil("codigo a redondear") */
console.log(Math.ceil(diasfaltantes));
/* Fecha del cliente cumpleaños */
var fechaalert = new Date("December 1, 2003")
var fechaactual = new Date();
var diahappy = fechaalert.getDate();
var meshappy = fechaalert.getMonth();
var diaactual = fechaactual.getDate();
var mesactual = fechaactual.getMonth();

if(diahappy === diaactual && meshappy === mesactual){
    console.log("Es tu cumpleaños");
}
else{
    console.log("no cumples hoy");
};
/* Cuantos años tendra mas adelante */
var fechanacimiento = new Date("March 15, 2003");
var fechafuturo = new Date("March 13, 2021");
var diafuturo = fechafuturo.getDate();
var mesfuturo = fechafuturo.getMonth();
var añofuturo = fechafuturo.getFullYear();
var dianacimiento = fechanacimiento.getDate();
var mesnacimiento = fechanacimiento.getMonth();
var añonacimiento = fechanacimiento.getFullYear();
var edad = 0;
edad = añofuturo - añonacimiento;
if(añonacimiento < añofuturo){
    if(mesnacimiento < mesfuturo){   
        edad = añofuturo - añonacimiento;
    }
    else if(mesnacimiento === mesfuturo && dianacimiento <= diafuturo){
            edad = añofuturo - añonacimiento;
    }   
    else{
        edad = edad -1;
    }
}
else if (añonacimiento === añofuturo){
    console.log("Edad : 0 años")
}
else{
    console.log("los datos ingresados son incorrectos")
}
console.log("Edad :"+edad+" años")
