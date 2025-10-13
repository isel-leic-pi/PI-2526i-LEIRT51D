import express from 'express'

const app = express()

app.use(express.json())

app.get("/",rootHandler)
app.get("/students", getStudentsHandler)
app.get("/students/:id", getStudentById)
app.post("/students", createStudent)


function rootHandler(req, resp){
    console.log("Root Handler")
    resp.json("Hello WORLD")
}

function getStudentsHandler(req, resp){
    console.log("get Students")
    console.log(req.query.limit)
    resp.json("getStudentsHandler")
}

function getStudentById(req, resp){
    console.log("get Student by Id")
    console.log(req.params.id)
    resp.json("getStudentById")
}


function createStudent(req, resp){
    console.log("createStudent")
    console.log(req.body)
    resp.json(req.body)

}

app.listen("8080",(error) => {
                if(error) return console.log(error)
                console.log("Listening....")
            })