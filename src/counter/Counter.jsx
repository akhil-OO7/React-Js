import React from "react";

const Counter = (props) => {
  const { counts, id } = props.counter;
  // const [count, setCount] = useState(counts);
  // const increment = () => {
  //   let lcount = count;
  //   setCount(lcount + 1);
  // };
  const changeColor = () => {
    let check =
      counts === 0 ? "btn btn-danger mx-2 col-1" : "btn btn-warning mx-2 col-1";
    return check;
  };
  return (
    <div className="my-3 row d-flex justify-content-center align-items-center">
      <button
        className="btn btn-primary col-2"
        onClick={() => props.onDecrement(props.counter)}
      >
        Decrement
      </button>
      <span className={changeColor()}>{counts > 0 ? counts : "zero"}</span>
      <button
        className="btn btn-primary col-2"
        onClick={() => props.onIncrement(props.counter)}
      >
        Increment
      </button>
      <button
        class="btn btn-danger mx-2 col-1"
        onClick={() => props.onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
