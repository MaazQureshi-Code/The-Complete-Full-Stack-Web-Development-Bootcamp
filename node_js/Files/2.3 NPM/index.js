
// so now we dont need require
//var generateName = require("sillyname")
/// here we get the package of the sillyname

import generateName from "sillyname";
import  superheroes, { randomSuperhero } from "superheroes"
var sillyname = generateName()
const name = randomSuperhero()
// bro watch out for the function even the function is writeteen there 
console.log(`My super is ${name}.`)