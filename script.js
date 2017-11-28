var word="";
var difficult= ["COMPUTER","DECEMBER","DOCUMENT","LANGUAGE"];
var slightlyDifficult=["WINTER","GEMINI","SUMMER","ENGLISH"];
var easy= ["MATH","HELLO","FRENCH", "TV"];
var guesses=9;
var guessedLetters=[];
var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "S", "T", "U","V","W","X","Y","Z"];


function startGame(difficulty){

    console.log(word);
    guesses=9;
    guessedLetters=[];
    document.getElementById("lose").innerHTML="";
    document.getElementById("win").innerHTML="";
    if (difficulty == 3) {
        var ranEasy = easy[Math.floor(Math.random() * easy.length)];
        word=ranEasy;
    }
    if (difficulty  == 2) {
        var ranSlightlyDifficult = slightlyDifficult[Math.floor(Math.random() * slightlyDifficult.length)];
        word=ranSlightlyDifficult;
    }
    if (difficulty  == 1) {
        var ranDifficult= difficult[Math.floor(Math.random() * difficult.length)];
        word=ranDifficult;
    }
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
   return ret;
}


function letters(userGuess){
    var disable = "";
    guessedLetters.push(userGuess);
    if( word.indexOf(userGuess)<=-1){
        guesses--;
        determineSign();
    }

    if(guesses<=0){
        return document.getElementById("lose").innerHTML="You lost, Try again next time!";

    }
    // if()
    var ret=printWord();
    console.log(ret);
    if(ret.indexOf("_")==-1){
        return document.getElementById("win").innerHTML="You Win! You wanna play again?";
    }
    populateLetters();

}
function determineSign(){

        document.getElementById("image").innerHTML="<img src='img/step" + guesses +".png'>";
}


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

