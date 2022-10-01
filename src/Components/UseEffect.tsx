import React from "react";

const UseEffect = () => {
  return (
    <div style={{ backgroundColor: "#00FFFF" }}>
      <li>
        useEffect() allows function components to have access to the lifecycle
        hooks.
      </li>{" "}
      <li>The call accepts a function as argument.</li>{" "}
      <li>It performs side effects in functional component.</li>{" "}
      <li>
        The function runs when the component is first rendered, and on every
        subsequent re-render/update.
      </li>{" "}
      <li>
        React first updates the DOM, then calls any function passed to
        useEffect().
      </li>{" "}
      <li>
        All without blocking the UI rendering even on blocking code, unlike the
        old componentDidMount and componentDidUpdate, which makes our apps feel
        faster.
      </li>
      <li>
        The useEffect Hook takes 2 arguments The first argument is a callback
        function that by default runs after every render. The second argument is
        an optional Dependency array that tells the Hook to only callback if
        there is a change in a target state. The Hook compares the previous and
        current state value of each dependency. If the two values don’t match,
        the Hook uses the first argument callback. Dependency arrays override
        the default callback behavior and ensure the Hook ignores everything
        else in the component scope.
      </li>
      <li>
        useEffect Hook lets you run additional code after React has already
        updated the DOM. Think of the useEffect Hook as a partial replacement
        for React lifecycle events. The useEffect Hook can replicate the
        behavior of componentDidMount, componentDidUpdate and
        componentWillUnmount methods. Ie. you can respond to changes in any
        component that contains the useEffect Hook.
      </li>
    </div>
  );
};

export default UseEffect;
