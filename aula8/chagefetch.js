const data = {
    "https://httpbin.org/delay/1" : '{ "test" : "memory data"}'
}


function changeFetch(){
    fetch = function(url){
        const resp = {}
        resp.json = function(){
            return Promise.resolve(JSON.parse(data[url]))
        }
        return Promise.resolve(resp)
    }
}
//https://httpbin.org/delay/t
function printGetWithDelay(){
    return fetch('https://httpbin.org/delay/1') 
        .then(resp => resp.json())
        .then(body => console.log(body))
}

function main(){
    printGetWithDelay(1)
        .then(()=>console.log("DONE"))
    
}

changeFetch()
main()
