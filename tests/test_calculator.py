import pytest
from demo.calculator import Calculator, CalculatorDivisionByZeroError


class TestCalculator:
    def test_sum(self):
        calculator = Calculator(2).add(3)

        assert calculator == 5

    def test_sub(self):
        calculator = Calculator(2).sub(3)

        assert calculator == -1

    def test_mul(self):
        calculator = Calculator(2).mul(3)

        assert calculator == 6

    def test_div(self):
        calculator = Calculator(2).div(3)

        assert calculator == 0.666666666

    def test_div(self):
        with pytest.raises(CalculatorDivisionByZeroError):
            Calculator(2).div(0)
