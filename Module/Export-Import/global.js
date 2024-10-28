//CommonJS, every file is a module by default
//Modules - Encapsulated Code(only shares min)
const names =require('./name');
const sayHi=require('./util');
const data=require('./alternate')

console.log(data);
sayHi('Om');
sayHi(names.john);
sayHi(names.peter);