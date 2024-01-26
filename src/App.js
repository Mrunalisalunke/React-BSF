import React,{useReducer} from 'react'
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookcounterTwo from './components/HookcounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounteFour from './components/HookCounteFour';
import HookEffectOne from './components/HookEffectOne';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';


export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
export const CountContext=React.createContext()
const initialState=0
const reducer=(state,action)=>{
  switch(action){
      case 'increment':
          return state+1
      case 'decrement':
           return state-1
      case 'reset':
            return initialState
       default:
           return state    
  }
}

function App() {
  const[count,dispatch]= useReducer(reducer,initialState)
  return (
    
    <div className="App">
      <DataFetchingTwo/>
     {/* <CountContext.Provider value={{countState:count,countDispatch:dispatch}}></CountContext.Provider>
     Count-{count} 
    <ComponentA/>
    <ComponentB/>
    <ComponentC/>
  </CountContext.Provider>*/}
    </div>
    

    
      
  );
}

export default App;
