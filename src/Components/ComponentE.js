import React, { Component } from 'react'
import ComponenetF from './ComponentF'
import UserContext from './userContext'
class ComponentE extends Component {
   static contextType=UserContext
    render() {
    return (
      <div>
       Component E context {this.context} 
       <ComponenetF/>
      </div>
    )
  }
}
ComponentE.contextType=UserContext
export default ComponentE
