
// function Button(props){
//     console.log(props);
//     return(
//         // <button className={"btn btn-primary " + props.className} >
//         <button className={`btn btn-primary ${props.className}`}>
//             {props.text}
//         </button>
//     )
// }

// const Composant = () => {
//   return (
//     <div className="flex flex-col items-center gap-4">
//       <Button  text='coucou'/>
//       <Button className='btn-lg btn-success text-red-700'  text='au revoir'  />
//       <Button /> 
//     </div>
//   )
// }

// export default Composant


// UTILISATION DU CHILDREN => au lieu de la props.text

import { Squirrel } from 'lucide-react';


function Button(props){
    console.log(props);
    return(
        <button className={"btn btn-primary " + props.className} >
            {props.children}
        </button>
    )
}

const Composant = () => {
    const nom = "pat"
  return (
    <div className="flex flex-col items-center gap-4">
      <Button className="btn-lg btn-success text-red-700">
        <Squirrel size={24}color='blue'/>
        Je suis super !
        <a href="#">lien</a>
        <h1>hello</h1>
        { nom.toUpperCase() }
        <p>25+25</p> <br />
        {25+25}
      </Button>
    </div>
  )
}

export default Composant
