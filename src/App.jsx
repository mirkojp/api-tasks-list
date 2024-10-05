import { useState } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { ListadoRequerimientos } from './components/ListadoRequerimiento';
import './App.css';

function App() {
  const [requerimientos, setRequerimientos] = useState([]);

  const eliminarRequerimiento = (index) => {
    const nuevosRequerimientos = requerimientos.filter((_, i) => i !== index);
    setRequerimientos(nuevosRequerimientos);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className='mt-12 flex'>
        <Formulario
          requerimientos={requerimientos}
          setRequerimientos={setRequerimientos}
        />
        <ListadoRequerimientos
          requerimientos={requerimientos}
          eliminarRequerimiento={eliminarRequerimiento} 
        />
      </div>
    </div>
  );
}

export default App;