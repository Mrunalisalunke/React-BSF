import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'mrunali'
      }
      console.log('lifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB componentDidmount')
    }
    shouldComponentUpdate(){
        console.log('lifecycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleB componentDidUpdate')
    }

    render() {
        console.log('Lifecycle B render')
    return (
      <div>
        Lifecycle B
      </div>
    )
  }
}

export default LifecycleB
