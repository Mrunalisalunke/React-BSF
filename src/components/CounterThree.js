import React ,{useReducer} from 'react'

const initialState=0
const reducer=(state,action)=>{
  switch(action){
      case 'increment':
          return state+1
      case 'decrement':
           return state-1
      case 'reset':
            return initialState
       default:
           return state    
  }
}
function CounterThree() {
    const [countTwo,dispatchTwo]=useReducer(reducer,initialState)
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <div>count-{count}</div>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Deccrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      <div>
      <div> Second count-{countTwo}</div>
      <button onClick={()=>dispatchTwo('increment')}>Increment</button>
      <button onClick={()=>dispatchTwo('decrement')}>Deccrement</button>
      <button onClick={()=>dispatchTwo('reset')}>Reset</button>
      </div>
    </div>
  )
}

export default CounterThree
