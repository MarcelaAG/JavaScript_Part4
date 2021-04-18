/*create a variable that will contain an array of object questions.
use prompt message to ask questions in a popup. give multiple choices and then the answer. */
let questions = [ {
    prompt: "What colour is grass?\n(a) red\n(b) purple\n(c) green",
    answer: "c"
},
{
prompt: "What colour is milk?\n(a) yellow\n(b) white\n(c) black",
answer: "b"
},
{
prompt: "What colour is love?\n(a) red\n(b) blue\n(c) green",
answer: "a"
},
]
//variable with the score
let score = 0;
// for loop 
for (let i = 0; i < questions.length; i++){
    let response = window.prompt (questions [i].prompt) //this is going to bring up the popup that will ask question to the user. we're calling the questions object [i].prompt
    if(response === questions [i].answer){ //for the answer we access it the same way as the questions [i].answer
        score++;
        alert('Ya baby!! You got it!')
    }
    else{
        alert("Oh come on! What were you thinking?!")
    }   
}
//alert message to give the final results 
alert('You answered ' + score + "/" + questions.length);