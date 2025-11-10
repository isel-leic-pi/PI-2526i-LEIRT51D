import services from './tasks-services.mjs'

const token = "3fa85f64-5717-4562-b3fc-2c963f66afa6"

function home(req, resp) {
    resp.send(
        `<html>
            <head>
                <title>Tasks Application</title>
            </head>
            <body>
                <html>
                <head>
                    <title>Tasks Application</title>
                </head>
                <body>
                    <!-- Menu -->
                    <a href="/"> Home </a>
                    <a href="/tasks"> Tasks </a>

                    <h1>Tasks</h1>
                    <p>Application</p>

                    <a href="https://www.isel.pt"> ISEL </a>
            </body>
        </html>`)

}

async function getTaskById(req, resp) {
    const task = await services.getTaskById(req.params.taskId)
    console.log(task)
    resp.send(`
            <html>
                <head>
                    <title>Tasks</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <!-- Header -->
                    <a href="/"> Home </a>
                    <a href="/tasks"> Tasks </a>
            
                    <ul>
                        <li>Identifier : ${task.id}</li>
                        <li>Text : ${task.text}</li>
                    </ul>
            
                    <!-- Footer -->
                    <p>Chelas 2021</p>
            
                </body>
            </html>
        `)


}

export const webui = {
    getTaskById,
    home
}

export default webui