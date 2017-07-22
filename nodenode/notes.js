console.log("starting notes.js..."); 

//adds an object that is public
module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};

module.exports.add = (a, b) => {
    console.log(a + b); 
    return 'Added!';      
};