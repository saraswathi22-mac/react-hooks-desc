import img from "../../assets/useCallback.jpg";
import img2 from "../../assets/useCallbackPurpose.jpg";
import img3 from "../../assets/useCallbackPurposeMain.jpg";
import { HookHeading, HookSubHeading } from "../common/Headings/Headings";

const UseCallback = () => {
  return (
    <div>
      <HookHeading title="Use Callback Hook" />
      <div className="text-2xl">
        <li>
          useCallback(callback, dependencies) returns a memoized
          callback(function) that only changes if one of the dependencies has
          changed.
        </li>
        <img src={img} alt="use callback" className="img m-3" width="40%" />

        <li>
          Different function objects sharing the same code are often created
          inside React components
        </li>
        <img
          src={img2}
          alt="use callback purpose"
          className="img m-3"
          width="40%"
        />
        <li>
          useCallback() will store the function definition with the same
          reference to the object in memory.{" "}
        </li>
        <img
          src={img3}
          alt="use callback purpose main"
          className="img m-3"
          width="40%"
        />
        <li>
          When a Parent component passes a callback function as props to its
          child, it can be used to prevent the child from re-rendering.
        </li>

        <HookSubHeading title="Use Cases" />
        <li>
          passing callbacks to optimized child components that rely on reference
          equality to prevent unnecessary renders
        </li>
        <li>
          given the same dependency values deps, the hook returns the same
          function instance between renderings (aka memoization)
        </li>
      </div>
    </div>
  );
};

export default UseCallback;
