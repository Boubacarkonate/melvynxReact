
const Todo = (props) => {
  console.log(props);

  return(
    <div>
      <p>Faire les courses</p>
      <button className='btn btn-error btn-sm'
       onClick={()=>{ props.OnDelete?.();
        console.log("DELETED in component");
      }}
      >
       Supprimer
      </button>
      <button className='btn btn-success btn-sm' onClick={()=>{
        props.OnCreate?.();
        console.log('CREATED in component');
      }}>
        créer
      </button>

      <button className='btn btn-warning btn-sm' onClick={()=>{props.modify?.(); console.log('MODIFIED');}} >
      Modifier
      </button>
    </div>
  )
};

export default Todo;