import img from "../../assets/useRef.jpg";
import { HookHeading, HookSubHeading } from "../common/Headings/Headings";
import PenDown from "../common/PenDown/PenDown";

const UseRef = () => {
  return (
    <div>
      <HookHeading title="Use Ref Hook" />
      <div className="text-2xl">
        <li>
          It is used to directly access DOM nodes and persist a mutable value
          across re-renders of a component.
        </li>
        <li>
          It is a function that accepts a maximum of one argument as the initial
          value and returns an object.
        </li>
        <li>The returned object has a special property called current.</li>
        <img src={img} alt="use ref" className="img m-3" width="60%" />
        <li>
          We use the useRef hook to store the values without triggering the
          re-render of the component.
        </li>
        <HookSubHeading title="Use Cases" />
        <div>
          Handling Form Inputs and Accessing DOM Nodes/Elements
          <span>
            <PenDown reference="https://stackblitz.com/edit/react-6r9dfh?file=src%2FApp.js" />
          </span>
        </div>
        <div>
          Storing Previous State/Value
          <span>
            <PenDown reference="https://stackblitz.com/edit/react-mypnev?file=src%2FApp.js" />
          </span>
        </div>
        <div>
          Timer
          <span>
            <PenDown reference="https://stackblitz.com/edit/react-einhge?file=src%2FApp.js" />
          </span>
        </div>
        <li>
          To pass a ref to a child or parent component forwardRef is needed, as
          ref instances don’t function the same as regular props.
        </li>
      </div>
    </div>
  );
};

export default UseRef;
