let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
    return drivers
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
    return drivers
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
    return drivers
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
    return drivers
}

function appendDriver(name){
    let driversCopy = [...drivers]
    driversCopy.push(name)
    return driversCopy
}

function prependDriver(name){
    let driversCopy = [...drivers]
    driversCopy.unshift(name)
    return driversCopy
}

function removeLastDriver(){
    let driversCopy = [...drivers]
    driversCopy.pop()
    return driversCopy
}

function removeFirstDriver(){
    let driversCopy = [...drivers]
    driversCopy.shift()
    return driversCopy
}



