var Calculator = require("../../public/js/calculator.js");
var assert = require("assert");

describe("calculator", function () {
  beforeEach(function () {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it("it has a sample test", function () {
    assert.equal(true, true);
  });

  it("should add two values together", function () {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal);
  });

  it("should subtract one value from another", function () {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  });

  it("should multiply one value with another", function () {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
  });

  it("should divide one value from another", function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  });
});
