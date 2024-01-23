import React,{Component} from 'react';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import Parentcomponent from './Components/Parentcomponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
class App extends Component {
  render(){
  return (
    <div className="App">
      <NameList/>
      <UserGreeting/>
      <Parentcomponent/>
     <EventBind/>
    {/*<Message/>
    <Greet fname="mrunali" lname="salunke"/>
    <Greet fname="mrudula" lname="patil"/>
    <Greet fname="minal" lname="patil"/>
    <Counter/>
     <FunctionClick/>
      <ClassClick/>
      <Welcome name="mrunu"/>
    <Welcome name="mrunu"/>
    <Hello/>*/}
    </div>
  );
  }
}

export default App;
