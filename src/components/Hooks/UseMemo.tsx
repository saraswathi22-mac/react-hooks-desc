import img from "../../assets/useMemo.jpg";
import { HookHeading, HookSubHeading } from "../common/Headings/Headings";

const UseMemo = () => {
  return (
    <div>
      <HookHeading title="Use Memo Hook" />
      <div className="text-2xl">
        <li>Returns a memoized value.</li>
        <li>
          The useMemo Hook can be used to keep expensive, resource intensive
          functions from needlessly running.
        </li>
        <li>
          It accepts 2 arguments — a function that computes a result and the
          dependency array:
        </li>
        <img src={img} alt="use memo" className="img m-3" width="60%" />
        <li>
          During initial rendering, useMemo(compute, dependencies) invokes
          compute, memoizes the calculation result, and returns it to the
          component.
        </li>
        <li>
          If during next renderings the dependencies don't change, then
          useMemo() doesn't invoke compute but returns the memoized value.
        </li>
        <li>
          But if dependencies change during re-rendering, then useMemo() invokes
          compute, memoizes the new value, and returns it.
        </li>
        <HookSubHeading title="Reference" />
        <a
          href="https://www.youtube.com/watch?v=oR8gUi1LfWY&list=PL0Zuz27SZ-6PSdiQpSxO9zxvB0ns6m3ta&index=2"
          target="_blank"
          rel="noreferrer"
        >
          Check out the video here&#128192;
        </a>
      </div>
    </div>
  );
};

export default UseMemo;
