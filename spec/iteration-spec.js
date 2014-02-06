var Iteration = require('../iteration');
var Cell = require('../cell');

var randomCells = [];

for (i = 0; i < 31; i++) {
  cell = new Cell(Math.floor(Math.random() * 2));
  randomCells.push(cell);
}

var newIteration = new Iteration(randomCells, 1);

var standardCells = [];

for (i = 0; i < 31; i++) {
  if (i === 15) {
    var cell = new Cell(1);
  } else {
    var cell = new Cell(0);
  }
  standardCells.push(cell)
}

var standardIteration = new Iteration(standardCells, 2)

describe("Iteration", function() {
  it("contains an array of cell objects", function() {
    expect(newIteration.cells[0].constructor.name).toBe("Cell");
  });

  it("has an evolutionNumber that tells which iteration it is", function() {
    expect(newIteration.evolutionNumber).toBe(1);
  });

  describe("displayIteration", function() {
    it("displays all of the cells in the iteration", function() {
      spyOn(console, "log");
      standardIteration.displayIteration();
      expect(console.log).toHaveBeenCalledWith("---------------+---------------")
    })
  })
})