import { Plus } from "lucide-react";
import { useState } from "react";
import { createContext } from "react"
import { useContext } from "react";

const CounterContext = createContext(null);

const Counter = () => {
    const context = useContext(CounterContext);
    console.log(context);
    return(
        <div>{JSON.stringify(context, null, 2)}</div>
    )
}

const Increment = () => {	
    const context = useContext(CounterContext);
    return(
        <button className="btn btn-primary" onClick={() => {context.setCount((c) => c +1)}}>
        <Plus size={20}/>
         </button>
    )
}

const UseContext = () => {

    const [count, setCount] = useState(5);

  return (
    <CounterContext.Provider value={{
        count,
        setCount
    }}>
        <Counter />
        <Increment />
    </CounterContext.Provider>
  )
}

export default UseContext

