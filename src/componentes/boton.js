import React from 'react';
import '../hojas-de-estilos/boton.css';

function Boton({texto , esbotonclik, manejarClik }){
  return(
    <button className={esbotonclik ? 'boton-clik' : 'boton-reinicio'} 
    onClick={manejarClik} >
      {texto}
    </button>
  );

}

export default Boton;