let readlineSync = require("readline-sync");
let mensajeUsuario = "";
console.log(mensajeUsuario)
mensajeUsuario = readlineSync.question("indique el msj que leera el usuario: ");
console.log("hola usuario " + mensajeUsuario);