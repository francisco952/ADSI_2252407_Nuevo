/* metodo slice */
var anyo = "2019";
var anyolastchar = anyo.slice(2, 4);
console.log(anyolastchar);

/* buscando espacios nombres */

var nombre = "Francisco  Plazas";
for (i = 0; i < nombre.length; i++){
    if(nombre.slice(i, (i + 2)) === "  "){
        console.log("la cadena tiene espacios dobles");
        break;
    }
};


/* reemplazando parte de la cadena de texto */
var hobby = "programar en Java"
var newlang = "python";
for (i = 0; i < hobby.length; i ++){
    if(hobby.slice(i, i + 4) === "Java"){
        hobby = hobby.slice(0, i);
    }
};
console.log(hobby + newlang);

/* reemplazar texto con Indezof */

var hobby2 = "programar en JavaScript a tope";
var firstchar = hobby2.indexOf("JavaScript");
if(firstchar !== -1){
    console.log(firstchar);
    hobby2 = hobby2.slice(0, firstchar) + "php" + hobby2.slice(firstchar + 10);
    console.log(hobby2);
};