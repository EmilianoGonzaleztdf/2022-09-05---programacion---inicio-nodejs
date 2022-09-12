let readlineSync = require ("readline-sync");

let vuelta = [];
let cantVueltas = 0;
tiempoTotal = 0;



function cargarTiempoVuelta (){
    cantVueltas = readlineSync.questionInt("ingrese la cantidad de vueltas de la carrera: ");
    console.log("la carrera durara " + cantVueltas + " vueltas")

    for (let i = 0; i < cantVueltas; i++)
    vuelta [i] = readlineSync.questionInt("ingrese el tiempo de la vuelta N: "+[i+1] + " en segundos:");
};

function calcularTiempo (){
    for (let i = 0; i< cantVueltas; i++){
        tiempoTotal = vuelta[i] + tiempoTotal
    }
    console.log("el tiempo total fue de: " + tiempoTotal + " segundos")

    promedioVuelta = tiempoTotal/cantVueltas;
    console.log("el promedio de vuelta fue de: " + promedioVuelta + " segundos")
 }


  

cargarTiempoVuelta();
calcularTiempo()

