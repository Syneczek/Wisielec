
var words = ["drzewo", "ławka", "domek", "ściana", "żółć"];
 hp = 5;
let word  = words[Math.floor(Math.random()*5)];
let fullWord = word;
word = word.split("");
let length = word.length;
    for(i = 0; i<length;i++){
         const node = document.createElement("h2");
        //  node.setAttribute("type","text");
        //  node.setAttribute("maxlength","1");
         document.getElementById("word").appendChild(node);
    }
    let letterSpot =  document.querySelectorAll("#word h2");    
    console.log(fullWord);    
    let hpCounter = document.getElementById("hp");
    hpCounter.innerHTML = 5;

function CheckLetter(){
    if(hp!=0){
    let indexes = [];
    let letter = document.getElementById("letter").value;
    for(i = 0; i<length;i++){
        if(word[i] == letter){
            indexes.push(i);
            letterSpot[i].textContent = letter;
        }
    }
    if(indexes.length == 0){
        hp -= 1;
        if(hp == 0){
            document.getElementById("wynik").innerHTML = "Wynik: Przegrana :(";
        }   
    }
    hpCounter.innerHTML = hp;
    const allNotEmpty = Array.from(letterSpot).every(h2 => h2.textContent.trim() !== '');

    if (allNotEmpty) {
        document.getElementById("wynik").innerHTML = "Wynik: Wygrana :)";
    }
}
}
function CheckWord() {
    if(hp!=0){
    let checkWord = document.getElementById("check").value;
    if(fullWord == checkWord){
        for(y=0;y<letterSpot.length;y++){
            letterSpot[y].textContent = word[y];
        }
    }else{
        hp -=1;
        y = letterSpot.length;
        if(hp == 0){
            document.getElementById("wynik").innerHTML = "Wynik: Przegrałeś :(";
    }
    }

    hpCounter.innerHTML = hp;
    const allNotEmpty = Array.from(letterSpot).every(h2 => h2.textContent.trim() !== '');

    if (allNotEmpty) {
        document.getElementById("wynik").innerHTML = "Wynik: Wygrałeś :)";
    }
}
}
