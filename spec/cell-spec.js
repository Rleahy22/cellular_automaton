var Cell = require('../cell');
var newCell = new Cell(0);

describe("Cell", function() {
  it("has an initial state of 1 or 0", function() {
    expect(newCell.state).toBe(0);
  });
});

describe("updateState", function() {
  it("updates the state of a cell", function() {
    newCell.updateState(1);
    expect(newCell.state).toBe(1);
  });
});
