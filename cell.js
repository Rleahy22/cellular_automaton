function Cell(state) {
  this.state = state;

  this.updateState = function(newState) {
    this.state = newState;
  }
};

module.exports = Cell