import './App.css';
import './componentes/boton'
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import freecodecamplogo from './imagenes/Freecodecamplogo-fotor-bg-remover-2024041095125.png';
import {useState} from'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClik = () =>{
    setNumClics(numClics + 1);
    console.log(numClics);
  };

  
  const reiniciarContador = () =>{
    setNumClics(0);
    console.log(numClics);
  }
  return (
    <div className='App'>
      <div className='freeCodeCamp-logo-contenedor'> 
      <img className='freeCodeCamp-logo' 
      src={freecodecamplogo} 
      alt='freeCodeCamp Logo'/>
      </div>

      <div className='contenedor-principal'>
        <Contador 
          numClics={numClics}
        />
        <Boton
          texto='Clik'
          esbotonclik={true}
          manejarClik={manejarClik}
        />
        <Boton
          texto='Reiniciar'
          esbotonclik={false}
          manejarClik={reiniciarContador}
          />
      </div>
    </div>
  );
}

export default App;
