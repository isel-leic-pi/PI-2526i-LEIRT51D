import express from 'express'
import data from './tasks-data-mem.mjs'
import {servicesFunction} from './tasks-services.mjs'
import {webapiFunction} from './tasks-web-api.mjs'
import {webuiFunction} from './tasks-web-ui.mjs'

const services = servicesFunction(data)
const webapi = webapiFunction(services)
const webui = webuiFunction(services)

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.set('view engine', 'hbs');

app.get("/api/tasks", webapi.getTasks)
app.get("/api/tasks/:taskId", webapi.getTaskById)
app.post("/api/tasks", webapi.createTask)

app.get("/", webui.home)
app.get("/tasks", webui.getTasks)
app.get("/tasks/:taskId", webui.getTaskById)
app.post("/tasks", webui.createTask)
app.post("/tasks/:id/delete", webui.deleteTask)
app.get("/createTask", webui.createTaskView)

app.listen(8080, ()=>console.log("Listening..."))