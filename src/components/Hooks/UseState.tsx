import img from "../../assets/useState.jpg";
import { HookHeading } from "../common/Headings/Headings";

const UseState = () => {
  return (
    <div className="">
      <HookHeading title="Use State Hook" />
      <div className="text-2xl">
        <li>
          The useState hook allows us to use state in our functional components.
        </li>
        <li>
          It takes the initial value of our state as the only argument, and
          returns an array of two elements.
        </li>
        <li>
          The first element is our state variable and the second element is a
          function in which we can use and update the value of the state
          variable.
        </li>
        <img src={img} alt="use state" className="img m-3" width="80%" />
        <li>
          You can add as many useState() calls, to create as many state
          variables as you want.
        </li>
      </div>
    </div>
  );
};

export default UseState;
