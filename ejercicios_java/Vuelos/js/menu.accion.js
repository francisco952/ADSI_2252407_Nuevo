function mostrar(){
    let navMostrar = document.getElementById("menu_principal");
    navMostrar.classList.toggle('mostrarNav');
    let labelIcon = document.getElementById("icon_accion");
    labelIcon.classList.toggle('color_burguer');
}