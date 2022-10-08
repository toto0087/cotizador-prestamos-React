import React, { Fragment, useState } from 'react'; //un fragment es como un div pero como q no se muestra en el frontEnd
import Header from './Componentes/Header'; //importamos los cambios (h1)
import Formulario from './Componentes/Formulario';
import Mensaje from './Componentes/Mensaje';
import Resultado from './Componentes/Resultado';
import Spinner from './Componentes/Spinner';


//traemos el componente 
function App() {
    // Definir state
    const[cantidad,guardarCantidad] = useState(0); // Definimos que arranca en 0 y con guardarCant se ira reescribiendo
    const[plazo,guardarPlazo] = useState(0); // Plazo guarda el valor y guardar plazo lo modifica como el otro
    const[total,guardarTotal] = useState(0);
    const[cargando,guardarCargando] = useState(false);


  let componente;

  if (cargando) {
    componente = <Spinner />
  } else if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado 
                    total={total}
                    plazo={plazo}
                    cantidad={cantidad}
                />
  }

  return (
    <Fragment>
      <Header
        titulo="Loan quoter" 
      />  
      
      <div className='container'>
        <Formulario 
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        total={total}
        guardarTotal={guardarTotal}
        guardarCargando={guardarCargando}
        />
        
        <div className= "mensajes">
          {componente}
        </div>
        
      </div>

    </Fragment>
  );
}

export default App;
