const fileContentJson = ' {"name":"Filipe" , "text" : "txt" }'
const parsed = JSON.parse(fileContentJson)
const inString = JSON.stringify(parsed)
console.log(parsed)
console.log(inString)