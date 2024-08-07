import React, { useState, useEffect } from 'react';


const TheUseEffect = () => {

  const [number, setNumber] = useState(0);

  const changeNumber = () => {
    document.title = number;
  };

  // Utilisez useEffect pour exécuter changeNumber lorsque number change
  useEffect(() => {
    changeNumber();
  }, [number]); // Dépendance : number

  return (
    <div>
      <p>Number: {number}</p>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  );
};


//   const [number, setNumber] = useState(0);
//   const [checked, setChecked] = useState(false);
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0
//   });

//   useEffect(() =>{
//     const onMouseMove = (e) => { 
//         if (checked) {
//             return;
//         }
//         setMousePosition({
//             x: e.clientX,
//             y: e.clientY
//         })
//     }
//     document.addEventListener('mousemove', onMouseMove);
//   }, [])


//   return (
//     <div className="flex flex-col gap-4">
//       <label>
//         Enable on mouse move
//       <input
//         className="checkbox-primary checkbox"
//         type="checkbox"
//         checked={checked}
//         onChange={(e) => setChecked(e.target.checked)}
//       />
//       </label>
//       <pre>
//         {JSON.stringify(mousePosition, null, 2)}
//       </pre>
//     </div>
//   );
// };

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
