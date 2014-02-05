var Cell = require('../cell');

describe("Cell", function() {
  it("has an initial state of 1 or 0", function() {
    var newCell = new Cell(0);
    expect(newCell.state).toBe(0);
  })
})