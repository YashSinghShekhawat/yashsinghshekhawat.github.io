document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("boxes").addEventListener("click", startGame);
  const winningTypes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
    [6, 4, 8],
  ];
  fillingState = ["", "", "", "", "", "", "", "", ""];
  let whoIsWinner = "";
  var currentPlayer = "X";
  function startGame(event) {
    secondPlayer();
    function secondPlayer() {
      if (event.target.innerHTML != "" || whoIsWinner != "") {
        return;
      }
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      event.target.innerHTML = currentPlayer;
    }
    let writtenValue = event.target.innerHTML;
    let writtenPosition = event.target.getAttribute("id");
    fillingState[writtenPosition] = writtenValue;
    Whowin();
  }

  function Whowin() {
    let writtenClicked = writtenclicked();
    if (writtenClicked > 4) {
      console.log("writtenClicked" + writtenClicked);
      winner();
    }
  }
  function writtenclicked() {
    let boxFilled = fillingState.filter((element) => {
      element.trim();
      return element != "";
    });
    console.log("boxFilled " + boxFilled);
    return boxFilled.length;
  }

  function winner() {
    console.log("winner method");
    for (i = 0; i < winningTypes.length - 1; i++) {
      let element = winningTypes[i];
      let a = fillingState[element[0]];
      let b = fillingState[element[1]];
      let c = fillingState[element[2]];
      console.log("pri9ntingabc");
      console.log("a:" + a + "b:" + b + "c:" + c);
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        winnerIs = b;
        document.getElementById("over").innerHTML = winnerIs + " has won the game";      
         break;
        }
    }
  }
});

