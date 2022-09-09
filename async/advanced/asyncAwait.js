// podemos simplificar el uso de promesas con async y await, al final por debajo los toma como promesas

const petition = async ()=>{
    let res = await fetch("https://google.com")
    let data  = await res.json()
    console.log(data)
}

petition()

//Para tratar los errores podemos usar un try catch para decidir que hacer con ellas

const petition2 = async ()=>{
    try{
        let res = await fetch("https://google.com")
        let data  = await res.json()
        console.log(data)
    }catch(e){
        console.log(e)
    }
}


