var word="";
var difficult= ["COMPUTER","DECEMBER","DOCUMENT","LANGUAGE"];
var slightlyDifficult=["WINTER","GEMINI","SUMMER","ENGLISH"];
var easy= ["MATH","HELLO","FRENCH", "TV"];
var guesses=10;
var guessedLetters=[];
var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "S", "T", "U","V","W","X","Y","Z"];
// diff=[easy,slightlyDifficult,difficult];


function startGame(){
    levelOfDifficulty();
    console.log(word);
    guesses=10;
    guessedLetters=[];

    // levelOfDifficulty();
//get value out of select box and set into a var


    // var rand = difficult[Math.floor(Math.random() * difficult.length)];
    // var rand1=slightlyDifficult[Math.floor(Math.random() * slightlyDifficult.length)];
    // var rand2=easy[Math.floor(Math.random() * easy.length)];
    //
    //
    // word=rand;
    // word=rand1;
    // word=rand2;
    printWord();
    populateLetters();
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
        document.getElementById("guess").innerHTML="Remaining Guesses:" + guesses

    }
    console.log(ret);
}


function letters(userGuess){
    var disable = "";
    guessedLetters.push(userGuess);
    if( word.indexOf(userGuess)<=-1){
        guesses--;
    }
    if(guesses<=0){
        return document.getElementById("lose").innerHTML="You lost, Try again next time!";

    }


    // if(guesses>=0 && word.indexOf("_"){
    //     return document.getElementById("win").innerHTML="You Win! You wanna play again?";
    // }
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

function levelOfDifficulty() {
    var diff = document.getElementById("difficulty").value;

    if (diff = 3) {
        word = easy[Math.floor(Math.random() * easy.length)];
    }
    else if (diff = 2) {
        word = slightlyDifficult[Math.floor(Math.random() * slightlyDifficult.length)];
        console.log(word);
    }
    else if (diff = 1) {
        word = difficult[Math.floor(Math.random() * difficult.length)];

    }
    console.log(word);

}