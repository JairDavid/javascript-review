//Hay 2 diferencias al usar funciones normales y declaración de funciones
//Las funciones normales pueden ser declaradas y llamadas en cualquier parte del programa

llamar()

function llamar(){
    console.log("llamando...")
}

llamar()

//Las declaraciones de funciones no pueden ser llamadas antes, sino que deben declarase al principio
//para posteriormente ser llamadas

//Error
console.log(llamado())

let llamado = function(){
    console.log("llamando declaración")
}

//Correcto
//console.log(llamado)

