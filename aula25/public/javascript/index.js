window.addEventListener('load', loadHandler)

function loadHandler(){
    const button = document.querySelector('#fetchButton')
    button.addEventListener('click', buttonHandler)
}
           
function buttonHandler(){  
    
    const inputURL = document.querySelector('#urlInput')
    const url =  inputURL.value
    console.log(url)
    const messageContainer = document.querySelector('#messageContainer')
    if(!url){
        messageContainer.innerHTML = "<h1>Vazio</h1>"
        return
    }
    messageContainer.innerHTML = ""
    const textArea = document.querySelector('#text')
    textArea.innerText = "LOADING!!!!"
    fetch(url)
        .then(resp => resp.text())
        .then(body =>{
             textArea.innerText = body 
        } )
    
   
}