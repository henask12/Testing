import Calculator from "./calculator.js";

describe("Calculator", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe("add", () => {
        test("should return the sum of two numbers", () => {
            const result = calculator.add(2, 3);
            expect(result).toBe(5);
        });
    });

    describe("subtract", () => {
        test("should return the difference of two numbers", () => {
            const result = calculator.subtract(5, 2);
            expect(result).toBe(3);
        });
    });

    describe("divide", () => {
        test("should return the quotient of two numbers", () => {
            const result = calculator.divide(10, 2);
            expect(result).toBe(5);
        });
    });

    describe("multiply", () => {
        test("should return the product of two numbers", () => {
            const result = calculator.multiply(4, 3);
            expect(result).toBe(12);
        });
    });
});
