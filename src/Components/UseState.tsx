import React from "react";

const UseState = () => {
  return (
    <div style={{backgroundColor: '#00FFFF'}}>
      <li>The useState hook allows us to use state in our functional components.</li> <li>A
      useState hook takes the initial value of our state as the only argument,
      and it returns an array of two elements.</li> <li>The first element is our state
      variable and the second element is a function in which we can use and
      update the value of the state variable.</li> <li>You can add as many useState()
      calls, to create as many state variables as you want.</li> <li>Just make sure you
      call it at the top level of a component.</li>
    </div>
  );
};

export default UseState;
