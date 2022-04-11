const hands = ["rock", "paper", "scissors"];
const playerRock = document.querySelector("#playerRock");
const playerPaper = document.querySelector("#playerPaper");
const playerScissors = document.querySelector("#playerScissors");
const playButton = document.querySelector("#compPlayButton");
const newRoundButton = document.querySelector("#newRoundButton");

let player1WinCount = 0;
let player2WinCount = 0;

const displayFlex = (...args) => {
  for(let i = 0; i < [...args].length; i++){
    console.log([...args][i])
    document.querySelector([...args][i]).style.display = "flex";
  }
}

const displayBlock = (...args) => {
  for(let i = 0; i < [...args].length; i++){
    console.log([...args][i])
    document.querySelector([...args][i]).style.display = "block";
  }
}

const displayNone = (...args) => {
  for(let i = 0; i < [...args].length; i++){
    console.log([...args][i])
    document.querySelector([...args][i]).style.display = "none";
  }
}

const compRock = () => {
  displayFlex('#compRock', '#computerChose')
  // document.querySelector("#compRock").style.display = "flex";
  // document.querySelector("#computerChose").style.display = "flex";
};
const compPaper = () => {
  displayFlex('#compPaper', '#computerChose')
  // document.querySelector("#compPaper").style.display = "flex";
  // document.querySelector("#computerChose").style.display = "flex";
};
const compScissors = () => {
  displayFlex('#compScissors', '#computerChose')
  // document.querySelector("#compScissors").style.display = "flex";
  // document.querySelector("#computerChose").style.display = "flex";
};

const playerHandsVisible = () => {
  playerRock.style.display = "flex";
  playerPaper.style.display = "flex";
  playerScissors.style.display = "flex";
};
const compHandsHidden = () => {
  displayNone("#compRock", "#compPaper", "#compScissors")
  // document.querySelector("#compRock").style.display = "none";
  // document.querySelector("#compPaper").style.display = "none";
  // document.querySelector("#compScissors").style.display = "none";
};
const playerHandsHidden = () => {
  displayNone("#playerRock", "#playerPaper", "#playerScissors")
  // document.querySelector("#playerRock").style.display = "none";
  // document.querySelector("#playerPaper").style.display = "none";
  // document.querySelector("#playerScissors").style.display = "none";
};
const resultHandsHidden = () => {
  displayNone("#resultRock", "#resultPaper", "#resultScissors")
  // document.querySelector("#resultRock").style.display = "none";
  // document.querySelector("#resultPaper").style.display = "none";
  // document.querySelector("#resultScissors").style.display = "none";
};
const welcomeLayout = () => {
  displayBlock('#compPlayButton', '.welcomeText')
  displayFlex(".computerArea")
  displayNone(".directionsArea", ".selectionArea", ".scoreCont", "#newRoundButton")
  // document.querySelector("#compPlayButton").style.display = "block";
  // document.querySelector(".welcomeText").style.display = "block";
  // document.querySelector(".directionsArea").style.display = "none";
  // document.querySelector(".selectionArea").style.display = "none";
  // document.querySelector(".computerArea").style.display = "flex";
  // document.querySelector(".scoreCont").style.display = "none";
  // document.querySelector("#newRoundButton").style.display = "none";
};
const resetRoundLayout = () => {
  displayBlock('.scoreCont')
  displayFlex('#chooseHandDirections', '.directionsArea', '.selectionArea', '.computerArea')
  displayNone("#computerChose", ".welcomeText", "#youChose", "#handTie", "#compPlayButton", "#newRoundButton", "#wonRound", "#lostRound", "#tiedRound", "#youWin", "#youLose", "#knightThumbsUp", "#sadStitch")
  // document.querySelector("#chooseHandDirections").style.display = "flex";
  // document.querySelector(".directionsArea").style.display = "flex";
  // document.querySelector(".selectionArea").style.display = "flex";
  // document.querySelector(".computerArea").style.display = "flex";
  // document.querySelector("#computerChose").style.display = "none";
  // document.querySelector("#youChose").style.display = "none";
  // document.querySelector("#handTie").style.display = "none";
  // document.querySelector(".scoreCont").style.display = "block";
  // document.querySelector(".welcomeText").style.display = "none";
  // document.querySelector("#compPlayButton").style.display = "none";
  // document.querySelector("#newRoundButton").style.display = "none";
  // document.querySelector("#wonRound").style.display = "none";
  // document.querySelector("#lostRound").style.display = "none";
  // document.querySelector("#tiedRound").style.display = "none";
  // document.querySelector("#youWin").style.display = "none";
  // document.querySelector("#youLose").style.display = "none";
  // document.querySelector("#knightThumbsUp").style.display = "none";
  // document.querySelector("#sadStitch").style.display = "none";
  playerRock.style.display = "flex";
  playerPaper.style.display = "flex";
  playerScissors.style.display = "flex";
  compHandsHidden();
  resultHandsHidden();
};

const wonRound = () => {
  displayBlock("#wonRound", "#newRoundButton")
  displayNone(".scoreCont", ".welcomeText")
  // document.querySelector(".scoreCont").style.display = "none";
  // document.querySelector("#wonRound").style.display = "block";
  // document.querySelector(".welcomeText").style.display = "none";
  // document.querySelector("#newRoundButton").style.display = "block";
};
const lostRound = () => {
  displayBlock("#lostRound", "#newRoundButton")
  displayNone(".scoreCont", ".welcomeText")
  // document.querySelector(".scoreCont").style.display = "none";
  // document.querySelector("#lostRound").style.display = "block";
  // document.querySelector(".welcomeText").style.display = "none";
  // document.querySelector("#newRoundButton").style.display = "block";
};
const tiedRound = () => {
  displayBlock("#tiedRound", "#newRoundButton")
  displayNone(".scoreCont", ".welcomeText")
  // document.querySelector(".scoreCont").style.display = "none";
  // document.querySelector("#tiedRound").style.display = "block";
  // document.querySelector(".welcomeText").style.display = "none";
  // document.querySelector("#newRoundButton").style.display = "block";
};
const wonGameLayout = () => {};
const playerChoseLayout = () => {
  displayNone("#chooseHandDirections")
  displayFlex("#youChose")
  // document.querySelector("#chooseHandDirections").style.display = "none";
  // document.querySelector("#youChose").style.display = "flex";
};

welcomeLayout();

function getHand() {
  return parseInt(Math.random() * 10) % 3;
}
const player1 = {
  name: "You",
  playerHand: "",
};
const player2 = {
  name: "the Computer",
  playerHand: getHand,
};

playButton.addEventListener("click", function () {
  resetRoundLayout();
});

playerRock.addEventListener("click", function () {
  playerHandsHidden();
  player1.playerHand = hands[0];
  playGame(player1, player2, 5);
  document.querySelector("#resultRock").style.display = "flex";
});

playerPaper.addEventListener("click", function () {
  playerHandsHidden();
  player1.playerHand = hands[1];
  playGame(player1, player2, 5);
  document.querySelector("#resultPaper").style.display = "flex";
});

playerScissors.addEventListener("click", function () {
  playerHandsHidden();
  player1.playerHand = hands[2];
  playGame(player1, player2, 5);
  document.querySelector("#resultScissors").style.display = "flex";
});

function playRound(player1, player2) {
  let hand1 = player1.playerHand;
  let hand2 = hands[player2.playerHand()];

  if (hand1 === "rock" && hand2 === "scissors") {
    console.log(
      player1.name +
        " played " +
        hand1 +
        " and " +
        player2.name +
        " played " +
        hand2 +
        ". " +
        player1.name +
        " wins!"
    );
    if (player1WinCount < 5 && player2WinCount < 5) {
          playerChoseLayout();
          compScissors();
    }

    return player1;
  } else if (hand1 === "paper" && hand2 === "rock") {
    console.log(
      player1.name +
        " played " +
        hand1 +
        " and " +
        player2.name +
        " played " +
        hand2 +
        ". " +
        player1.name +
        " wins!"
    );
    if (player1WinCount < 5 && player2WinCount < 5) {
      playerChoseLayout();
      compRock();
}
    return player1;
  } else if (hand1 === "scissors" && hand2 === "paper") {
    console.log(
      player1.name +
        " played " +
        hand1 +
        " and " +
        player2.name +
        " played " +
        hand2 +
        ". " +
        player1.name +
        " wins!"
    );
    if (player1WinCount < 5 && player2WinCount < 5) {
      playerChoseLayout();
      compPaper();
}
    return player1;
  } else if (hand2 === "rock" && hand1 === "scissors") {
    console.log(
      player1.name +
        " played " +
        hand1 +
        " and " +
        player2.name +
        " played " +
        hand2 +
        ". " +
        player2.name +
        " wins!"
    );
    if (player1WinCount < 5 && player2WinCount < 5) {
      playerChoseLayout();
      compRock();
}
    return player2;
  } else if (hand2 === "paper" && hand1 === "rock") {
    console.log(
      player1.name +
        " played " +
        hand1 +
        " and " +
        player2.name +
        " played " +
        hand2 +
        ". " +
        player2.name +
        " wins!"
    );
    if (player1WinCount < 5 && player2WinCount < 5) {
      playerChoseLayout();
      compPaper();
}
    return player2;
  } else if (hand2 === "scissors" && hand1 === "paper") {
    console.log(
      player1.name +
        " played " +
        hand1 +
        " and " +
        player2.name +
        " played " +
        hand2 +
        ". " +
        player2.name +
        " wins!"
    );
    if (player1WinCount < 5 && player2WinCount < 5) {
      playerChoseLayout();
      compScissors();
}
    return player2;
  } else {
    console.log(
      player1.name +
        " and " +
        player2.name +
        " tied by both playing " +
        hand2 +
        "."
    );
    tiedRound();
    document.querySelector("#chooseHandDirections").style.display = "none";
    document.querySelector("#computerChose");
    document.querySelector("#youChose").style.display = "none";
    document.querySelector("#handTie").style.display = "flex";
    return null;
  }
}

document.getElementById("playerScore").innerHTML = player1WinCount;
document.getElementById("computerScore").innerHTML = player2WinCount;

function playGame(player1, player2) {
  let winner = playRound(player1, player2);
  document.getElementById("playerScore").innerHTML = player1WinCount;
  document.getElementById("computerScore").innerHTML = player2WinCount;
    if (winner === player1 && player1WinCount < 5 && player2WinCount < 5) {
      wonRound();
      document.getElementById("playerScore").innerHTML = player1WinCount;
      player1WinCount++;
      console.log(player1.name + "'s Score:" + player1WinCount);
      console.log(player2.name + "'s Score:" + player2WinCount);
    } else if (winner === player2 && player1WinCount < 5 && player2WinCount < 5) {
      lostRound();
      document.getElementById("computerScore").innerHTML = player2WinCount;
      player2WinCount++;
      console.log(player1.name + "'s Score:" + player1WinCount);
      console.log(player2.name + "'s Score:" + player2WinCount);
    }
  document.getElementById("playerScore").innerHTML = player1WinCount;
  document.getElementById("computerScore").innerHTML = player2WinCount;
}

newRoundButton.addEventListener("click", function () {
  if (player1WinCount === 5) {
    displayNone(".directionsArea", "#newRoundButton", "#chooseHandDirections", "#youChose", "#computerChose", "#handTie", "#wonRound", "#lostRound", "#tiedRound")
    document.querySelector("#youWin").style.display = "block";
    document.querySelector("#compPlayButton").style.display = "block";
    document.querySelector("#knightThumbsUp").style.display = "flex";
    // document.querySelector(".directionsArea").style.display = "none";
    // document.querySelector("#newRoundButton").style.display = "none";
    // document.querySelector("#chooseHandDirections").style.display = "none";
    // document.querySelector("#youChose").style.display = "none";
    // document.querySelector("#computerChose").style.display = "none";
    // document.querySelector("#handTie").style.display = "none";
    // document.querySelector("#wonRound").style.display = "none";
    // document.querySelector("#lostRound").style.display = "none";
    // document.querySelector("#tiedRound").style.display = "none";
    compHandsHidden();
    playerHandsHidden();
    resultHandsHidden()
    player1WinCount = 0
    player2WinCount = 0
    document.getElementById("playerScore").innerHTML = player1WinCount;
    document.getElementById("computerScore").innerHTML = player2WinCount;
  } else if (player2WinCount === 5) {
    displayNone(".directionsArea", "#newRoundButton", "#chooseHandDirections", "#youChose", "#computerChose", "#handTie", "#wonRound", "#lostRound", "#tiedRound")
    document.querySelector("#youLose").style.display = "block";
    document.querySelector("#compPlayButton").style.display = "block";
    document.querySelector("#sadStitch").style.display = "flex";
    // document.querySelector(".directionsArea").style.display = "none";
    // document.querySelector("#newRoundButton").style.display = "none";
    // document.querySelector("#chooseHandDirections").style.display = "none";
    // document.querySelector("#youChose").style.display = "none";
    // document.querySelector("#computerChose").style.display = "none";
    // document.querySelector("#handTie").style.display = "none";
    // document.querySelector("#wonRound").style.display = "none";
    // document.querySelector("#lostRound").style.display = "none";
    // document.querySelector("#tiedRound").style.display = "none";
    compHandsHidden();
    playerHandsHidden();
    resultHandsHidden()
    player1WinCount = 0
    player2WinCount = 0
    document.getElementById("playerScore").innerHTML = player1WinCount;
    document.getElementById("computerScore").innerHTML = player2WinCount;
  } else {
  resetRoundLayout();
  }
});
