import {
  Calculator,
  CalculatorDivisionByZeroError,
} from "../src/demo-ts/calculator";

test("add", () => {
  const result = new Calculator(2).add(3).stack;

  expect(result).toBe(5);
});

test("sub", () => {
  const result = new Calculator(2).sub(3).stack;

  expect(result).toBe(-1);
});

test("mul", () => {
  const result = new Calculator(2).mul(3).stack;

  expect(result).toBe(6);
});

test("div", () => {
  const result = new Calculator(2).div(3).stack;

  expect(result).toBeCloseTo(2);
});

test("div", () => {
  expect(() => new Calculator(2).div(0).stack).toThrow(
    CalculatorDivisionByZeroError
  );
});

test("mod", () => {
  const result = new Calculator(2).div(3).stack;

  expect(result).toBe(2);
});
