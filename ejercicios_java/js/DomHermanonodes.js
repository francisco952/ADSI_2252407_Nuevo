function obtenerhermanos(){
    let hijosdiv = document.getElementById("hermanos");
    let elemento3 = hijosdiv.childNodes[5];
    let nexthermano = elemento3.nextElementSibling.innerHTML;
    let beforehermano = elemento3.previousElementSibling.innerHTML;
    alert(nexthermano);
    console.log(beforehermano)

}