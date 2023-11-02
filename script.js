//alert("Hola este es mi JavaScript");

//Variable que se usa en un bloque de código
// let nombre = 'Viviana';
// nombre = "Vivi";
// //Variable que no cambia su valor
// const nombre1 = "Sandra";
// //Variable que se puede usar de forma global
// var apellido = "Camargo";

// console.log(nombre);
// console.log(nombre1);
// console.log(apellido);

//Seleccionar elementos

let contenidoTitulo = "Viviana";
let titulo = document.querySelector(".logo");
titulo.innerHTML = contenidoTitulo;
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre"){
    titulo.innerHTML = "Titulo"; 
}else{
    console.log("no se cumple");
}

//Funciones
let text = "desarrollo backend";
let parrafo = document.querySelector(".parrafo");

function cambiarTexto(parr){
    let contenido = `Me llamo Sandra Viviana Rozo Camargo, soy ingeniera de sistemas me enfoco en 
    en el área de ${parr}, tengo conocimientos en los lenguajes de programación 
    Delphi, Java, JavaScript, Html 5, CSS. Mi mayor experiencia es con Delphi.

    Manejo bases de datos tales como Oracle, MySql, Firebird, Interbase `;
    return contenido;
}

parrafo.innerText = cambiarTexto(text);

/*
document.addEventListener("DOMContentLoaded", function(){
    let acercaDeMi = "Hola me encantan los perros, soy amante de las series y peliculas";

    let parra = document.querySelector("#parrafo");
    parra.innerHTML = acercaDeMi;
    function cambiarTexto(parrafo) {
        let contenido = `Ejemplo ${parrafo}`;
        return contenido;
    };
    
    parra.innerHTML = cambiarTexto(acercaDeMi);
    
})
//document.getElementById("parrafo").innerText = cambiarTexto(acercaDeMi);
*/

//Formulario
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo2 = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo2.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo2.innerHTML = warnings;
  } else {
    parrafo2.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
