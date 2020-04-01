// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)

}
function destructivelyPrependDriver(name){
    drivers.unshift(name)
}
function destructivelyRemoveLastDriver(){
    drivers.pop()
}
function destructivelyRemoveFirstDriver(){
    drivers.shift()
}
function appendDriver(name){
    return [...drivers , name]
}
function prependDriver(name){
    return [name,...drivers]
}
function removeLastDriver(){
    let temp = drivers.slice()
    temp.pop()
    return temp
}
function removeFirstDriver(){
    let temp = drivers.slice()
    temp.shift()
    return temp
    
}