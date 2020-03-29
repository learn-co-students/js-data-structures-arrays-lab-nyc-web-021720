// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
    return drivers;
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
    return drivers;
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
    return drivers;
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
    return drivers;
}

function appendDriver(name) {
    let newdriver = [...drivers, name];
    return newdriver;
}

function prependDriver(name) {
    let newdriver = [name, ...drivers];
    return newdriver;
}

function removeLastDriver() {
    let newdriver = drivers.slice(0, -1);
    return newdriver;
}

function removeFirstDriver() {
    let newdriver = drivers.slice(1);
    return newdriver;
}

