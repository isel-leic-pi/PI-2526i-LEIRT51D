//https://httpbin.org/delay/t
function printGetWithDelayThen(t){
    return fetch('https://httpbin.org/delay/' + t) 
        .then(resp => resp.json())
        .then(body => console.log(body))
}

async function printGetWithDelayAsyncAwait(t){
    const resp = await fetch('https://httpbin.org/delay/' + t)
    const body = await resp.json()
    console.log(body)
}

function main(){
    printGetWithDelayAsyncAwait(1)
        .then(()=>console.log("DONE"))
    
}

main()