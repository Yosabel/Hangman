var word="";
var difficult= ["COMPUTER","DECEMBER","DOCUMENT","LANGUAGE"];
var slightlyDifficult=["WINTER","GEMINI","SUMMER","ENGLISH"];
var easy= ["MATH","HELLO","FRENCH", "TV"];
var guesses=7;
var guessedLetters=[];
var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "S", "T", "U","V","W","X","Y","Z"];


function startGame(difficulty){
    console.log(word);
    guesses=7;
    guessedLetters=[];
    document.getElementById("lose").innerHTML="";
    document.getElementById("win").innerHTML="";
    document.getElementById("image").innerHTML="";
    if (difficulty == 3) {
        var randEasy = easy[Math.floor(Math.random() * easy.length)];
        word=randEasy;
    }
    if (difficulty  == 2) {
        var randSlightlyDifficult = slightlyDifficult[Math.floor(Math.random() * slightlyDifficult.length)];
        word=randSlightlyDifficult;
    }
    if (difficulty  == 1) {
        var randDifficult= difficult[Math.floor(Math.random() * difficult.length)];
        word=randDifficult;
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
    var ret="";
    if(guesses>0){
        guessedLetters.push(userGuess);
        if( word.indexOf(userGuess)<=-1){
            guesses--;
            determineSign();
        }
        if(ret.indexOf("_")>-1){
            document.getElementById("lose").innerHTML="I'm sorry you lost the game, Try again next time!";
        }else{
            if(guesses<=0){
                document.getElementById("lose").innerHTML="I'm sorry you lost the game, Try again next time!";
            }
        }
        printWord();
        var ret=printWord();
        console.log(ret);
        if(ret.indexOf("_")==-1){
            return document.getElementById("win").innerHTML="Congratulation you Win! You wanna play again?";
        }
        populateLetters();
    }
}
function determineSign(){
    console.log(guesses);
        document.getElementById("image").innerHTML="<img src='img/s" + guesses +".png'>";
        console.log(guesses);
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

