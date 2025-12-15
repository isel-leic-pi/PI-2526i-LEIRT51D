

//const token = "3fa85f64-5717-4562-b3fc-2c963f66afa6"



export function webuiFunction(services){
    function home(req, resp) {
        resp.render("home",{ username : req.user && req.user.userName})
    }

    async function getTaskById(req, resp) {
        const task = await services.getTaskById(req.params.taskId)
        console.log(task)
        resp.render("task-details", { task: task })
    }

    async function getTasks(req, resp) {
        const tasks = await services.getTasks(getToken(req))
        resp.render("tasks-list", { tasks: tasks })
    }

    function createTaskView(req, resp){
        resp.render("create-task")
    }

    async function deleteTask(req, resp){
        resp.json("Delete Task")
    }

    async function createTask(req, resp){
        const task = await services.createTask(req.body.text, getToken(req))
        resp.status(303).set("location", `/tasks/${task.id}`)
        resp.end()
    }

    function getToken(req) {
        return req.user && req.user.token;
    }

    function updateTaskView(req, resp){
        //TODO obter a task e passar para o template
        resp.render("update-task", {task : {id : req.params.taskId}})
    }

    return {
        getTaskById,
        getTasks,
        createTaskView,
        createTask,
        deleteTask,
        updateTaskView,
        home
    }

}

