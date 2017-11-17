

var word="";
var difficult= ["COMPUTER","DECEMBER","DOCUMENT"];
var slightlyDifficult=["WINTER","GEMINI","SUMMER","ENGLISH"];
    var easy= ["MATH","HELLO","FRENCH" ];
var guesses=15;
var guessedLetters=[];
var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "S", "T", "U","V","W","X","Y","Z"];

function startGame(){
    guesses=15;
    guessedLetters=[];
//get value out of select box and set into a var
//    var diff = document.getElementById("difficulty").innerHTML=word;
//
//         if(difficulty=1) {
//         word = difficult[Math.floor(Math.random() * difficult.length)];
//     }
//     if(dif=2){
//         word = slightlyDifficult[Math.floor(Math.random() * slightlyDifficult.length)];
//     }
//     if(dif=3){
//         word = easy[Math.floor(Math.random() * easy.length)];
//     }

    var rand = difficult[Math.floor(Math.random() * difficult.length)];
    var rand1=slightlyDifficult[Math.floor(Math.random() * slightlyDifficult.length)];
    var rand2=easy[Math.floor(Math.random() * easy.length)];


    word=rand;
    word=rand1;
    word=rand2;
    printWord();
}

function printWord(){
    var ret="";
    console.log(word);
    for(var i= 0; i<word.length;i++){
    if(guessedLetters.indexOf(word[i])>-1){
        ret+= word[i];
    }else{
        ret+="_ ";
    }
document.getElementById("output").innerHTML=ret;
    document.getElementById("guess").innerHTML="remaining guesses:" + guesses

}
console.log(ret);
}


function letters(userGuess){
    guessedLetters.push(userGuess);
  if( word.indexOf(userGuess)<=-1){
      guesses--;
  }

    if(guesses<0){
        return document.getElementById("lose").innerHTML="You lost, Try again next time!";
    }
    printWord();

}

// function populateLetters() {
//     for(var i=1;i<=26;i++){
//   // .buttonclass=""value="i"onclick=">letters[i]</button>;
//     }
//     //loop through letters
//     //for each item in letters
//
//
// }
//get value out of select box and set into a var
//    var diff = document.....
//
//         if(diff==1) {
//         word = difficult[Math.floor(Math.random() * difficult.length)];
//
//     }
//     if()
