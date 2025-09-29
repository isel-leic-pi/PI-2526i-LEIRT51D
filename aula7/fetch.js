//https://httpbin.org/delay/t
function printGetWithDelay(t){
    return fetch('https://httpbin.org/delay/' + t) 
        .then(resp => resp.json())
        .then(body => console.log(body))
}

function printCoach(teamId){
    const options = {
            headers: {
              "X-Auth-Token" : "406131604e064bb1899a2b0c7ebd60b7"
            }
        }

    return fetch(`http://api.football-data.org/v4/teams/${teamId}`,options)
                .then(resp=>resp.json())
                .then(body=>console.log(body.coach.lastName))
}


function main(){
    printCoach(1903)

    /*printGetWithDelay(1)
        .then(()=>console.log("DONE"))*/
    
}

main()