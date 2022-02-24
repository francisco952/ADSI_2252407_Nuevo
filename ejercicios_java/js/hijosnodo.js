function leerinfo(){
    let info = document.getElementById("content");
    let infochild = info.childNodes[7];
    let contents = infochild.innerHTML;
    alert(contents)
};
function disponibilidad(){
    let nodocounter = 0;
    let nodos = document.getElementById("viajes");
    for(let i = 0; i < nodos.childNode.length; i++) {
        if(nodos.childNodes[i].nodeType === 1){
            nodocounter++;
        }
        if (nodocounter === 3){
            nodos.childNodes[i].innerHTML = "Agotados";
            nodos.childNodes[i].style.color = "red"
        }
    }
};