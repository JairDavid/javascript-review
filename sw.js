const DYNAMIC_CACHE = "dynamyc-cache"
const STATIC_CACHE = "static-cache"
const INMUTABLE_CACHE = "inmutable_cache"


self.addEventListener('install',(event)=>{
    console.log("service worker instalado....")
    
    const cacheStatic = caches.open(STATIC_CACHE)
    .then(cache=>{

        return cache.addAll([
            "/css/style.css",
            "/images/dog2.png",
            "/js/app.js",
            "/index.html"
        ]);
    })

    const cacheInmutable =caches.open(INMUTABLE_CACHE)
    .then(cache=>{
        return cache.add("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css")
    })

    event.waitUntil([cacheStatic, cacheInmutable])


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