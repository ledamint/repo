export function calculateDifferenceDivisibleBy3Count(
  firstNumber: number,
  secondNumber: number
) {
  if (firstNumber > secondNumber) {
    throw new Error("secondNumber should be more than firstNumber");
  }

  let divisibleBy3Count = 0;

  const isFirstNumberDivisibleBy3 = firstNumber % 3 === 0;
  const isSecondNumberDivisibleBy3 = secondNumber % 3 === 0;

  if (isFirstNumberDivisibleBy3) {
    divisibleBy3Count += 1;
  }

  if (isSecondNumberDivisibleBy3) {
    divisibleBy3Count += 1;
  }

  if (isFirstNumberDivisibleBy3 && isSecondNumberDivisibleBy3) {
    divisibleBy3Count -= 1;
  }

  divisibleBy3Count += Math.floor((secondNumber - firstNumber) / 3);

  return divisibleBy3Count;
}
