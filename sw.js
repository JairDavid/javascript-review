self.addEventListener('install',(event)=>{
    console.log("instalado")
})


//Fetch: se encarga de traer todos los recursos de nuestro servidor al cliente
//ya sea imagenes, hojas de estilo, scripts etc.
//NOTA: se hace un fetch por cada archivo/doc
self.addEventListener('fetch',(event)=>{
    console.log(event.request.url)

    if(event.request.url.includes('style.css')){
        const response = new Response(
        `
            .title-custom{
                font-size: small;
            }
        `,{
            headers:{
                'Content-type':'text/css'
            }
        })
        event.respondWith(response)

    }else if(event.request.url.includes("user-60.png")){
        
        event.respondWith(fetch('images/dog2.png'))
    }

})