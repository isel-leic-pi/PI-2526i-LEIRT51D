function getMovies(){
    return fetch('https://api.sampleapis.com/movies/animation') 
        .then(resp => resp.json())
        .then(() => Promise.reject("Movies Error"))  
}

function getGames(){
    return fetch('https://api.sampleapis.com/xbox/games') 
        .then(resp => resp.json())
        .then(() => Promise.reject("Games Error"))  
}

/*getMovies()
    .then((()=>getGames()))
    .then(()=>console.log("Done"))*/

const pMovies = getMovies()
const pGames = getGames()

const promiseAll = Promise.all([pMovies,pGames])
promiseAll
    .then(()=>console.log("Done"))
    .catch(e =>console.log("Done - ", e))