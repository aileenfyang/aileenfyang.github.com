(function(){
  "use strict"
  const startGame = document.getElementById("startgame");
  const gameControl = document.getElementById("gamecontrol");
  const game = document.getElementById("game");
  const score = document.getElementById("score");
  const actionArea = document.getElementById("actions");
  const gameData = {
    dice: ["dice-01.png", "dice-02.png", "dice-03.png", "dice-04.png", "dice-05.png", "dice-06.png"],
    players: ["player 1", "player 2"],
    score: [0, 0],
    roll1: 0,
    roll2: 0,
    rollSum: 0,
    index: 0,
    gameEnd: 29
  }
  startGame.addEventListener("click", function() {
    gameData.index = Math.round(Math.random());
    gameControl.innerHTML = '<h2>The Game Has Started</h2>';
    gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

    document.getElementById('quit').addEventListener("click", function() {
      location.reload();
    });

    setUpTurn();
  });

  function setUpTurn() {
    game.innerHTML = `<div class = "centerme"><p>Roll the dice for the ${gameData.players[gameData.index]}</p></div>`;
    actionArea.innerHTML = '<div class = "centerme"><button id="roll">Roll the Dice</button></div>';
    document.getElementById('roll').addEventListener("click", function() {

      throwDice();

    });
    console.log("check to see if the player won!");
  }

  function throwDice() {
    actionArea.innerHTML = '';
    gameData.roll1 = Math.ceil(Math.random() * 6);
    gameData.roll2 = Math.ceil(Math.random() * 6);
    game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
    game.innerHTML += `<div class = "centerme"><img src="${gameData.dice[gameData.roll1-1]}">
                <img src="${gameData.dice[gameData.roll2-1]}"></div>`;
    gameData.rollSum = gameData.roll1 + gameData.roll2;

    // if two 1's are rolled...
    if (gameData.rollSum === 2) {
      game.innerHTML += `<p>Oh snap! Snake Eyes!</p>`;
      gameData.score[gameData.index] = 0;
      gameData.index ? gameData.index = 0 : gameData.index = 1;
      setTimeout(function() {
        setUpTurn();
      }, 2000);
      /******
      1. set a message
      2. set this player's score to 0
      3. swap the game index
      4. show the current score
      5. wait 2 seconds then run setUpTurn() again;
      *******/
    }
    else if(gameData.rollSum === 8){
      gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum + gameData.rollSum;
      actionArea.innerHTML = '<div class = "centerme"><button id="rollagain">Roll again</button> <button id="pass">Pass</button></div>';
      document.getElementById('rollagain').addEventListener("click", function() {
        throwDice();
      });

      document.getElementById('pass').addEventListener("click", function() {
        gameData.index ? gameData.index = 0 : gameData.index = 1;
        setUpTurn();
      });

      checkWinningCondition();
    }
    // if either die is a 1...
    else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
      gameData.index ? gameData.index = 0 : gameData.index = 1;
      game.innerHTML += `<p>sorry, one roll was a one, switching to ${gameData.players[gameData.index]}</p>`;
      setTimeout(function() {
        setUpTurn();
      }, 2000);
      /*
      1. set a message
      2. swap the index
      3. wait 2 seconds then run setUpTurn() again;
      */
    }
    // if neither die is a 1...
    else {
      gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
      actionArea.innerHTML = '<div class = "centerme"><button id="rollagain">Roll again</button>  <button id="pass">Pass</button></div>';

      document.getElementById('rollagain').addEventListener("click", function() {
        throwDice();
      });

      document.getElementById('pass').addEventListener("click", function() {
        gameData.index ? gameData.index = 0 : gameData.index = 1;
        setUpTurn();
      });

      checkWinningCondition();
      /*
      1. Update this user's score
      2. add buttons to roll or pass
      3. add click handlers for those two buttons
      4. Check to see if this user has passed the threshold for winning
      */
    }
  }

  function checkWinningCondition() {
    if (gameData.score[gameData.index] > gameData.gameEnd) {
      score.innerHTML = `<h2>${gameData.players[gameData.index]}
  wins with ${gameData.score[gameData.index]} points!</h2>`;

      actionArea.innerHTML = '';
      document.getElementById('quit').innerHTML = "Start a New Game?";
    } else {
      showCurrentScore();
    }
  }
}());
