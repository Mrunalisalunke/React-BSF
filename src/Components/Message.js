import React,{Component} from 'react';

class Message extends Component{
    constructor(){
        super()
            this.state={
                message:'welcome mrunali'
            }
    }
    changeMessage(){
        this.setState({
            message:'thank u for subscribing'
        })
    }
    render(){
        return(
            <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>subscribe</button>
        </div>
        )
    }
}
export default Message