import React from "react";
import img from "../../assets/UseReducer.jpg";

const UseReducer = () => {
  return (
    <div className="aboutHook">
      <h1>Use Reducer Hook</h1>
      <li>
        The useReducer hook is used for complex state manipulations and state
        transitions.
      </li>
      <li>
        It is used to store and update states, just like the useState Hook.
      </li>
      <li>
        It accepts a reducer function as its first parameter and the initial
        state as the second. It returns an array that holds the current state
        value and a dispatch function to which you can pass an action and later
        invoke it.
      </li>
      <img src={img} alt="use reducer" className="img" width="70%" />
      <h3>How is useReducer similar to a backend?</h3>
      <li>state is the database. It stores your data.</li>
      <li>
        dispatch is equivalent to the API endpoints being called to modify the
        database.
      </li>
      <li>
        You can choose which endpoint to call by specifying the type of the
        call. You can provide additional data with the payload property, which
        corresponds to the body of a POST request. Both type and payload are
        properties of an object which is given to the reducer. That object is
        called the action.
      </li>
      <li>
        reducer is a function that will handle the logic of how the state should
        be updated. It is the logic of the API. It's called when the backend
        receives an API call (a dispatch call), and handles how to update the
        database based on the endpoint and request content (the action).
      </li>
      <a
        href="https://www.youtube.com/watch?v=26ogBZXeBwc"
        target="_blank"
        rel="noreferrer"
      >
        Check out the video here&#128192;
      </a>
    </div>
  );
};

export default UseReducer;
