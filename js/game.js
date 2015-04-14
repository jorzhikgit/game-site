(function() {
  var app = angular.module('game', []);

  app.controller('BoardController', function() {
    this.gameBoard = gameBoard;

    // toggle the state of a tile
    this.trigger = function(row, column) {
      this.gameBoard[0][row][column].isTriggered = !this.gameBoard[row][column].isTriggered;
    };
    
  });

  // fake data for now
  var gameBoard = [
    [
      {text: "A", isTriggered: false},
      {text: "B", isTriggered: false},
      {text: "C", isTriggered: false},
      {text: "D", isTriggered: false},
      {text: "E", isTriggered: false}
    ],
    [
      {text: "F", isTriggered: false},
      {text: "G", isTriggered: false},
      {text: "H", isTriggered: false},
      {text: "I", isTriggered: false},
      {text: "J", isTriggered: false}
    ],
    [
      {text: "K", isTriggered: false},
      {text: "L", isTriggered: false},
      {text: "FREE", isTriggered: false},
      {text: "M", isTriggered: false},
      {text: "N", isTriggered: false}
    ],
    [
      {text: "O", isTriggered: false},
      {text: "P", isTriggered: false},
      {text: "Q", isTriggered: false},
      {text: "R", isTriggered: false},
      {text: "S", isTriggered: false}
    ],
    [
      {text: "T", isTriggered: false},
      {text: "U", isTriggered: false},
      {text: "V", isTriggered: false},
      {text: "W", isTriggered: false},
      {text: "X", isTriggered: false}
    ],
  ];
})();
