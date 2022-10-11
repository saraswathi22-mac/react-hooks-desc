import React from "react";
import img1 from '../../static/images/react_hooks/UseContext1.png'
import img2 from '../../static/images/react_hooks/UseContext2.png'
import img3 from '../../static/images/react_hooks/UseContext3.png'

const UseContext = () => {
  return (
    <div className="aboutHook">
      <h1>Use Context Hook (Context API)</h1>
      <li>
        The Context API is a neat way to pass state/data through the component
        tree without having to pass props down manually at every level.
      </li>
      <li>
        It provides a way for you to make particular data available to all
        components throughout the component tree no matter how deeply nested
        that component may be.
      </li>
      <li>
        Allows you to manage global application states in your React apps
        without resorting to props drilling.
      </li>
      <li>
        useContext creates its own context which can be wrapped around elements
        of your choosing. This is very helpful when many components modify or
        display the same state. This can be helpful for adding dark/light mode
        functionality or checking if the user is logged in.
      </li>
      <li>
        To initialize a new context it must first be initialized with
        createContext(). Then the children’s prop is passed to the provider, the
        prop contains all the components which can use the new context.
      </li>
      <img src={img1} alt="" className="img" width="70%" />
      <li>
        In order to receive the children's prop wrap the components which need
        the context state with the provider component that we just created. In
        this example, the user object is needed throughout the entire index
        context. So, it’s wrapped around the entire app. UseContext2.png
      </li>
      <img src={img2} alt="" className="img" width="70%" />
      <li>
        Lastly, the context must be returned through the Context.Provider which
        wraps around children. Any React hooks can be used inside the context
        component. In this example, a custom hook is used. This completes the
        initialization process. To access the context just import it like a
        component and then pull the arguments from it, using destructuring. This
        looks similar to the state hook. UseContext3.png
      </li>
      <img src={img3} alt="" className="img" width="70%" />
    </div>
  );
};

export default UseContext;
