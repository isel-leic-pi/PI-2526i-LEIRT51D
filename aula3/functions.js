function f1(){
    console.log("Hello World")
}

console.log(f1())

const f2 = function() {return "Hello World"}

console.log(f2())

console.log(f1.name)
console.log(f2.name)

f2.x="PROP X"
f2.m=function(){return "FUNC M"}

console.log(f2.x)
console.log(f2.m())

function f4(p1,p2,p3,p4, ...rest){
    console.log("Start f4")
    console.log("p1 = " + p1)
    console.log("p2 = " + p2)
    console.log("p3 = " + p3)
    console.log("p4 = " + p4)
    console.log("rest 1 = " + rest[0])
    console.log("rest = " + rest)
}

f4()
f4(1)
f4(1,2)
f4(1,2,3)
f4(1,2,3,4)
f4(1,2,3,4,5,6,7)

const newObj = {}
newObj.f=function(){console.log("Function - F")}
newObj.str="STR"

function showProps(obj)
{
    for(let p in obj)
    {
        if(obj[p] instanceof Function){
            const f =obj[p]
            f()
        }else{
            console.log(p + " : " + obj[p])
        }
        
    }
}
showProps(newObj)

function add(a,b){return a+b}
function sub(a,b){return a-b}
function mul(a,b){return a*b}
function div(a,b){return a/b}

function executeAndPrint(a,b,f){
    const res = f(a,b)
    console.log("Resultado " +res)
}

executeAndPrint(5,3,add)
executeAndPrint(5,3,sub)
executeAndPrint(5,3,mul)
executeAndPrint(6,2,div)




