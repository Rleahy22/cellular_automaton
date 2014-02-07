var Grid = require('../grid');

var newGrid = new Grid();

describe("Grid", function() {
  it("should contain a collection of iterations", function() {
    expect(newGrid.iterations[0].constructor.name).toBe("Iteration")  
  });

  it("should know the number of iterations it contains originally", function() {
    expect(newGrid.numberIterations).toBe(1);
  });

  it("should print the initial interation upon instantiation", function() {
    spyOn(console, "log");
    var fakeGrid = new Grid();
    expect(console.log).toHaveBeenCalledWith("---------------+---------------");
  });

  it("should know the number of iterations it contains after evolving", function() {
    var dupGrid = new Grid();
    dupGrid.evolve();
    expect(dupGrid.numberIterations).toBe(2);
  });

  describe("displayLastIteration", function() {
    it("should log the last iteration to the console", function() {
      spyOn(console, "log");
      newGrid.evolve();
      expect(console.log).toHaveBeenCalledWith("--------------+++--------------")
    })
  })

  describe("evolve", function() {
    it("should produce a new iteration based on rule 30", function() {
      newGrid.evolve();
      expect(newGrid.iterations[1].constructor.name).toBe("Iteration");
      expect(newGrid.iterations[1]).not.toEqual(newGrid.iterations[0]);
    });

    it("should log the new iteration to the console", function() {
      spyOn(console, "log");
      newGrid.evolve();
      expect(console.log).toHaveBeenCalledWith("------------++-++++------------")
    });
  });
});