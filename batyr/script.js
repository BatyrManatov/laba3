let min = 0;
console.log(min)
let max = 100;
let middle = Math.floor( (min+max) / 2);
console.log(middle)
let stage = 1;

function start() {
    document.getElementById("startText").classList.add("hideBlock");
    document.getElementById("startButton").classList.add("hideBlock");
    document.getElementById("question").classList.remove("hideBlock");
    document.getElementById("question").innerHTML="Попытка "+stage+": "+middle;
    document.getElementById("small").classList.remove("hideBlock");
    document.getElementById("bingo").classList.remove("hideBlock");
    document.getElementById("big").classList.remove("hideBlock");
}
function smallClick() {
    max = middle;
    console.log(max);
    middle=Math.floor((min+max)/2);
    if (max==middle) {
        middle -=1;
    }
    checkGame();
}
function bigClick() {
    min = middle;
    console.log(min);
    middle= Math.floor( (min+max) / 2);
    console.log(middle)
    if (min == middle) {
        middle +=1;
    }
    checkGame();
}
function bingoClick() {
    max=middle;
    min=middle;
    checkGame();
}
function checkGame() {
    if (min==max) {
        document.getElementById("question").innerHTML="Вы загадали число"+min;
        document.getElementById("small").classList.add("hideBlock");
        document.getElementById("bingo").classList.add("hideBlock");
        document.getElementById("big").classList.add("hideBlock");
        return;
    }
    stage += 1;
    if (stage == 8) {
        document.getElementById("question").innerHTML="Жульничать-нехорошо!";
    }
    document.getElementById("question").innerHTML="Попытка "+stage+": "+middle;
}