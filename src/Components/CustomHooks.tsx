import React from 'react'

const CustomHooks = () => {
  return (
    <div>Custom hooks are what they sound like… custom hooks. The hooks run at the same time as useState. These functions reload upon a React rerender, triggered by a state change or prop. They have the same purpose as traditional functions, improving code reusability and readability. I used a custom hook to simplify the use of localstorage in my Instagram clone project.
        <p>When publishing a custom hook to a shared library it is helpful to include the useDebugValue hook. The useDebugValue hook is simply a hook label that is displayed in React Devtools. It can label any React state.

Knowing advanced React hooks is essential for mastering React. UseRef, useImperative and useLayout are primarily used to manipulate the DOM. UseMemo and useCallback are used to reduce the frequency of rerenders, increasing performance. UseTransition, and useDeffered allow for concurrency: better controlling when React renders updated states.</p>
    </div>
  )
}

export default CustomHooks