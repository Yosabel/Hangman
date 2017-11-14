

var word="";
var words= ["COMPUTER","DECEMBER", "WINTER", "SUMMER", "GEMINI", "SPRING", "ENGLISH", "MATH", "FRENCH"];
var guesses=15;
var guessedLetters=[];
var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "S", "T", "U","V","W","X","Y","Z"];

function startGame(){
    guesses=15;
    guessedLetters=[];
    var rand = words[Math.floor(Math.random() * words.length)];
    console.log(rand);
    word=rand;
    printWord();
    guessLetter();
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
guessedLetters.push(letter);
guesses--;
printWord();
console.log(guessLetter);

}
function letters(userGuess){
    console.log(userGuess);

}

function populateLetters() {
    // for(var i=1;i<=26;i++){
    // buttonclass=""value="i"onclick=">letters[i]</button>;
    // }
    //loop through letters
    //for each item in letters


}