//gets the cards from html
let dcard1 = document.getElementById("dcard1");
let dcard2 = document.getElementById("dcard2");
let pcard1 = document.getElementById("pcard1");
let pcard2 = document.getElementById("pcard2");

//creates and gives random number to cards
let dnum1 = Math.floor((Math.random() * 13) + 1);
let dnum2 = Math.floor((Math.random() * 13) + 1);

let pnum1 = Math.floor((Math.random() * 13) + 1);
let pnum2 = Math.floor((Math.random() * 13) + 1);

//total value of cards
let sum = pnum1+pnum2;
let dnum = dnum1+dnum2;

let result = document.getElementById("result");
let playerNum = document.getElementById("playerNum");
let dealerNum = document.getElementById("dealerNum");

//displays the numbers on the cards
function game(){
    dcard1.innerHTML = dnum1;

    pcard1.innerHTML = pnum1;
    pcard2.innerHTML = pnum2;

    playerNum.innerHTML = sum;
}

//gives player another card
function hit(){
    let newCard = document.createElement("div");
    let pnum3 = Math.floor((Math.random() * 13) + 1);
    newCard.innerHTML = pnum3;
    newCard.style.backgroundColor = "darkred"
    newCard.style.border = "10px solid gray"
    newCard.style.height = "150px";
    newCard.style.width = "100px";
    newCard.style.marginTop = "50px";
    newCard.style.marginRight = "35px";
    newCard.style.float = "left";
    newCard.style.color = "white";
    newCard.style.fontSize = "60px";
    newCard.style.display = "flex";
    newCard.style.justifyContent = "center";
    newCard.style.alignItems = "center";
    document.body.appendChild(newCard);

    sum += pnum3;
    playerNum.innerHTML = sum;

    if (sum > 21){
        result.innerHTML = "You Lose!";
        dcard2.innerHTML = dnum2;
        dealerNum.innerHTML = dnum;
    }
}

//determines the winner of the game
function stay(){
    if (dnum <= 21 && sum > dnum && sum <= 21){
        result.innerHTML = "You Win!";
        dcard2.innerHTML = dnum2;
        dealerNum.innerHTML = dnum;
    }
    else{
        result.innerHTML = "You Lose!";
        dcard2.innerHTML = dnum2;
        dealerNum.innerHTML = dnum;
    }
}