import services from './tasks-services.mjs'

const token = "3fa85f64-5717-4562-b3fc-2c963f66afa6"

function home(req, resp) {
    resp.render("home")

}

async function getTaskById(req, resp) {
    const task = await services.getTaskById(req.params.taskId)
    console.log(task)
    resp.render("task-details", { task: task })

}

async function getTasks(req, resp) {
    const tasks = await services.getTasks(token)
    resp.render("tasks-list", { tasks: tasks })
}

function createTaskView(req, resp){
    resp.render("create-task")
}

async function createTask(req, resp){
    const task = await services.createTask(req.body.text, token)
    resp.status(303).set("location", `/tasks/${task.id}`)
    resp.end()
}



export const webui = {
    getTaskById,
    getTasks,
    createTaskView,
    createTask,
    home
}

export default webui