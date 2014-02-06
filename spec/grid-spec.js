var Grid = require('../grid');

var newGrid = new Grid();

describe("Grid", function() {
  it("should contain a collection of iterations", function() {
    expect(newGrid.iterations[0].constructor.name).toBe("Iteration")  
  })

  it("should know the number of iterations it contains originally", function() {
    expect(newGrid.numberIterations).toBe(1);
  })

  it("should know the number of iterations it contains after evolving", function() {
    var dupGrid = new Grid();
    dupGrid.evolve();
    expect(dupGrid.numberIterations).toBe(2);
  })

  describe("evolve", function() {
    it("should produce a new iteration based on rule 30", function() {
      newGrid.evolve();
      expect(newGrid.iterations[1].constructor.name).toBe("Iteration");
      expect(newGrid.iterations[1]).not.toEqual(newGrid.iterations[0]);
    })
  })
})