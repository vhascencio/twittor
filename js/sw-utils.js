//Guardar en el cache dinamico
function actualizaCacheDimanico(dynamicCache, request, response){
    if(response.ok){
        return caches.open(dynamicCache).then(cache =>{
            cache.put(request,response.clone());
            return response.clone();
        });
    }
    else{
        return response;
    }
}
