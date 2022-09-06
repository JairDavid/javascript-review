
let array = [1,2,3,4,5,"6","7","8","9"]

let array2 = ["5","6","7","8","9"]

//Foreach:
array.forEach((item)=>console.log(item))

//Map:
newArray = array2.map((v,i)=>{
    console.log(v +" "+i)
    return parseInt(v)
})

console.log(newArray)

//Filter
strings = array.filter((item,i)=>{
    return typeof item === 'string'
})
console.log(strings)

//Reduce: Este metodo es especial ya que apartir de una lista o arreglo de elementos
//solo retorna un unico valor especial y no varios

numbers = array2.reduce((acc, numeroString)=>{
    return acc +" "+ numeroString
})
console.log(numbers)