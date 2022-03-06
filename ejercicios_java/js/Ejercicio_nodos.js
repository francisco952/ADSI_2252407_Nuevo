
function ejecutardatos(){
    if(Validarformulario() == false) return alert("Es obligatorio completar todos los campos");
        if(!document.getElementById("bodydata")) creartabla(); 
        Crearcolumnas(Validarformulario());
}

var nodetoaddtable = document.createElement("table");
var tabla = document.getElementById('contenido');

function creartabla(){
    /* Lo que ira en la parte superior */
    let thead = document.createElement("thead");
    let toaddtr = document.createElement("tr");
    let toaddth1 = document.createElement("th");
    let toaddth2 = document.createElement("th");
    let toaddth3 = document.createElement("th");
    let toaddth4 = document.createElement("th");
    /* lo que ira cargado en las celdas */
    let contenidotext1 = document.createTextNode("Codigo");
    let contenidotext2 = document.createTextNode("Descripcion");
    let contenidotext3 = document.createTextNode("Valor Unitario");
    let contenidotext4 = document.createTextNode("Stock Disponible");
    /* Estilos */
    toaddtr.setAttribute("class","nombre_encabezado");
    nodetoaddtable.setAttribute("class","Style_table");
    /* Desendencia encabezado */
    tabla.appendChild(nodetoaddtable);
    nodetoaddtable.appendChild(thead);
    thead.appendChild(toaddtr);
    toaddtr.appendChild(toaddth1);
    toaddth1.appendChild(contenidotext1);
    toaddtr.appendChild(toaddth2);
    toaddth2.appendChild(contenidotext2);
    toaddtr.appendChild(toaddth3);
    toaddth3.appendChild(contenidotext3);
    toaddtr.appendChild(toaddth4);
    toaddth4.appendChild(contenidotext4);
}
function Crearcolumnas(){
    var tdbody = document.createElement("tbody");
    tdbody.setAttribute("id","bodydata");
    let tbodytr = document.createElement("tr");
    let toaddtd1 = document.createElement("td");
    let toaddtd2 = document.createElement("td");
    let toaddtd3 = document.createElement("td");
    let toaddtd4 = document.createElement("td");
    /*  */
    var codigo = document.getElementById("codigo").value;
    var descripcion = document.getElementById("descripcion").value;
    var valorunidad = document.getElementById("unidad").value;
    var Stock = document.getElementById("stock").value;
    let contenidotext1 = document.createTextNode(codigo);
    let contenidotext2 = document.createTextNode(descripcion);
    let contenidotext3 = document.createTextNode(valorunidad);
    let contenidotext4 = document.createTextNode(Stock);
    /* Desencdecia Cuerpo */
    nodetoaddtable.appendChild(tdbody);
    tdbody.appendChild(tbodytr);
    tbodytr.appendChild(toaddtd1);
    tbodytr.appendChild(toaddtd2);
    tbodytr.appendChild(toaddtd3);
    tbodytr.appendChild(toaddtd4);
    toaddtd1.appendChild(contenidotext1);
    toaddtd2.appendChild(contenidotext2);
    toaddtd3.appendChild(contenidotext3);
    toaddtd4.appendChild(contenidotext4);
}

/* VALIDAR FORMULARIO == TRUE */

function Validarformulario(){
    if(document.getElementById('codigo').value.trim() == ""){
        document.getElementById('codigo').focus();
        return false;
    }
    if(descripcion = document.getElementById('descripcion').value.trim() == ""){
        descripcion = document.getElementById('descripcion').focus;
        return false;
    }
    if(document.getElementById('unidad').value.trim()  == ""){
        document.getElementById('unidad').focus;
        return false;
    }
    if(document.getElementById('stock').value.trim() == ""){
        document.getElementById('stock').focus;
        return false;
    }
    return true;
}