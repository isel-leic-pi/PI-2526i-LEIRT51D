//The Promise object represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.

//A Promise is in one of these states:

//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.

import fs from 'node:fs/promises'

const readPromise = fs.readFile("file1.txt")
console.log(readPromise)

readPromise
    .then(data => fs.writeFile("file2.txt", data))
    .then(()=> console.log("SUCCESS"))
    .catch(error => console.log("ERROR",error))
    .then(()=>console.log("DONE"))

    
console.log("DONE REALLY?1")
console.log("DONE REALLY?2")