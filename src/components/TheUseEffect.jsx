import React, { useState, useEffect } from 'react';

const NotificationCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count: " + count);
    document.title = `Notifications ${count}`;
  }, [count]);

  return (
    <button
      className="btn btn-primary btn-lg"
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
};

const TheUseEffect = () => {
  const [name, setName] = useState("bob");
  const [number, setNumber] = useState(0);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    document.title = number;
  }, [number]);

  return (
    <div className="flex flex-col gap-4">
      <input
        className="input input-bordered"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input input-bordered"
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))} // Convertir en nombre
      />
      <label>
        Show Notification
      <input
        className="checkbox-primary checkbox"
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      {checked ? <NotificationCount /> : null}
      </label>
    </div>
  );
};

//  const TheUseEffect = () => {
//     const [duration, setDuration] = useState(5);
//     const [seconds, setSeconds] = useState(duration);
    

//     const handleChange = (v) => {
//         setDuration(v);
//         setSeconds(v)
//     }

//     useEffect(() => {
//         setSeconds(duration);
//     //  const timer = setInterval(() => {
//     //         setSeconds(v => v - 1  )
//     //     }, 1000)
//     //     return () => {
//     //         clearInterval(timer);
//     //     };
        
//     }, [duration])

//     return (
//         <div>
//             <input 
//             type='number'
//             value={duration}
//             onChange={handleChange}
//             />

//             <p>
//                decompte : {seconds}
//             </p>
//         </div>
//     )
//  }

export default TheUseEffect;
