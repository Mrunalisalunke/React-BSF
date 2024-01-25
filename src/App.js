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

function App() {
  return (
    <div className="App">
     <HookMouse/>
      {/*<PostForm/>
       <HookEffectOne/>
      <HookCounteFour/>
      <HookcounterTwo/>
      <HookCounter/>
      <ClassCounter/>
      <PostList/>*/}
    </div>
  );
}

export default App;
