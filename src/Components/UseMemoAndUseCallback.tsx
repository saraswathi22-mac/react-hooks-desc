import React from 'react'

const UseMemoAndUseCallback = () => {
  return (
    <div>
        <p>UseMemo and useCallback have the same functionality, the only difference is in their returns. UseMemo returns a value while useCallback returns a function.

UseMemo and useCallback are helpful when dealing with helper functions and expensive calculations. UseMemo and useCallback only returns a new object when the state of your prop changes, otherwise returning a memoized value. These differ from useEffect as it does not increase the number of React renders. Every time useEffect is triggered a new object is created, which is inefficient. UseMemo only modifies the object when the state changes, not when it rerenders.

useMemo and useCallback also render before the DOM changes, unlike useEffect.
In this example, useMemo creates an initial starting point for google maps to be centered on. A constant defined outside of the component could be used, but this marker couldn't dynamically change, allowing less flexibility in the future. useState could also be used, but it would cause the map to rerender every time the state changes, causing more rerenders and API calls.
Although useMemo can be replaced with more popular alternatives useState and useEffect, when dealing with large datasets, calculations, and APIs useMemo creates a more efficient application.

Note: The DOM should be rendered before data is fetched to avoid async errors.</p>
    </div>
  )
}

export default UseMemoAndUseCallback