const dynamicContent = document.getElementById("dynamic-text") ;
const phrases = ["an Electronics Engineer." ,"a Freelancer.", "a Web Developer."];
const typingSpeed = 300;
const erasingSpeed = 75;
let letterIndex = 0;
let phrasesIndex=0;

function printLetters(phrase){
    if(letterIndex==phrase.length) {
        clearLetters();
    }
    else if(letterIndex <phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex +=1;
        setTimeout(function(){
            printLetters(phrase)
        },typingSpeed);
    }

}

function clearLetters(){
    if(letterIndex==-1){
        phrasesIndex = (phrasesIndex+1)%phrases.length;
        letterIndex = 0;
        printLetters(phrases[phrasesIndex]);
    }
    else if(letterIndex > -1){
        let updatedPhrase = "";
        for(let index=0; index<letterIndex; index++){
            updatedPhrase += phrases[phrasesIndex].charAt(index);
        }
        dynamicContent.textContent = updatedPhrase;
        letterIndex -=1;
        setTimeout(clearLetters, erasingSpeed);
    }
}
printLetters(phrases[phrasesIndex]);


$(document).ready(function(){
    var ua = navigator.userAgent;
    if(/Chrome/i.test(ua))
    //    $('a.chrome').show();
        $('a.desktop-other').show();
    else if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
       $('a.mobile-other').show();
    else
       $('a.desktop-other').show();
});
