import React, { Fragment } from 'react';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <h1>Administrador de Citas:</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">
            <h2>Listado de Citas</h2>
            <ul>
              <li>Cita 1</li>
              <li>Cita 2</li>
              <li>Cita 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
