import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greethandler}>greet Parent</button>
    </div>
  )
}

export default ChildComponent
