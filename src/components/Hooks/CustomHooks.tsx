import img from "../../assets/CustomHooks.png";
import { HookHeading, HookSubHeading } from "../common/Headings/Headings";

const CustomHooks = () => {
  return (
    <>
      <HookHeading title="Custom Hooks" />
      <div className="text-2xl">
        <li>It is a new composition of one or multiple built-in Hooks.</li>
        <li>
          If a custom Hook does not use any hooks internally, it's not a custom
          Hook and shouldn't have the prefix "use".
        </li>
        <li>
          Building your own Hooks lets you extract component logic into reusable
          functions.
        </li>
        <img src={img} alt="custom hooks" className="img m-3" width="50%" />
        <HookSubHeading title="Advantages" />
        <li>
          Reusability: we can use the same hook again and again, without the
          need to write it twice.
        </li>
        <li>
          Clean Code: extracting all the component logic into a hook will
          provide a cleaner codebase.
        </li>
        <li>Maintainability: easier to maintain.</li>
      </div>
    </>
  );
};

export default CustomHooks;
