import express from 'express'
import webapi from './tasks-web-api.mjs'
import webui from './tasks-web-ui.mjs'

const app = express()

app.use(express.json())


app.get("/api/tasks", webapi.getTasks)
app.get("/api/tasks/:taskId", webapi.getTaskById)
app.post("/api/tasks", webapi.createTask)

app.get("/", webui.home)
//app.get("/tasks", webui.getTasks)
app.get("/tasks/:taskId", webui.getTaskById)


app.listen(8080, ()=>console.log("Listening..."))