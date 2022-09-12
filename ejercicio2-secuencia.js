let readlineSync = require("readline-sync");
let mensajeUsuarioSecuencia = [];

function cargarMensaje(){
    for (let i = 0; i < 3; i++){
    mensajeUsuarioSecuencia[i] = readlineSync.question("ingrese el mensaje: ")
    };
};

function mostrarMensajeUsuario (){
    for (let i = 0; i < mensajeUsuarioSecuencia.length; i++){
        console.log("el usuario ingreso el siguiente mensaje: " + mensajeUsuarioSecuencia[i])
    }
}

cargarMensaje();
mostrarMensajeUsuario();