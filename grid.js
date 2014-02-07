var Cell = require('./cell');
var Iteration = require('./iteration');

function Grid() {
  var cells = [];
  
  for (var i = 0; i < 31; i++) {
    if (i == 15) {
      cells.push(new Cell(1));
    } else {
      cells.push(new Cell(0));
    }
  }

  var initialIteration = new Iteration(cells, 1);

  var that = this;

  this.iterations = [initialIteration];
  this.numberIterations = 1;

  this.evolve = function() {
    var newCells = [];
    var lastIteration = that.iterations[that.iterations.length - 1];
    for (var i = 0; i < lastIteration.cells.length; i++) {
      var leftCell = lastIteration.cells[i - 1];
      var rightCell = lastIteration.cells[i + 1];
      var newState = lastIteration.cells[i].nextIterationState(leftCell, rightCell);
      var cell = new Cell(newState);
      newCells.push(cell);
    }
    that.iterations.push(new Iteration(newCells, that.numberIterations + 1));
    that.numberIterations++
    that.displayLastIteration();
  }

  this.displayLastIteration = function() {
    this.iterations[this.iterations.length - 1].displayIteration();
  }

  this.startEvolving = function() {
    this.evolveInterval = setInterval(this.evolve, 1500);
  }

  this.stopEvolving = function() {
    clearInterval(this.evolveInterval);
  }

  this.displayLastIteration();
}

module.exports = Grid;