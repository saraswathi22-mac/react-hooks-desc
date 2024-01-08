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
          Hooks let you split one component into smaller functions based on what
          pieces are related (such as setting up a subscription or fetching
          data).
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
    </>
  );
};

export default AdvantagesOfHooks;
