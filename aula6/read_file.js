//import fs from 'node:fs'
import {readFile} from 'fs'

readFile("file2.txt", processData)

function processData(error, data){
    if(error) return console.log(error)
    console.log(data.toString())
}

console.log("DONE REALLY?")