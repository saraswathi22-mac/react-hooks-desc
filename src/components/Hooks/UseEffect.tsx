import img from "../../assets/useEffect.png";
import { HookHeading, HookSubHeading } from "../common/Headings/Headings";

const UseEffect = () => {
  return (
    <div className="">
      <HookHeading title="Use Effect Hook" />
      <div className="text-2xl">
        <li>
          useEffect() allows functional components to have access to the
          lifecycle hooks.
        </li>
        <li>
          Think of the useEffect Hook as a partial replacement for React
          lifecycle events. The useEffect Hook can replicate the behavior of
          componentDidMount, componentDidUpdate and componentWillUnmount
          methods. Ie. you can respond to changes in any component that contains
          the useEffect Hook.
        </li>
        <li>It performs side effects in functional component.</li>
        <li>
          useEffect Hook lets you run additional code after React has already
          updated the DOM.
        </li>
        <li>
          The function runs when the component is first rendered, and on every
          subsequent re-render/update.
        </li>
        <li>
          The useEffect Hook takes 2 arguments. The first argument is a callback
          function that by default runs after every render. The second argument
          is an optional Dependency array that tells the Hook to only callback
          if there is a change in a target state. The Hook compares the previous
          and current state value of each dependency. If the two values don’t
          match, the Hook uses the first argument callback. Dependency arrays
          override the default callback behavior and ensure the Hook ignores
          everything else in the component scope.
        </li>
        <img src={img} alt="use effect" className="img m-3" width="60%" />
        <HookSubHeading title="Variation of UseEffect" />
        <li>
          useEffect without dependencies: it runs with first render and also run
          on any state changes.
        </li>
        <li>useEffect with empty array: it runs only on first render</li>
        <li>
          useEffect with variables: it runs on first render and runs with that
          variable change.
        </li>
        <HookSubHeading title="Use Cases" />
        <li>Add an event listener for a button.</li>
        <li>Data fetching from API when component mounts.</li>
        <li>Perform an action when state or prop changes.</li>
        <li>Clean up event listeners when the component unmounts.</li>
      </div>
    </div>
  );
};

export default UseEffect;
