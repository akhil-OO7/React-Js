import React, { useState } from "react";
import Counter from "./Counter";
import NavBar from "./NavBar";

const TotalCounter = () => {
  const [counters, setCounters] = useState([
    { id: 1, counts: 1 },
    { id: 2, counts: 2 },
    { id: 3, counts: 3 },
    { id: 4, counts: 4 },
  ]);
  const deleteCounter = (id) => {
    const lcounter = counters.filter((counter) => counter.id !== id);
    setCounters(lcounter);
  };

  const findActiveCounter = () => {
    let count = counters.filter((counter) => counter.counts > 0).length;
    return count;
  };

  const increment = (counter) => {
    const lcounters = [...counters];
    const index = lcounters.indexOf(counter);
    lcounters[index].counts++;
    setCounters(lcounters);
  };

  const decrement = (counter) => {
    const lcounters = [...counters];
    const index = lcounters.indexOf(counter);
    if (lcounters[index].counts > 0) lcounters[index].counts--;
    setCounters(lcounters);
  };

  const resetAll = () => {
    setCounters(
      counters.map((counter) => {
        counter.counts = 0;
        return counter;
      })
    );
  };

  return (
    <div className="m-3">
      <NavBar accounter={findActiveCounter()} />
      <button className="btn btn-success" onClick={resetAll}>
        Reset All
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={increment}
          onDecrement={decrement}
          onDelete={deleteCounter}
        />
      ))}
    </div>
  );
};

export default TotalCounter;
