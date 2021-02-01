import React, { FormEvent, useState } from "react";
import styles from "./App.module.css";
import { calculateDifferenceDivisibleBy3Count } from "./calculateDifferenceDivisibleBy3Count";

function App() {
  const [firstNumber, setFirstNumber] = useState<string>("1");
  const [secondNumber, setSecondNumber] = useState<string>("9");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const divisibleBy3Count = calculateDifferenceDivisibleBy3Count(
      Number(firstNumber),
      Number(secondNumber)
    );

    alert(divisibleBy3Count);
  }

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p>Hi, please pass two integers.</p>
        <input
          className="mb-1"
          step="1"
          type="number"
          name="first"
          value={firstNumber}
          onChange={(event) => setFirstNumber(event.currentTarget.value)}
        />
        <input
          className="mb-1"
          step="1"
          type="number"
          name="second"
          value={secondNumber}
          onChange={(event) => setSecondNumber(event.currentTarget.value)}
        />
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default App;
