function changeConsoleLog(){
    const oldConsoleLog = console.log
    console.log = function(...rest){
        oldConsoleLog.call(console,Date(),...rest)
    }
}

console.log(Date(),"X", "Y")

changeConsoleLog()

console.log("X","Y")
//