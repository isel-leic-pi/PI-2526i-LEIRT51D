const array = [123,,"STR"]

console.log(array)
console.log(array.length)

console.log(array[1])
console.log(array[2])
console.log(array["2"])

array[100] = 100

console.log(array)

console.log(array.length)

array.push("last")

console.log(array)

array[102] = function () {return "func in 102"}

console.log(array[102]())

array.email = "fil@cc.isel.pt"

console.log(array.email)

const array2 = [1,2,3]

const double = function (e) {return e * 2} 

//const array3 = array2.map(function (e) {return e * 2} )
//const array3 = array2.map(double)
const array3 = array2.map(e => e * 2)

console.log(array3)