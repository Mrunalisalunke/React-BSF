import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
      this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
         this.setState({
             message:'good bye'
         })
         console.log(this)
    }
    clickHandler=()=>{
        this.setState({
            message:'goodbye'
        })
    }
    
  render() {
    return (
      <div>
          {this.state.message}
        {/*<button onClick={this.clickHandler.bind(this)}>Click</button>
           <button onClick={()=>this.clickHandler()}>Click</button>
        */}
        <button onClick={this.clickHandler}>Click me</button>
        
      </div>
    )
  }
}

export default EventBind
