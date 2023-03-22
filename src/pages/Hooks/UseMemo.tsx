import img from "../../assets/useMemo.jpg";
import img2 from "../../assets/useMemoDependencies.jpg";

const UseMemo = () => {
  return (
    <div className="m-10 sm:m-20">
      <h1 className="heading">Use Memo Hook</h1>
      <div className="text-2xl">
        <li>Returns a memoized value.</li>
        <li>
          The useMemo Hook can be used to keep expensive, resource intensive
          functions from needlessly running.
        </li>
        <li>
          useMemo() is a built-in React hook that accepts 2 arguments — a
          function compute that computes a result and the dependencies array:
        </li>
        <img src={img} alt="use memo" className="img" width="60%" />
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
        <li>
          If your computation callback uses props or state values, then be sure
          to indicate these values as dependencies:
        </li>

        <img
          src={img2}
          alt="use memo dependencies"
          className="img"
          width="60%"
        />
        <li>
          useMemo(() ={">"} computation(a, b), [a, b]) is the hook that lets you
          memoize expensive computations. Given the same [a, b] dependencies,
          once memoized, the hook is going to return the memoized value without
          invoking computation(a, b)
        </li>
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
