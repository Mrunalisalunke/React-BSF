import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLoggedIn:true
       }
     }
     
  render() {
      return this.state.isLoggedIn && <div>welcome mrunali</div>
    // return(
    //     this.state.isLoggedIn?<div>welcome mrunali</div>:<div>welcome guest</div>
    // )
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>welcome mrunali</div>
    // }
    // else{
    //     message=<div>welcome Guest</div>
    // }
    // return <div>message</div>
    //   if(this.state.isLoggedIn){
    //       return<div>welcome mrunali</div>
             
    //    }
    //    else{
    //        return<div>welcome guest</div>
    //    }

    // return (
    //   <div>
    // <div>welcome Mrunali</div>
    // <div>weicome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
