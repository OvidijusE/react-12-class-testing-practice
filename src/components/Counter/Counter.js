import { useState } from 'react';
import css from './Counter.module.css';

function Counter({ title }) {
  const [counterValue, setCounterValue] = useState(0);
  const [hideLabel, setHideLabel] = useState(false);

  function handleCounterIncrement() {
    setCounterValue((prevState) => prevState + 1);
  }

  function handleCounterDecrement() {
    if (counterValue <= 0) {
      return;
    }
    setCounterValue((prevState) => prevState - 1);
  }

  function handleCounterReset() {
    setCounterValue(0);
  }

  function handleHideLabel() {
    return;
  }
  return (
    <div className={css.counter}>
      <h3 className={css.title}>{title}</h3>
      <h2 className={css.result}>{counterValue}</h2>
      <div className={css.control}>
        <button className={css.btn} onClick={handleCounterIncrement}>
          Add
        </button>
        <button className={css.btn} onClick={handleCounterDecrement}>
          Minus
        </button>
        <button className={css.btn} onClick={handleCounterReset}>
          Reset
        </button>
        <button className={css.btn} onClick={handleHideLabel}>
          HideLabel
        </button>
      </div>
    </div>
  );
}

export default Counter;
