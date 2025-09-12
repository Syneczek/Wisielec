var words = ["drzewo", "ławka", "domek", "ściana", "żółć"];
let hp = 5;
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
            console.log("przegrales");
        }   
    }
    hpCounter.innerHTML = hp;
}
function CheckWord() {
    let checkWord = document.getElementById("check").value;
    if(fullWord == checkWord){
        for(y=0;y<letterSpot.length;y++){
            letterSpot[y].textContent = word[y];
        }
    }else{
        hp -=1;
        y = letterSpot.length;
        if(hp == 0){
        console.log("przegrales");
    }
    }

    hpCounter.innerHTML = hp;
}