// WE are able to perform the app property without invoking
require('./app')

// Now we are importing the same file for the diff purpose 
const names = require('./app')
console.log(names)