import { useEffect } from "react";
import { useState } from "react";

const TheUseEffect = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("bob");
    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log("count: " + count);
        
        document.title = count;
    });

    useEffect(function(){
        document.title = name;
    }, [name]);

    
    // const changeNumber = () => {
    //     document.title = number
    // }

    function changeNumber(){
        document.title = number
    }

    useEffect( changeNumber, [number]);

    return(
        <div className="flex flex-col gap-4">
            <input className="input input-bordered" type="text" value={name} onChange={(e) => setName(e.target.value) } />
            <input className="input input-bordered" type="number" value={number} onChange={(e) => setNumber(e.target.value) } />
            <button
             className="btn btn-primary btn-lg"
             onClick={() => {
                setCount(count + 1);
             }}
             
            >
                {count}
            </button>
        </div>
    )
}

export default TheUseEffect;