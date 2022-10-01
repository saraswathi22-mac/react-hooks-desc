import React from "react";

const UseRef = () => {
  return (
    <div className="aboutHook">
      <h1>Use Ref Hook</h1>
      <li>
        The useRef hook is a built-in React hook that is used to directly access
        DOM nodes and persist a mutable value across re-renders of a component.
      </li>
      <li>
        The useRef hook is a function that accepts a maximum of one argument as
        the initial value and returns an object.
      </li>
      <li>The returned object has a special property called current.</li>
      <li>
        useRef also never rerenders, which can help keep track of the total
        keystrokes of a user or the total amount of times a button is clicked.
      </li>
      <li>
        To pass a ref to a child or parent component forwardRef is needed, as
        ref instances don’t function the same as regular props.
      </li>
    </div>
  );
};

export default UseRef;
