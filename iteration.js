function Iteration(cells, number) {
  this.cells = cells;
  this.evolutionNumber = number;

  this.displayIteration = function() {
    var iterationString = "";
    for (cell in this.cells) {
      iterationString += this.cells[cell].displayCell();
    }
    console.log(iterationString);
  }
}

module.exports = Iteration;