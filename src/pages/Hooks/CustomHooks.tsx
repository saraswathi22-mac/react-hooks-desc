import img from "../../assets/CustomHooks.png";

const CustomHooks = () => {
  return (
    <div className="m-10 sm:m-20">
      <h1 className="heading">Custom Hooks</h1>
      <div className="text-2xl">
        <li>
          Custom Hooks consist of built-in React Hooks or other custom Hooks.
          Therefore a custom Hook is always a new composition of one or multiple
          Hooks.
        </li>
        <li>
          If a custom Hook does not use any hooks internally, it's not a custom
          Hook and shouldn't have the prefix "use".
        </li>
        <li>
          Building your own Hooks lets you extract component logic into reusable
          functions.
        </li>
        <img src={img} alt="custom hooks" className="img" width="40%" />
        <h3>Advantages:</h3>
        <ol>
          <li>
            Reusability — we can use the same hook again and again, without the
            need to write it twice.
          </li>
          <li>
            Clean Code — extracting all the component logic into a hook will
            provide a cleaner codebase.
          </li>
          <li>Maintainability — easier to maintain.</li>
        </ol>
      </div>
    </div>
  );
};

export default CustomHooks;
