//El hoisting en javascript consiste en elevar al principio todas las variables y funciones por debajo
//Esto nos permite usar funciones y variables antes de declararlas

//Funciona correctamente
llamar()
c = a + b
console.log(c)

function llamar(){
    console.log("llamando....")
}

let a = 1
let b = 2