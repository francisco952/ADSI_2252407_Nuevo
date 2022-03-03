var nuevonombre = "Daniela";
var nombreantiguo = "Evelin";
function mostrarnuevonombre(){
    document.getElementById('cambiarnombre').innerHTML = nuevonombre;
};
function mostrarnombreantiguo(){
    let nombreactual = document.getElementById('cambiarnombre').innerHTML;
    if( nombreactual === nombreantiguo){
        alert("El nombre actual es el nombre incial")
    }
    else{
        document.getElementById("cambiarnombre").innerHTML = nuevonombre;
        alert("el nombre ha sido cambiado con exito");
    }
};
var unidad = 20000
function incrementonumerico(){
    let incremento = parseInt(document.getElementById('valor').innerHTML);
    let suma = incremento + 1;
    if (suma <= 10){
        document.getElementById('valor').innerHTML = suma;
        let total = parseFloat(unidad * suma );
        document.getElementById('total').innerHTML = total
        
    }
};
function disminuir(){
    let decremento = parseInt(document.getElementById('valor').innerHTML);
    let resta = decremento - 1;
    if (resta >= 0){
        document.getElementById('valor').innerHTML = resta;
        let total = parseFloat(unidad * resta );
        document.getElementById('total').innerHTML = total
    }
}