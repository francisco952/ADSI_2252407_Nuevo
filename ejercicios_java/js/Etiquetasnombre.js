function obtenernodename(){
    let parent = document.getElementById("nombrenodo");
    let etiqueta = parent.firstChild;
    alert("El contenido del elemento es :"+etiqueta.nodeName);
    let etiqueta2 = parent.firstElementChild;
    console.log("El contenido del elemento es: "+etiqueta2)
;}