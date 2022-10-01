import React from 'react'

const UseContext = () => {
  return (
    <div className="aboutHook">
      <h1>Use Context Hook</h1>
      useContext creates its own context which can be wrapped around elements of your choosing. This is very helpful when many components modify or display the same state. It makes the flow of state much more manageable; instead of passing a state setter and getter to every component just call useContext. This can be helpful for adding dark/light mode functionality or checking if the user is logged in.
    <p>To initialize a new context it must first be initialized with createContext(). Then the children’s prop is passed to the provider, the prop contains all the components which can use the new context. UseContext.png</p>
    <p>In order to receive the children's prop wrap the components which need the context state with the provider component that we just created. In this example, the user object is needed throughout the entire index context. So, it’s wrapped around the entire app. UseContext2.png</p>
    <p>Lastly, the context must be returned through the Context.Provider which wraps around children. Any React hooks can be used inside the context component. In this example, a custom hook is used. This completes the initialization process. To access the context just import it like a component and then pull the arguments from it, using destructuring. This looks similar to the state hook. UseContext3.png</p>
    </div>
  )
}

export default UseContext