console.log("Starting app.js...");
//node API
const reqFs = require('fs');
const os = require('os');
//NPM modules
const _ = require("lodash"); 
//javascript files
const notes = require("./notes.js");

// var stringVar = "Strings!";
// var notStringVar = 90;
// var isStringVar = (_.isString(stringVar)); 
// var isNotStringVar = (_.isString(notStringVar)); 

// if (isStringVar === true && isNotStringVar === false) {
//     console.log("Both objects are strings!"); 
// }
// else if (isStringVar === true || isNotStringVar === false) {
//     //checks what one is true / false
//     var objectString
//     if (isStringVar === true){
//         objectString = "stringVar";
//     }
//     else {
//         objectString = "notStringVar";
//     }

//     console.log("Only one object is a string: " + objectString); 
// }
// else {
//     console.log("Neither condition is true!");
// }