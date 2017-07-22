console.log("Starting app.js...");
const reqFs = require('fs');
const os = require('os');
const notes = require("./notes.js");

// var user = os.userInfo(); 
// reqFs.appendFile('greetings.txt','Hello ' + user.username, function (err){
//     if (err) {
//         console.log("Sorry, I can't write to this text file (run this program as administrator?)")
//     }
// });

// var result = notes.addNote(); 
// console.log(result);

notes.add(17,22); 

// console.log("App Finished...");