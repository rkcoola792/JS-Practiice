let s="rat"
let e="tar"

e=e.split("")
for(let ele of e){
    if(!s.includes(ele))
    return console.log("false")
}

return console.log("true")