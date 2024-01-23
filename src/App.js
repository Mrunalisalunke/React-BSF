import React,{Component} from 'react';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'

class App extends Component {
  render(){
  return (
    <div className="App">
      <Counter/>
      <Welcome name="mrunu"/>
    {/*<Message/>
    <Greet fname="mrunali" lname="salunke"/>
    <Greet fname="mrudula" lname="patil"/>
    <Greet fname="minal" lname="patil"/>
    <Welcome name="mrunu"/>
    <Hello/>*/}
    </div>
  );
  }
}

export default App;
