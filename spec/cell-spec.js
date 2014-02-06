var Cell = require('../cell');
var newCell = new Cell(0);

var leftCell = {};
var middleCell = {};
var rightCell = {};

function createCellNeighbors(left, middle, right) {
  leftCell = new Cell(left);
  middleCell = new Cell(middle);
  rightCell = new Cell(right);
}

describe("Cell", function() {
  it("has an initial state of 1 or 0", function() {
    expect(newCell.state).toBe(0);
  });

  describe("updateState()", function() {
    it("updates the state of a cell", function() {
      newCell.updateState(1);
      expect(newCell.state).toBe(1);
    });
  });

  describe("nextIterationState()", function() {
    describe("When cell state is 0, left is 0, and right is 0", function() {
      it("should return 0", function() {
        createCellNeighbors(0, 0, 0);
        expect(middleCell.nextIterationState(leftCell, rightCell)).toBe(0);
      });
    });

    describe("When cell state is 0, left is 0, and right is 1", function() {
      it("should return 1", function() {
        createCellNeighbors(0, 0, 1);
        expect(middleCell.nextIterationState(leftCell, rightCell)).toBe(1);
      });
    });

    describe("When cell state is 0, left is 1, and right is 1", function() {
      it("should return 0", function() {
        createCellNeighbors(1, 0, 1);
        expect(middleCell.nextIterationState(leftCell, rightCell)).toBe(0);
      });
    });

    describe("When cell state is 0, left is 1, and right is 0", function() {
      it("should return 1", function() {
        createCellNeighbors(1, 0, 0);
        expect(middleCell.nextIterationState(leftCell, rightCell)).toBe(1);
      });
    });

    describe("When cell state is 1, left is 0, and right is 0", function() {
      it("should return 1", function() {
        createCellNeighbors(0, 1, 0);
        expect(middleCell.nextIterationState(leftCell, rightCell)).toBe(1);
      });
    });

    describe("When cell state is 1, left is 0, and right is 1", function() {
      it("should return 1", function() {
        createCellNeighbors(0, 1, 1);
        expect(middleCell.nextIterationState(leftCell, rightCell)).toBe(1);
      });
    });

    describe("When cell state is 1, left is 1, and right is 1", function() {
      it("should return 0", function() {
        createCellNeighbors(1, 1, 1);
        expect(middleCell.nextIterationState(leftCell, rightCell)).toBe(0);
      });
    });

    describe("When cell state is 1, left is 1, and right is 0", function() {
      it("should return 0", function() {
        createCellNeighbors(1, 1, 0);
        expect(middleCell.nextIterationState(leftCell, rightCell)).toBe(0);
      });
    });

    describe("When cell does not have neighbors on both sides", function() {
      it("should return its current state", function() {
        newCell.updateState(1)
        expect(newCell.nextIterationState(newCell, undefined)).toBe(newCell.state);
        newCell.updateState(0);
        expect(newCell.nextIterationState(undefined, newCell)).toBe(newCell.state);
      });
    });
  });

  describe("displayCell", function() {
    describe("when the cell state is 0", function() {
      it("should return '-'", function() {
        newCell.updateState(0);
        expect(newCell.displayCell()).toBe('-');
      });
    });

    describe("when the cell state is 1", function() {
      it("should log '+' to the console", function() {
        newCell.updateState(1);
        expect(newCell.displayCell()).toBe('+');
      });
    });
  });
});