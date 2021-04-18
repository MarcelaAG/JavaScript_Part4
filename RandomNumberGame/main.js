// console.log(randomNum);
//     /*Math.random is a function that creates a random decimal number between 0 and less than 1.
//     Math.floor is takes a decimal number and lowers the number to a whole number. 
//     Strips away the decimal. Then I need to multiply by one more than the number I want in this case it's 101.*/
//     //now I need to declare a variable for the player's guess

let playGame = confirm('Would you like to take a guess?');

if (playGame){
    //play 
    let playerChoice = alert('Ok let\'s play! Make a guess and hit the submit button.');
    console.log(playerChoice);
} else
alert('Ok, maybe another time!');


function devine () {
 let randomNumberValue = Math.floor(Math.random() * 101);
 console.log(randomNumberValue);
 let maxTries = 5;
 let counter = 0;
 
     
       for(let i = 1; i < 6; i++){
        counter ++;
        let guess = window.prompt("Please choose a number between 0 and 100.");
        if(guess == null){
            alert('I guess you changed your mind...see you next time!'); //player hits cancel button and doesn't want to continue the game
            return;
        }
        if (guess == randomNumberValue){ //players guesses the number correctly
            alert('Wow! You got it! It took you ' + counter + ' turn(s) to get it right!');
            document.write("<p> The random number was " + randomNumberValue + "</p>");
            break;
        }
        else if(guess < 1 || guess > 100){ //player enters a number that is lower than 1 or higher than 100
            alert('Please enter a number between 1 and 100!');
         } 
        
        else if (guess > randomNumberValue){ // player's guess is too high, second if condition
            alert('Your guess is too high!');
        } 
        else if (guess < randomNumberValue){ // player's guess is too low, third if condition
            alert('Your guess is too low!');
        } 
        //if a player enters anything other than a number here is the else clause:
        else if (isNaN(guess)){
          alert('I don\'t understand.');
         }          
        }
         if (counter >= maxTries){
            window.alert('Sorry, you have run out of luck! You used up your' + counter + 'turns!')
         }
         
        }
        
