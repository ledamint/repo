import { calculateDifferenceDivisibleBy3Count } from "./calculateDifferenceDivisibleBy3Count";

describe("calculateDifferenceDivisibleBy3Count", () => {
  it("should return error if firstNumber should be more than secondNumber", () => {
    expect(calculateDifferenceDivisibleBy3Count(2, 1)).toEqual(
      "secondNumber should be more than firstNumber"
    );
  });

  it("should return 0 if difference is 0 and arguments are not divisible by 3", () => {
    expect(calculateDifferenceDivisibleBy3Count(1, 1)).toEqual(0);
    expect(calculateDifferenceDivisibleBy3Count(4, 4)).toEqual(0);
    expect(calculateDifferenceDivisibleBy3Count(7, 7)).toEqual(0);
    expect(calculateDifferenceDivisibleBy3Count(-1, -1)).toEqual(0);
  });

  it("should return 1 if difference is 0 and arguments are divisible by 3", () => {
    expect(calculateDifferenceDivisibleBy3Count(3, 3)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(6, 6)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(0, 0)).toEqual(1);
  });

  it("should return 0 if difference is 1 and arguments are not divisible by 3", () => {
    expect(calculateDifferenceDivisibleBy3Count(1, 2)).toEqual(0);
    expect(calculateDifferenceDivisibleBy3Count(4, 5)).toEqual(0);
    expect(calculateDifferenceDivisibleBy3Count(7, 8)).toEqual(0);
    expect(calculateDifferenceDivisibleBy3Count(-8, -7)).toEqual(0);
  });

  it("should return 1 if difference is 2 and first argument is divisible by 3", () => {
    expect(calculateDifferenceDivisibleBy3Count(3, 5)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(6, 8)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(9, 11)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(-3, -1)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(0, 2)).toEqual(1);
  });

  it("should return 1 if difference is 2 and second argument is divisible by 3", () => {
    expect(calculateDifferenceDivisibleBy3Count(1, 3)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(4, 6)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(7, 9)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(-5, -3)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(-2, 0)).toEqual(1);
  });

  it("should return 1 if difference is 3 and arguments are not divisible by 3", () => {
    expect(calculateDifferenceDivisibleBy3Count(1, 4)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(2, 5)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(7, 10)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(-7, -4)).toEqual(1);
    expect(calculateDifferenceDivisibleBy3Count(-1, 2)).toEqual(1);
  });

  it("should return 2 if difference is 3 and arguments are divisible by 3", () => {
    expect(calculateDifferenceDivisibleBy3Count(3, 6)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(6, 9)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(9, 12)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(-6, -3)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(-3, 0)).toEqual(2);
  });

  it("should return 2 if difference is 4 and first argument is divisible by 3", () => {
    expect(calculateDifferenceDivisibleBy3Count(3, 7)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(6, 10)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(9, 13)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(-6, -2)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(0, 4)).toEqual(2);
  });

  it("should return 2 if difference is 4 and second argument is divisible by 3", () => {
    expect(calculateDifferenceDivisibleBy3Count(2, 6)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(5, 9)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(8, 12)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(-7, -3)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(-4, 0)).toEqual(2);
  });

  it("should return 2 if difference is 5 and first argument is divisible by 3", () => {
    expect(calculateDifferenceDivisibleBy3Count(3, 8)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(6, 11)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(9, 14)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(-6, -1)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(-3, 2)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(0, 5)).toEqual(2);
  });

  it("should return 2 if difference is 5 and second argument is divisible by 3", () => {
    expect(calculateDifferenceDivisibleBy3Count(1, 6)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(4, 9)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(7, 12)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(-8, -3)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(-2, 3)).toEqual(2);
    expect(calculateDifferenceDivisibleBy3Count(-5, 0)).toEqual(2);
  });

  it("should return 3 if difference is 6 and arguments are divisible by 3", () => {
    expect(calculateDifferenceDivisibleBy3Count(3, 9)).toEqual(3);
    expect(calculateDifferenceDivisibleBy3Count(6, 12)).toEqual(3);
    expect(calculateDifferenceDivisibleBy3Count(9, 15)).toEqual(3);
    expect(calculateDifferenceDivisibleBy3Count(-9, -3)).toEqual(3);
    expect(calculateDifferenceDivisibleBy3Count(-6, 0)).toEqual(3);
    expect(calculateDifferenceDivisibleBy3Count(0, 6)).toEqual(3);
    expect(calculateDifferenceDivisibleBy3Count(-3, 3)).toEqual(3);
  });
});
