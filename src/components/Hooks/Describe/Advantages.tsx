const AdvantagesOfHooks = () => {
  return (
    <>
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
            Hooks consolidate stateful logic so its all defined in a relevant
            hook and is therefore easier to test.
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
        17. Why Hooks were introduced? Hooks allow you to reuse stateful logic
        without changing your component hierarchy. Hooks let you split one
        component into smaller functions based on what pieces are related (such
        as setting up a subscription or fetching data). Hooks let you use more
        of React's features without classes. It removed the complexity of
        dealing with the this keyword inside class components.
      </div>
    </>
  );
};

export default AdvantagesOfHooks;
