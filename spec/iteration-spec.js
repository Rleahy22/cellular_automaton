var Iteration = require('../iteration');
var Cell = require('../cell');

var cells = [];

for (i = 0; i < 31; i++) {
  cell = new Cell(Math.floor(Math.random() * 2));
  cells.push(cell);
}

var newIteration = new Iteration(cells, 1);

describe("Iteration", function() {
  it("contains an array of cell objects", function() {
    expect(newIteration.cells[0].constructor.name).toBe("Cell");
  });

  it("has an evolutionNumber that tells which iteration it is", function() {
    expect(newIteration.evolutionNumber).toBe(1);
  })
})