import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'mrunali'
      }
      console.log('lifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidmount')
    }
    shouldComponentUpdate(){
        console.log('lifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycle A getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleA componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'mrunu'
        })
    }
    render() {
        console.log('Lifecycle A render')
    return (
      <div>
        Lifecycle A
        <button onClick={this.changeState}>change state</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
