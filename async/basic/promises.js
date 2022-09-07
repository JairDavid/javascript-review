//Las promesas surgen como alternativa a las callbacks, por lo que hacen más explicito
//el flujo del codigo. y asi evitar los llamados callback hell

import request from 'request-promise'

let promesa = request("https://google.com")

promesa
.then(()=>{}) //Entran todos los resolve
.catch(()=>{}) //Entran todos los reject
.finally(()=>{}) // Lo que se hará al final si salio bien o mal

//Las promesas tienen 4 estados los cuales:
//fullfield: indica que la promesa fue completada
//rejected: indica que la promesa fue rechazada
//pending: indica que la operación no ha terminado
//settled: indica que la operacion terminó
