class Automovil {
    constructor(marca, modelo, anyo, precio, img) {
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
        this.precio = precio;
        this.img = img;
    }
}
let auto1 = new Automovil("Mustang"," SM17",2020,"$306.474.535","img/Mustang-250x166.jpg");
let auto2 = new Automovil("Mustang"," GT500",2021,"$259.990.000", "img/Mustang-Shelby-GT500_00-1200x750.webp");
let auto3 = new Automovil("Mustang"," Mach1",2021,"$2.589.808.541", "img/mustang_mach1-1440x960.jpg");
let auto4 = new Automovil("Mustang"," Foxbody",1993,"$300.990.000", "img/Mustang_foxbody-3947x2160.jpg");
let auto5 = new Automovil("Maserati"," Quattroporte",2019,"$396.450.547", "img/Maserati_Quattroporte-1200x630.jpg");
let auto6 = new Automovil("Maserati"," Porte 4",2005,"$290.927.131", "img/Maserati_quattro_porte4-1000x631.jpg");
let auto7 = new Automovil("Maserati"," Levante",2022,"$834.636.550", "img/maserati_levante-1699x1013.jpg");
let auto8 = new Automovil("Maserati"," GranTurismo",2010,"$667.636.520", "img/maserati_granturismo1600x967.jpg");

window.addEventListener("keydown",function(event){
    let busqueda = document.getElementById("Casila").value;
    if(event.key == "Enter"){
        Limpiar();
        if(busqueda == "Mustang"){
            mostrarinformacio(auto4);
            mostrarinformacio(auto1);
            mostrarinformacio(auto2);
            mostrarinformacio(auto3);
        }
        else if(busqueda == "Maserati"){
            mostrarinformacio(auto6);
            mostrarinformacio(auto5);
            mostrarinformacio(auto7);
            mostrarinformacio(auto8);
        }
        else{
            this.alert("No se han encontrado coincidencias... Verifique su palabra clave")
        }
    }
});

function mostrarinformacio(auto){
    let contenedorprincipal = document.getElementById('main_content');
    let contenedorauto = document.createElement('div');
    contenedorprincipal.appendChild(contenedorauto);
    contenedorauto.setAttribute("id","contenedor_automovil1");
    let label1 = document.createElement('label');
    contenedorauto.appendChild(label1);
    label1.setAttribute("class","texto1");
    let label2 = document.createElement('label');
    contenedorauto.appendChild(label2);
    label2.setAttribute("class","texto2");
    let img = document.createElement('img');
    img.setAttribute("src",auto.img);
    img.setAttribute("class","img_style");
    let label3 = document.createElement('label');
    label3.setAttribute("class","textoprecio");
    contenedorauto.appendChild(img)
    let texto1 = document.createTextNode(auto.marca +""+ auto.modelo);
    label1.appendChild(texto1);
    let texto2 = document.createTextNode(auto.anyo);
    label2.appendChild(texto2);
    let texto3 = document.createTextNode(auto.precio);
    label3.appendChild(texto3);
    contenedorauto.appendChild(label3);
}
function Limpiar(){
    let barra = document.getElementById('Casila').value = ""
}