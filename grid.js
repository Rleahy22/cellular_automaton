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

  this.iterations = [initialIteration];
  this.numberIterations = 1;

  this.evolve = function() {
    var cells = [];
    var lastIteration = this.iterations[this.iterations.length - 1];
    for (var i = 0; i < lastIteration.length; i++) {
      var newState = lastIteration[i].nextIterationState();
      var cell = new Cell(newState)
      cells.push(cell);
    }
    this.iterations.push(new Iteration(cells, this.numberIterations + 1));
    this.numberIterations++
  }
}

module.exports = Grid;