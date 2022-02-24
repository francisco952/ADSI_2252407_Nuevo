hola();
function hola(){
    console.log("Hola mundo");
}
console.log("===================");
saludo();
function saludo(){
    let nombre = "Francisco";
    console.log("Hola señor "+nombre+", Bienvenido")
}
console.log("===================");
declarar();
function declarar(){
    let nombre = "pizza";
    let costo = 20000;
    let impuesto = "10%";
    let saco = (costo/0.1)/100;
    let domicilio = 500;
    let total = costo+domicilio+saco;
    console.log("Hola usuario su costo de la "+nombre+" es de "+costo+" con un impuesto de "+impuesto+" domicilio "+domicilio+" Con un total de "+total)
}
console.log("===================");
compra();
function compra(){
    let comparar = 30000;
    let comparar2 = 100000;
    let costo = 100000;
    if(costo <= comparar){
        let descuento1= (costo*0.05);
        console.log ("Su costo es de "+costo+" con un descuento del 5%, que es "+descuento1)
    }
    /*  */
    if(costo > comparar && costo < comparar2){
        let descuento1= (costo*0.1);
        console.log ("Su costo es de "+costo+" con un descuento del 10%, que es "+descuento1)
    }
    /*  */
    if(costo >= comparar2){
        let descuento1= (costo*0.15);
        console.log ("Su costo es de "+costo+" con un descuento del 15%, que es "+descuento1)
    }
}
console.log("===================");
arreglo();
function arreglo(){
    var aprendizes = [{"aprendiz":1, "nombre":"Daniela", "edad":18, "ficha":2252407},
    {"aprendiz":2, "nombre":"David", "edad":18, "ficha":2252407},
    {"aprendiz":3, "nombre":"Evelin", "edad":18, "ficha":2252407},
    {"aprendiz":4, "nombre":"karen", "edad":18, "ficha":2252407},
    {"aprendiz":5, "nombre":"francisco", "edad":18, "ficha":2252407},
];
for(i of aprendizes){
    console.log(i.aprendiz, i.nombre, i.ficha );
}
}
console.log("===================");
primermayu();
function primermayu(){
    let municipio = "PiTALITO";
    municipio = municipio.toLocaleLowerCase();
    res = municipio[0].toUpperCase()+ municipio.slice(1);
    console.log(res)
}