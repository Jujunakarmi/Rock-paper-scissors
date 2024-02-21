var wins = 0;
  var losses = 0 ;
  var ties = 0;

// What do we need for game? Variables
var options = ["R", "P", "S"]

//After we have all the variables.//First step//Define Function

var playGame = function () {
    var userChoice = window.prompt("Enter R, P, or S")

    //if statement for what if user chosed cancel  
    if (!userChoice)
        return;

   
   
        //get random index from options
    var index = Math.floor(Math.random() * options.length)
    var computerChoice = options[index]

    window.alert("The computer chose " + computerChoice);




    //if statement for selections( FOR CONDITIONS)
    //
    if (userChoice === computerChoice) {
        ties++
        window.alert("It's a tie!")
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
            (userChoice === "P" && computerChoice === "R") ||
            (userChoice === "S" && computerChoice === "P")
    ){wins++
            window.alert("You win")
        }else
            {losses++
            window.alert("You lose")}


// Display for wins, losses or ties
window.alert("Stats: \nWins: "+ wins + "\nLosses: "+ losses +"\nTies: " + ties)


//Play again Pop
var playAgain = window.confirm("Play again?")
if (playAgain){
    playGame()
}else{
    return;}






}


playGame();