import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent=this.greetParent.bind(this)
    }
    greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }
    
    render() {
    return (
      <div>
       <ChildComponent greethandler={this.greetParent}/> 
      </div>
    )
  }
}

export default Parentcomponent
