const std = {name: "Filipe", number : 12123}

console.log(std)

std.email = "fil@cc.isel.pt"
console.log(std)
console.log(std.email)

delete std.email
console.log(std)
console.log(std.email)

console.log(std.number)
console.log(std["number"])

function createStudent(name, number){
    const st = {}
    st.name=name
    st.number=number
    return st

}

const std2 = createStudent("joao", 12334)
console.log(std2)



function showProps(obj)
{
    for(let p in obj)
    {
        console.log(p + " : " + obj[p])
    }
}

showProps(std2)


