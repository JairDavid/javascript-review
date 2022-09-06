//Métodos para los arreglos

let array = [function(){}, 1, "a",2,4,"Z",[1,2,3]]

//Push: inserta un elemento al final del arreglo
array.push(7)

//Unshift: inserta un elemento al principio del arreglo
array.unshift(0)

//Pop: quita un elemento al final del arreglo
array.pop()

//Shift: quita un elemento al principio del arreglo
array.shift()

//IndexOf -> ===: éste método nos permite buscar un elemento existente en el arreglo
//por lo que usa una comparacioón estricta para encontrar el valor
//Retorna la posicion del elemento si existe y -1 si no existe
//indexOf -> posición
array.indexOf("a")

//Includes: éste metodo nos retorna true si el elemento existe y false si no.
//indexOf -> true|false
array.includes("a")

//También podemos hacer busquedas a través de un index especifico pasandole el indice
array.includes("a",1)


//OTROS MÉTODOS QUE HACEN LO MISMO

//Find retorna un boolean al igual que includes
array.find((elem, index, array)=>{
    return elem === 1
})

//findIndex retorna la posicion al igual que indexOf
array.findIndex((elem, index, array)=>{
    return elem === 1
})
