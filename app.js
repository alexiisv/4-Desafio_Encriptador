
let encriptada ="";
let desencriptada ="";
let textoDesencriptado ="";

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function encriptar(){
    let textoIngresado = document.getElementById("entrada").value;
    
     // Iterar sobre cada letra de la palabra
     for (var i = 0; i < textoIngresado.length; i++) {
        var letra = textoIngresado[i].toLowerCase(); // Convertir a minúsculas para comparación
        // Verificar si la letra es una vocal
        if (letra === 'a') {
            encriptada += 'ai'; 
        } else if (letra === 'e') {
            encriptada += 'enter'; 
        } else if (letra === 'i') {
            encriptada += 'imes'; 
        } else if (letra === 'o') {
            encriptada += 'ober'; 
        } else if (letra === 'u') {
            encriptada += 'ufat'; 
        } else {
            encriptada += letra; // Si no es una vocal, mantener la letra original
        }
    }
       asignarTextoElemento('encriptador', encriptada);
       limpiarCaja();
}

function desencriptar(){

    let textoIngresado = document.getElementById("entrada").value;

    desencriptada = textoIngresado.replace(/ai/g, "a");
    desencriptada = desencriptada.replace(/enter/g, "e");
    desencriptada = desencriptada.replace(/imes/g, "i");
    desencriptada = desencriptada.replace(/ober/g, "o");
    desencriptada = desencriptada.replace(/ufat/g, "u");
    // Mostrar la palabra encriptada
    asignarTextoElemento('encriptador', desencriptada);
    console.log("Texto capturado: " + desencriptada);
}

async function copy() {
   
    let texto = document.getElementById('encriptador').innerHTML;
     try {
       await navigator.clipboard.writeText(texto);
       console.log('Contenido copiado al portapapeles');
       /* Resuelto - texto copiado al portapapeles con éxito */
     } catch (err) {
       console.error('Error al copiar: ', err);
       /* Rechazado - fallo al copiar el texto al portapapeles */
     }
}

function limpiarCaja() {
    document.querySelector('#entrada').value = ''; 
}
function limpiar() {
    document.querySelector('#entrada').value = ''; 
    asignarTextoElemento('encriptador','');

}