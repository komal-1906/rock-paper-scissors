const handOptions = {
    "rock": "images/Rock.png",
    "paper": "images/Paper.png",
    "scissors": "images/Scissors.png" 
}

let SCORE = 0;

const pickUserHand = (hand) => {
    console.log("userHand:",hand);

    let hands = document.querySelector(".hands");
    //hide the current page
    hands.style.display = "none"

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    //get the user pick
    document.getElementById("userPickImg").src = handOptions[hand];

    let cpHand = pickCompHand();
    referee(hand, cpHand);
}

const pickCompHand = () => {
    let hands = ["rock", "paper", "scissors"]
    let cpHand = hands[Math.floor(Math.random() * 3)]

    console.log("cpHand:", cpHand);
    document.getElementById("compPickImg").src = handOptions[cpHand];

    return cpHand;
}

const referee = (userHand, cpHand) => {
    if(userHand == "paper" && cpHand == "scissors"){
        setDecision("YOU LOSE !");
    }
    else if(userHand == "paper" && cpHand == "rock"){
        setDecision("YOU WIN !");
        setScore(SCORE + 1);
    }
    else if(userHand == "paper" && cpHand == "paper") {
        setDecision("It's a TIE !");
    }
    else if(userHand == "rock" && cpHand == "scissors"){
        setDecision("YOU WIN !");
        setScore(SCORE + 1);
    }
    else if(userHand == "rock" && cpHand == "paper"){
        setDecision("YOU LOSE !");
    }
    else if(userHand == "rock" && cpHand == "rock"){
        setDecision("It's a TIE !");
    }
    else if(userHand == "scissors" && cpHand == "scissors"){
        setDecision("It's a TIE !");
    }
    else if(userHand == "scissors" && cpHand == "rock"){
        setDecision("YOU LOSE !");
    }
    else if(userHand == "scissors" && cpHand == "paper"){
        setDecision("YOU WIN !");
        setScore(SCORE + 1);
    }
}

const restartGame = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let contest = document.querySelector(".contest");
    contest.style.display = "none"; 
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}
