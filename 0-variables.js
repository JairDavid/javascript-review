//En javascript tenemos 3 tipos de variables: var, let, const

/*
Propiedades de var
- Es mutable
- Puede ser reedeclarada
- tienen un ambito global o un ambito de funcion/local
*/

var saludar = "hola";  
function nuevaFuncion() {
    //reedeclaracion
    var saludar = "como estás?";
    var hola = "hola";
    console.log(hola) //hola
}
//error: no podemos acceder a esta variable por que esta en un ambito local de la funcion
console.log(hola)



/**********************************************************************************************/
/*
Propiedades de let
- Es mutable
- No puede ser reedeclarada
- Tiene un ambito de bloque (delimitado por llaves {} )
*/

let saludar = "Hola";
let tiempos = 4;

if (tiempos > 3) {
    let saludar = "como estás?"
    let hola = "dice Hola tambien"; //se puede reedeclarar ya que pertenece a un ambito diferente
    console.log(hola);// "dice Hola tambien"
    console.log(saludar)
 }
//error: no podemos acceder a esta variable por que esta en un ambito de bloque (dentro del if)
console.log(hola)
//Sin errores: el alcance de bloque cubre todo el programa
console.log(saludar)



/**********************************************************************************************/
/*
Propiedades de const
- Es inmutable
- No puede ser reedeclarada
*/

const saludar = "dice Hola";
saludar = "dice Hola tambien";// error: ya contiene una asignación

const saludar = "dice Hola tambien";// error: ya fue declarado

/*
hay un comportamiento diferente cuando se trabajan con objetos, ya que se pueden modificar los valores
de los atributos pero no se pueden agregar o modificar atributos
*/

const saludar = {
    mensaje: "dice Hola",
    tiempos: 4
}

saludar = {
    palabras: "Hola",
    numero: "cinco"
} // error: No se puede asginar nuevos atributos