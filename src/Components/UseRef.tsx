import React from 'react'

const UseRef = () => {
  return (
    <div>
        The useRef hook is a built-in React hook that is used to directly access DOM nodes and persist a mutable value across re-renders of a component. The useRef hook is a function that accepts a maximum of one argument as the initial value and returns an object. The returned object has a special property called current.
        <p>useRef is primarily used to manipulate the dom, this can be used to find the dimensions of an element or work with more complex HTML elements. UseRef is also helpful when interacting with vanilla javascript libraries that interact with the dom. To use bootstrap modals or other components which change based on vanilla javascript events like click, or mouseover useRef is needed. useRef also never rerenders, which can help keep track of the total keystrokes of a user or the total amount of times a button is clicked.
        To pass a ref to a child or parent component forwardRef is needed, as ref instances don’t function the same as regular props.
        </p>
    </div>
  )
}

export default UseRef