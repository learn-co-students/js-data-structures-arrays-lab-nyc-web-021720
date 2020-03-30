// Write your solution here

const drivers = [`Milo`, `Otis`, `Garfield`];

function destructivelyAppendDriver(name) {
  drivers.push(name);
  return drivers;
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
  return drivers;
}
