// Spread & Rest operator
//Con el spread operator podemos expandir los elementos de una lista o arreglo
let array = [1,2,3]
console.log(...array)
//1
//2
//3

//Con el rest operator se hace lo contrario, se agrupan elementos que se pueden pasar como argumento en alguna funcion
function combinar(...elementos){
    console.log(elementos)
}

combinar(1,2,4,4)
//[1,2,4,4]


//Se pueden trabajar con objetos json directamente agregando atributos y metodos
let curso = {
    nombre:"xd",
    profesor:"no hay profesor",
    inscribir: ()=>{
        console.log("inscrito")
    }
}

console.log(curso["nombre"])
curso.inscribir()

//Otra propiedad que podemos hacer con el operador ... es copiar objetos y combinarlos
let nuevoCurso = {...curso, costo: 12}
console.log(nuevoCurso)

//Otra manera de hacer esto es usar Object.assing(...)
let nuevoCurso2 = Object.assign(curso, {codigo: 123})
console.log(nuevoCurso2)





//DESTRUCTURACION
//Se puede obtener de un objeto atributos en específico

let { codigo, profesor } = nuevoCurso2
console.log(codigo + " "+ profesor )


//Podemos hacer lo mismo con funciones, lo que hacemos es haces destructuring de un objeto
//y usando el operador ..., mandamos los atrubutos restantes en forma de lista
mostrarInfo(nuevoCurso2)

function mostrarInfo({codigo, ...restantes}){
    console.log(codigo)
    console.log(restantes)
}