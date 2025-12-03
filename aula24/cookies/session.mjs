import express from 'express'
import session from 'express-session'

const app = express()

app.use(session({secret : 'PI 2025', resave : true, saveUninitialized : true}))
app.get('/', rootHandler)
app.get('/addSmartphone', addSmartphone)
app.get('/addCover', addCover)
app.get('/seeBag', seeBag)

app.listen('9000', ()=>{console.log('Listening')})


function rootHandler(req, res){
    console.log('Root Handler')   
   
    if(!req.session.bag) req.session.bag = {items : [], value : 0}
    console.log(req.session)
    res.send(`
            <html>
                <head>
                    <title>Cookies Tests</title>
                </head>
                <body>
                    <a href="/seeBag"> see Bag </a>
                    <a href="/addSmartphone"> Add Smartphone </a>
                    <a href="/addCover"> Add Cover </a>
                </body>
             </html>`)
}

function addCover(req, res){
    console.log('Add Cover')
    console.log(req.session)
    req.session.bag.items.push("Cover Y")
    req.session.bag.value+=1000
    res.redirect(303,'/')
}

function addSmartphone(req, res){
    console.log('Add Smartphone')
    req.session.bag.items.push("Smartphone X")
    req.session.bag.value+=1000
    res.redirect(303,'/')
}

function seeBag(req, res){
    console.log(req.session)
    res.send(`${JSON.stringify(req.session.bag)}
           <a href="/"> Root </a>`)
}