// word - string
// words - array
// guesses - number
// guessedLetters - array


var word="";
var words= ["COMPUTER","DECEMBER", "WINTER", "SUMMER", "GEMINI", "SPRING", "ENGLISH", "MATH", "FRENCH"];
var guesses=15;
var guessedLetters=[];
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];

function startGame(){
    guesses=15;
    guessedLetters=[];
    var rand = words[Math.floor(Math.random() * words.length)];
    console.log(rand);
    word=rand;
    printWord();
}
function printWord(){
    var ret="";
    console.log(word);
    for(var i= 0; i<word.length;i++){
    if(guessedLetters.indexOf(word[i])>-1){
        ret+= word[i];
        console.log(ret);
    }else{
        ret+="_";
    }

}
console.log(ret);
}

function guessLetter(){
guessedLetters.push(word);
guesses--;
printword();

}
function letters(userGuess){
    console.log(userGuess);

}

function populateLetters() {
    //loop through letters
    //for each item in letters

    //<button class="" value="i" onclick=">letters[i]</button>

}