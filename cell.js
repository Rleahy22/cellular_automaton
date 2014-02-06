function Cell(state) {
  this.state = state;

  this.updateState = function(newState) {
    this.state = newState;
  }

  this.nextIterationState = function(leftCell, rightCell) {
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