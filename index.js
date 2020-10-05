const lib = require('./lib')

try {
  const result = lib.sayHello()
  if (result) {
    console.log(result) // !DEBUG
  }
} catch (err) {
  console.error(`${err.name}: ${err.message}`) // !DEBUG
}

try {
  const result = lib.sayHello('Drozerah')
  if (result) {
    console.log(result) // !DEBUG
  }
} catch (err) {
  console.error(`${err.name}: ${err.message}`) // !DEBUG
}
