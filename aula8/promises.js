
const p1 = Promise.resolve(53)
const p2 = Promise.reject("Error 32")

console.log(p1)
console.log(p2)

p1
    .then(i => i + 2)
    .then(console.log)
    .then(f => console.log(f))

p2
    .catch(e => console.log(e))    

console.log("Done")