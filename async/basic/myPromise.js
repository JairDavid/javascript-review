//Para crear una promesa, debemos crear un objeto de la clase Promise
let request = require('request')

let petition = (url) => { 
    return new Promise((resolve, reject)=>{
        request(url,(error, response)=>{
            if(error) return reject

            return resolve(response)
        })
    })
}

petition("https://reqres.in/api/users").then(res=>res.json()).then((data)=>{console.log(data)})
