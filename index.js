// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
  return drivers;
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
  return drivers;
}
function destructivelyRemoveLastDriver() {
  return drivers.pop();
}
function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}
function appendDriver(name) {
  let newDrivers = [...drivers];
  newDrivers.push(name);
  return newDrivers;
}
function prependDriver(name) {
  let newD = [...drivers];
  newD.unshift(name);
  return newD;
}
function removeLastDriver() {
  let newD = [...drivers];
  newD.pop();
  return newD;
}
function removeFirstDriver() {
  let newD = [...drivers];
  newD.shift();
  return newD;
}
