function obtenerpadre(){
    let divcontenido = document.getElementById("contenido1");
    let padrecontenido = divcontenido.parentNode.nodeName;
    alert(padrecontenido)
}