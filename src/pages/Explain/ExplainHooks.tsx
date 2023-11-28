import AccordionApp from "../../components/Accordion/AccordionApp";
import Button from "../../components/Button/Button";

const ExplainHooks = () => {
  return (
    <>
      <AccordionApp />
      <div className="m-10 sm:m-20">
        <div className="text-5xl font-bold text-center font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">
          React Hooks
        </div>
        <h1 className="text-4xl font-bold text-center mt-10 text-violet-700">
          What are Hooks?
        </h1>
        <div className="mt-7 text-2xl">
          <li>
            React Hook are functions that let us hook into the React state and
            lifecycle features from functional components.
          </li>
          <li>
            Hooks allow React developers to make functional components stateful
            and avoid Class Components.
          </li>
          <li>React Hook is a recent addition to the library in React 16.8.</li>
          <div className="text-3xl font-bold mt-5 text-green-900">
            Advantages of React Hook
          </div>
          <div>
            <li>
              Better Code composition:{" "}
              <span>
                Hooks allow life cycle methods to be written in a linear, render
                flowing order rather than splitting them among relevant class
                components.
              </span>
            </li>
            <li>
              Reuse states and components:{" "}
              <span>
                Hooks make it easier to share stateful logic between different
                components.
              </span>
            </li>
            <li>
              Better Testing:{" "}
              <span>
                Hooks consolidate stateful logic so its all defined in a
                relevant hook and is therefore easier to test.
              </span>
            </li>
            <li>
              Performance:{" "}
              <span>
                When optimized, React Hooks are the fastest form of functional
                components.
              </span>
            </li>
          </div>
          <div>
            17. Why Hooks were introduced? Hooks allow you to reuse stateful
            logic without changing your component hierarchy. Hooks let you split
            one component into smaller functions based on what pieces are
            related (such as setting up a subscription or fetching data). Hooks
            let you use more of React's features without classes. It removed the
            complexity of dealing with the this keyword inside class components.
          </div>
          <div className="text-3xl font-bold mt-5 text-green-900">
            Rules to be followed
          </div>
          <div>
            <li>
              Hooks can only be defined on the top level of the functional
              component. Do not define them inside any loop, condition, or
              nested function.
            </li>
            <li>
              Only call hooks from the react functional component, not in any
              regular javascript function.
            </li>
          </div>
        </div>
        <Button />
      </div>
    </>
  );
};

export default ExplainHooks;
