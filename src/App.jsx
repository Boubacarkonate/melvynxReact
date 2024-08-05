import { useState } from 'react';
import './App.css'
import Todo from './components/Todo';

function App() {
  
  const handleClick = () =>  {  
    console.log("hello");
  }

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-blue-600">
      Hello world!
    </h1>
    <button className="btn bg-accent text-stone-300" onClick={handleClick} >Button</button>  {/* method 1 avec l'appel de la fonction handleClick*/}
    {/* <button className="btn bg-accent text-stone-300" onClick={()=>{alert('au revoir')}} >Button</button>    method 2, event en fonction anonyme, dit callBack function*/}
    
    <Todo
    OnDelete={() => {console.log("suppression");}} 
    OnCreate={() => {console.log("creation")}}
    modify={ () =>{console.log("modification")}}
    />

    <button onClick={() => {setCount(count+1)}}>
      ajout un tour
    </button>
    <p>{count}</p>
    </div>
  )
}

export default App
