import React from 'react'

const UseReducer = () => {
  return (
    <div className="aboutHook">
      <h1>Use Reducer Hook</h1>
      useReducer separates the concerns of complex states and components, compartmentalizing many states outside components to create more readable code. This can be used to separate a multistate fetch from the component. Let’s say a user of a social media app submits a photo to be used as a new profile picture. To do this the client first GETs the server. There are three states: fetchLoading, fetchSuccess, and fetchFailure. If fetchSucess the server returns whether the photo is appropriate. There are another two states for this: validPhoto, invalidPhoto. This is already looking very cluttered. This can be refactored with useReducer, look at how much cleaner this is!</div>
  )
}

export default UseReducer