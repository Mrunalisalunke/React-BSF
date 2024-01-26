import React,{useContext} from 'react'
import {UserContext,ChannelContext} from '../App'
import {CountContext} from '../App'

function ComponentF() {
    const countContext=useContext(CountContext)
  return (
    <div>
        {/*<UserContext.Consumer>
            {
               
                user=>{
                    return(
                        <ChannelContext.Consumer>
                            {
                                channel=>(
                                    <div>user context value is- {user},Channel Context Value-{channel}</div>
                                )
                            }
                        </ChannelContext.Consumer>
                    )
                 
                }
            }
        </UserContext.Consumer>*/}
       Component A {countContext.countState}
      <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>Deccrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentF
