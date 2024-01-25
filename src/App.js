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
import Inline from './Components/Inline'
import StyleSheet from './Components/StyleSheet'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA'
import FragmentDemo from './Components/FragmentDemo'
import Table from './Components/Table';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary'
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import CounterOne from './Components/CounterOne';
import ComponentC from './Components/ComponentC'
import { UserProvider } from './Components/userContext';
class App extends Component {
  render(){
  return (
    <div className="App">
      <UserProvider value="mrunu">
     <ComponentC/>
     </UserProvider>
         {/*<Message/>
          <CounterOne 
      render={(count,incrementCount)=>(
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>
      )}/>

      <CounterOne 
      render={(count,incrementCount)=>(
        <HoverCounterTwo count={count} incrementCount={incrementCount}/>
      )}/>
         <User render= {(isLoggedIn)=> isLoggedIn?'mrunu':'' }/>
          <ClickCounterTwo/>
      <HoverCounterTwo/>
         <ClickCounter/>
      <HoverCounter/>
      <PortalDemo/>
       <ErrorBoundary>
    <Hero heroName='manu' />
      </ErrorBoundary>
      <ErrorBoundary>
     <Hero heroName='joker' />
    </ErrorBoundary>
    <FRParentInput/>
      <FocusInput/>
      <RefsDemo/>
      <ParentComp/>
    <Form/>
     <Table/>
     <FragmentDemo/>
     <LifecycleA/> 
     <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    <Inline/>
      <NameList/>
      <StyleSheet primary={true}/>
     <UserGreeting/>
      <Parentcomponent/>
     <EventBind/>
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
