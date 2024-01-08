import img1 from "../../assets/UseContext1.png";
import img2 from "../../assets/UseContext2.png";
import img3 from "../../assets/UseContext3.png";
import { HookHeading, HookSubHeading } from "../common/Headings/Headings";

const UseContext = () => {
  return (
    <div>
      <HookHeading title="Use Context Hook (Context API)" />
      <div className="text-2xl">
        <li>
          The Context API (data layer) is a neat way to pass state/data through
          the component tree without having to pass props down manually (Prop
          Drilling) at every level.
        </li>
        <li>
          It provides a way for you to make particular data available to all
          components throughout the component tree, no matter how deeply nested
          that component may be.
        </li>
        <li>
          To initialize a new context it must first be initialized with
          createContext(). Then the children’s prop is passed to the provider,
          the prop contains all the components which can use the new context.
        </li>
        <img src={img1} alt="" className="img m-3" width="60%" />
        <li>
          In order to receive the children's prop, wrap the components which
          need the context state with the provider component that we just
          created.
        </li>
        <img src={img2} alt="" className="img m-3" width="60%" />
        <li>
          Lastly, the context must be returned through the Context.Provider
          which wraps around children. It is the provider that allows the
          context to be consumed by other components{" "}
        </li>
        <li>
          To access the context just import it like a component and then pull
          the arguments from it, using destructuring.
        </li>
        <img src={img3} alt="" className="img m-3" width="60%" />
        <li>
          Every context object comes with a Provider React component that allows
          consuming components to subscribe to context changes.
        </li>
        <HookSubHeading title="Use Cases" />
        <li>Adding dark/light mode functionality</li>
        <li>Checking if the user is logged in.</li>
      </div>
    </div>
  );
};

export default UseContext;
