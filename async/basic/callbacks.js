//Un callback es una funcion que se pasa como argumento a una operacion asincrona
//por lo que al finalizar una funcion asincrona, se ejecuta dicha funcion "callback"

let request = require('request')

request("https://google.com",()=>{
    console.log("callback")
})