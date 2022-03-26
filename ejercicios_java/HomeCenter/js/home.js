const lupa = document.getElementById('idLupa');
lupa.addEventListener("click", miFuncion);


function cerrarmenu(){
    limpiarheader();
    Crearcontent();
}
function limpiarheader(){
    document.getElementById('header').innerHTML = "";
}
function miFuncion(){
    document.getElementById('header').innerHTML = "";
    llamarventana();
}
function llamarventana(){
    let contenedorbus = document.createElement('div');
    contenedorbus.setAttribute("class","flexdireccion");
    contenedorbus.setAttribute("id", "contentbus");
    let contenedor = document.getElementById('header');
    let lupaicon = document.createElement('i');
    lupaicon.setAttribute("class","icon-magnifying-glass glass");
    let contenedortext = document.createElement('input');
    let xicon = document.createElement('i');
    xicon.setAttribute("class","icon-cross cross");
    xicon.setAttribute("id", "xcerrar");
    contenedortext.setAttribute("id", "textbus");
    contenedor.appendChild(contenedorbus);
    contenedorbus.appendChild(lupaicon);
    contenedorbus.appendChild(contenedortext);
    contenedorbus.appendChild(xicon);
    alert("hola");
    document.getElementById('textbus').placeholder = "¿Qué estás buscando?";
    const cerrar = document.getElementById('xcerrar');
    cerrar.addEventListener("click", cerrarmenu);
}
function Crearcontent(){
    let contenedorheader = document.getElementById('header');
    let content_main = document.createElement('div');
    content_main.setAttribute("class","content_main");
    let iconoburguer = document.createElement('i');
    iconoburguer.setAttribute("class","fas fa-bars hamburguesa");
    let iconolupa = document.createElement('i');
    iconolupa.setAttribute("class","icon-magnifying-glass busqueda");
    iconolupa.setAttribute("id","idLupa");
    let iconousuario = document.createElement('i');
    iconousuario.setAttribute("class","icon-user usuario");
    let numerocarro = document.createElement('label');
    numerocarro.setAttribute("class","numero_compra");
    let iconocarro = document.createElement('i');
    iconocarro.setAttribute("class","icon-shopping-cart caro_compra");
    let imagen = document.createElement('img');
    imagen.setAttribute("src","img/home-11x80-.jpg");
    imagen.setAttribute("class","logo");
    let textnumerocarro = document.createTextNode('0');

    contenedorheader.appendChild(content_main);
    content_main.appendChild(iconoburguer);
    content_main.appendChild(iconolupa);
    content_main.appendChild(iconousuario);
    content_main.appendChild(numerocarro);
    content_main.appendChild(iconocarro);
    content_main.appendChild(imagen);
    numerocarro.appendChild(textnumerocarro);
}