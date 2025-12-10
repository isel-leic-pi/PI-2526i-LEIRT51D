import express from 'express'

const app = express()

app.use(express.static('public'))

app.get("/home",(req,resp)=>resp.json("HOME"))

app.listen(8080, ()=> console.log('Listening'))