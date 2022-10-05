import React from "react";
import img from "./images/useRef.jpg";

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
      <img src={img} alt="use ref" className="img" />
      <li>
        We use the useRef hook to store the values without triggering the
        re-render of the component.
      </li>
      <h3>What Did I Use the useRef Hook for?</h3>
      <li>Handling Form Inputs and Accessing DOM Nodes/Elements</li>
      <p>
        Using useRef, we will implement DOM accessing, form input handling, and
        persisting values across the component re-renders in a single
        application.
      </p>
      <a
        href="https://stackblitz.com/edit/react-6r9dfh?file=src%2FApp.js"
        target="_blank"
        rel="noreferrer"
      >
        Click me for Code Example &#9997;
      </a>
      <li>Storing Previous State/Value</li>
      <p>
        The useRef hook persists values ​​between re-renders. With the help of
        the useEffect, the state can be stored in a reference before the value
        changes. This previous value becomes available in the next render via
        ref.
      </p>
      <a
        href="https://stackblitz.com/edit/react-mypnev?file=src%2FApp.js"
        target="_blank"
        rel="noreferrer"
      >
        Click me for Code Example &#9997;
      </a>
      <li>Timer</li>
      <p>The useRef is used to store the active timer id.</p>
      <a
        href="https://stackblitz.com/edit/react-einhge?file=src%2FApp.js"
        target="_blank"
        rel="noreferrer"
      >
        Click me for Code Example &#9997;
      </a>
      <li>
        To pass a ref to a child or parent component forwardRef is needed, as
        ref instances don’t function the same as regular props.
      </li>
    </div>
  );
};

export default UseRef;
