from math import isclose


class CalculatorDivisionByZeroError(Exception):
    ...


class Calculator:
    def __init__(self, stack: float = 0) -> None:
        self.stack = stack

    def add(self, number: float) -> "Calculator":
        self.stack += number

        return self

    def sub(self, number: float) -> "Calculator":
        self.stack -= number

        return self

    def mul(self, number: float) -> "Calculator":
        self.stack *= number

        return self

    def div(self, number: float) -> "Calculator":
        if number == 0:
            raise CalculatorDivisionByZeroError

        self.stack /= number

        return self

    def __eq__(self, number: float) -> bool:
        return isclose(self.stack, number)
