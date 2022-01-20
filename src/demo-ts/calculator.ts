export class CalculatorDivisionByZeroError extends Error {}

export class Calculator {
  constructor(public readonly stack: number) {}

  add(value: number): Calculator {
    return new Calculator(this.stack + value);
  }

  sub(value: number): Calculator {
    return new Calculator(this.stack - value);
  }

  mul(value: number): Calculator {
    return new Calculator(this.stack * value);
  }

  div(value: number): Calculator {
    if (value === 0) {
      throw new CalculatorDivisionByZeroError();
    }

    return new Calculator(this.stack / value);
  }
}

export default Calculator;
