import React, { useState } from "react";

const Counter = (WrappedComponent) => {
  function Counter(props) {
    const [count, setCount] = useState(0);

    const increase = () => {
      setCount(count + 1);
    };
    return (
      <div>
        <WrappedComponent count={count} increase={increase} />
      </div>
    );
  }
  return Counter;
};

export default Counter;
