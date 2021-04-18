let movies = [" The Wizard of Oz", " Gone with the Wind", " Casablanca, "];

function addMovie(){
//get value from input text
let inputText = document.getElementById('inputText').value;
//append data to the array
movies.unshift(inputText);
alert(inputText + ' has been added!')
}

function seeMovie(){
alert(movies);
}


//.unshift allows you to an an element to the beginning of an array
// in order to not get [object inner.html] need to query .value (line 12)