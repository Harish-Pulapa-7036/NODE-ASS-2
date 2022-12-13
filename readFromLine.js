
const readline=require('readline')

const inout=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
inout.question("PLEASE TELL ME UR NAME :- ",(name)=>{
    console.log("Hello",name)
    inout.close()
    
})