const RulesOfHooks = () => {
  return (
    <div>
      <li>
        Hooks can only be defined on the top level of the functional component.
        Do not define them inside any loop, condition, or nested function.
      </li>
      <li>
        Only call hooks from the react functional component, not in any regular
        javascript function.
      </li>
      <li>Memoize functions and objects when needed to improve performance.</li>
    </div>
  );
};

export default RulesOfHooks;
