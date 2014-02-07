function Cell(state) {
  if (state === 0 || state === 1) {
    this.state = state;
  } else {
    throw new Error("Cell must either have a state of 1 or 0");
  }

  this.updateState = function(newState) {
    if (newState === 0 || newState === 1) {
      this.state = newState;
    } else {
      throw new Error("Cell must either have a state of 1 or 0")
    }
  }

  this.nextIterationState = function(leftCell, rightCell) {
    if (typeof leftCell === 'undefined' || typeof rightCell === 'undefined') {
      return this.state;
    }
    if (this.state) {
      if (leftCell.state) {
        return 0;
      } else {
        return 1;
      }
    } else {
      if (leftCell.state) {
        if (rightCell.state) {
          return 0;
        } else {
          return 1;
        }
      } else {
        if (rightCell.state) {
          return 1;
        } else {
          return 0;
        }
      }
    }
  }

  this.displayCell = function() {
    if (this.state) {
      return '+';
    } else {
      return '-';
    }
  }
};

module.exports = Cell