import express from 'express'

const app = express()

app.use(middleware1)
app.use("/path",middleware2)
app.use(middleware3)

app.get("/",rootHandler)
app.get("/path",pathHandler)

function pathHandler(req, resp){
    console.log("Path Handler")
    console.log(req.token)
    resp.json("Path Handler")
}

function rootHandler(req, resp){
    console.log("Root Handler")
    console.log(req.token)
    resp.json("Root Handler")
}

function middleware1(req,resp,next){
    console.log("Middleware1")
    console.log(Date(), req.method, req.url)
    next()
}

function middleware2(req,resp,next){
    console.log("Middleware2")
    const token = req.get("authorization")
    if(!token) resp.status(401).json("Missing token")
    req.token = token
    next()
}

function middleware3(req,resp,next){
    console.log("Middleware3")
    next()
}


app.listen("8080",(error) => {
                if(error) return console.log(error)
                console.log("Listening....")
            })