import React from "react";
import img from "./images/useCallback.jpg";
import img2 from "./images/useCallbackWhy.jpg";
import img3 from "./images/useCallbackPurpose.jpg";
import img4 from "./images/useCallbackPurposeMain.jpg";

const UseCallback = () => {
  return (
    <div className="aboutHook">
      <h1>Use Callback Hook</h1>
      <li>Returns a memoized callback.</li>
      <img src={img} alt="use callback" className="img" width="40%" />
      <li>
        This is useful when passing callbacks to optimized child components that
        rely on reference equality to prevent unnecessary renders
      </li>
      <h3>Why Use Callback hook?</h3>
      <li>
        Let's write a function factory() that returns functions that sum
        numbers:
      </li>
      <img src={img2} alt="use callback why" className="img" />
      <li>
        sum1 and sum2 are functions that sum two numbers. They've been created
        by the factory() function. The functions sum1 and sum2 share the same
        code source but they are different function objects. Comparing them sum1
        === sum2 evaluates to false.
      </li>
      <li>
        NOTE: An object (including a function object) equals only to itself.
      </li>
      <li>
        Different function objects sharing the same code are often created
        inside React components:
      </li>
      <img src={img3} alt="use callback purpose" className="img" />
      <li>
        handleClick is a different function object on every rendering of
        MyComponent. Inline functions are cheap, the re-creation of functions on
        each rendering is not a problem.
      </li>
      <li>
        But in some cases you need to maintain a single function instance
        between renderings:
      </li>
      <ol>
        <li>
          A functional component wrapped inside React.memo() accepts a function
          object prop
        </li>
        <li>
          When the function object is a dependency to other hooks, e.g.
          useEffect(..., [callback])
        </li>
        <li>
          When the function has some internal state, e.g. when the function is
          debounced or throttled.
        </li>
      </ol>
      <li>
        That's when useCallback(callbackFun, deps) is helpful: given the same
        dependency values deps, the hook returns the same function instance
        between renderings (aka memoization):
      </li>
      <img src={img4} alt="use callback purpose main" className="img" />
    </div>
  );
};

export default UseCallback;
