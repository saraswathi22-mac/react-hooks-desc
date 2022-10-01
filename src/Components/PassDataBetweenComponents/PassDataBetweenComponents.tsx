import React from 'react'

const PassDataBetweenComponents = () => {
  return (
    <div>React is an open sourced JavaScript library maintained mainly by Facebook. In few years it has grow to be one of the most popular libraries used in Web Front-End Development to make complex UIs. Its main feature is that you build your application using a component-based approach, and encapsulating components within other components that manage their own state. This is a great approach since it allows you to reuse components in a template like manner and prevents writing repetitive code.
        <p>1. Parent to Child (Using Props): 
        This one is easy. By default the data flow in a React project is from the top to the bottom of the hierarchy, so from parent to child.
        The first step is to declare the data that will be passed down to the child component. The props declaration in line 8 is very important. Every argument passed into the child component will be accessible through props.
        Now the second step is to access the data in the child component. When declaring the functional child component you must remember to include props as a parameter. And then when you need to use the value you just reference props and access the attribute you declared in the parent component.
        </p>
        <p>2. Child to Parent (Using Callbacks): 
        Now let’s make data flow the other way around. This approach is a little bit more confusing but its still simple. First off, we must use a Hook called useState. We are using something called destructuring when calling useState to create a variable “message” and a function “setMessage”. The initial value of this variable is declared in the argument for useState, in this case empty string. The function setMessage is used to update the variable’s value. The way we are going to make this work is passing this updater function to the child as props, so when we call to it from the child component the value will update in the parent component.
        The response in the child component is usually triggered by an action, so I implemented a button and a small handler. Remember it is important to declare props as an input in the functional component, if you don’t it won’t work! In the handler event for the button click declare the callback passed from props and insert the desired message to be sent to the parent.
        </p>
        <p>3. Child to Child (Between Sibling Components): 
        Passing data among children is just a combination of these both methods we just talked about! First you must implement a callback function in child1 to pass the data to the parent, then give the new data to child2 through props. I propose you try this out as a challenge to review your newly gained knowledge about data handling in React.
        </p>
    </div>
  )
}

export default PassDataBetweenComponents