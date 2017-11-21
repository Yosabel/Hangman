



var word="";
var difficult= ["COMPUTER","DECEMBER","DOCUMENT"];
var slightlyDifficult=["WINTER","GEMINI","SUMMER","ENGLISH"];
var easy= ["MATH","HELLO","FRENCH" ];
var guesses=10;
var guessedLetters=[];
var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "S", "T", "U","V","W","X","Y","Z"];

function startGame(){
    guesses=10;
    guessedLetters=[];
    // levelOfDifficulty();
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
    populateLetters();
}

function printWord(){
    // levelOfDifficulty();
    var ret="";
    console.log(word);
    for(var i= 0; i<word.length;i++){
        if(guessedLetters.indexOf(word[i])>-1){
            ret+= word[i];
        }else{
            ret+="_ ";
        }
        document.getElementById("output").innerHTML=ret;
        document.getElementById("guess").innerHTML="Remaining Guesses:" + guesses

    }
    console.log(ret);
}


function letters(userGuess){
    guessedLetters.push(userGuess);
    if( word.indexOf(userGuess)<=-1){
        guesses--;
    }

    if(guesses<=-1){
        return document.getElementById("lose").innerHTML="You lost, Try again next time!";
    }
    printWord();
    populateLetters();

}


//get value out of select box and set into a var
//    var diff = document.....
//
//         if(diff==1) {
//         word = difficult[Math.floor(Math.random() * difficult.length)];
//
//     }
//     if()
// function disableLetter(letter){
//
// }




function populateLetters() {
    var r = "";
    for (var i = 0; i < letter.length; i++) {
        if (guessedLetters.indexOf(letter[i]) > -1) {
            r +="<button class='userGuess' onclick= 'letters(this.value)' value ='" + letter[i] + "' disabled > " + letter[i] + "</button>"


        } else {

            r += "<button class='userGuess' onclick='letters(this.value)' value ='" + letter[i] + "'>" + letter[i] + "</button>"
        }
    }
    return document.getElementById("button").innerHTML=r;
}
// if letter we are on in iteration is in guessed
//
//         "<button class='submit' onclick='letters(this.value)' value='" + letter[i] + "' disabled>" + letter[i] + "</button>"
//
//     }
// }
// function levelOfDifficulty(){
//     var diff = document.getElementById("difficulty").value;
//
//     if(diff=1) {
//         word = difficult[Math.floor(Math.random() * difficult.length)];
//     }console.log(word);
//     if(diff=2){
//         word = slightlyDifficult[Math.floor(Math.random() * slightlyDifficult.length)];
//     }
//     console.log(word);
//     if(diff=3){
//         word = easy[Math.floor(Math.random() * easy.length)];
//     }
//     return diff;
// }
