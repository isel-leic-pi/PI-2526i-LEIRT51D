//npm install passport express-session


import express from 'express'
import data from './tasks-data-mem.mjs'
import {servicesFunction} from './tasks-services.mjs'
import {webapiFunction} from './tasks-web-api.mjs'
import {webuiFunction} from './tasks-web-ui.mjs'
import authWebUiFunction from './auth-web-ui.mjs'

import expressSession from 'express-session'
import passport from 'passport'

const services = servicesFunction(data)
const webapi = webapiFunction(services)
const webui = webuiFunction(services)
const authWebUi = authWebUiFunction(services)

const app = express()

app.use(expressSession({secret : 'PI 2025', resave : true, saveUninitialized : true}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))

app.set('view engine', 'hbs');

app.get("/api/tasks", webapi.getTasks)
app.get("/api/tasks/:taskId", webapi.getTaskById)
app.post("/api/tasks", webapi.createTask)
app.put("/api/tasks/:taskId", webapi.updateTask)

app.get("/login", authWebUi.getLogin)
app.post("/logout", authWebUi.postLogout)
app.post("/login", authWebUi.postLogin)

app.get("/", webui.home)
app.get("/tasks", webui.getTasks)
app.get("/tasks/:taskId", webui.getTaskById)
app.post("/tasks", webui.createTask)
app.post("/tasks/:id/delete", webui.deleteTask)
app.get("/createTask", webui.createTaskView)
app.get("/tasks/:taskId/update", webui.updateTaskView)

app.listen(8080, ()=>console.log("Listening..."))