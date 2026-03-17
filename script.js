function getComputerChoice() {
  let number = Math.random();
  let choice = "";
  if (number <= 1 / 3) {
    choice = "rock";
  } else if (number <= 2 / 3 && number > 1 / 3) {
    choice = "paper";
  } else if (number <= 1 && number > 2 / 3) {
    choice = "scissors";
  }
  //   console.log(number * 100);
  return choice;
}

function getHumanChoice() {
  let choice = "";
  do {
    choice = prompt(
      "Please input one of the following choices: 'rock', 'paper', and 'scissors'",
    ).toLowerCase();
  } while (!["rock", "paper", "scissors"].includes(choice));
  return choice;
}

function playGame() {
  let humanScore = 0,
    computerScore = 0;
  let humanChoice = "",
    computerChoice = "";
  for (let i = 0; i < 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
      console.log(
        "Tie! No players get a point! An extra round will be played to compensate.",
      );
      i--;
      continue;
    } else if (humanChoice === "rock") {
      switch (computerChoice) {
        case "paper":
          console.log("Computer wins!");
          computerScore++;
          break;
        case "scissors":
          console.log("Human wins!");
          humanScore++;
          break;
        default:
          console.log("unknown");
      }
    } else if (humanChoice === "paper") {
      switch (computerChoice) {
        case "scissors":
          console.log("Computer wins!");
          computerScore++;
          break;
        case "rock":
          console.log("Human wins!");
          humanScore++;
          break;
        default:
          console.log("unknown");
      }
    } else if (humanChoice === "scissors") {
      switch (computerChoice) {
        case "rock":
          console.log("Computer wins!");
          computerScore++;
          break;
        case "paper":
          console.log("Human wins!");
          humanScore++;
          break;
        default:
          console.log("unknown");
      }
    }
  }
  if (humanScore > computerScore) {
    console.log("human wins!!!");
  } else if (computerScore > humanScore) {
    console.log("computer wins!!!");
  } else {
    console.log("tie!!!");
  }
}

playGame();
