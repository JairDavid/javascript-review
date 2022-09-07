//Un callback es una funcion que se pasa como argumento a una operacion asincrona
//por lo que al finalizar la funcion asincrona, se ejecuta dicha funcion "callback"

import request from 'request'

request("https://google.com",()=>{
    console.log("callback")
})