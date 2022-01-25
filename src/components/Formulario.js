import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // uuid es una paqueteria de NPM para crear ID's

const Formulario = () => {

  //Crea el estado de las citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const [ error, actualizarError ] = useState(false)

  // Funcion que se ejecuta cada que el usuario escribe en un input
  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  // Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Cuando el usuario hace submit
  const submitCita = e => {
    e.preventDefault();

    // Validar
    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      actualizarError(true);
      return;
    }

    // Eliminar mensaje previo
    actualizarError(false);

    // Asignar un ID - Si existe una base de datos el ID se asigna desde su origen.
    cita.id = uuidv4();
    console.log(cita);

    // Crear cita
    

    // Reiniciar el Form
  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      { error ? <p className="alerta-error">Todos los campos son obligatorios</p>
      : null }

      <form
        onSubmit={submitCita}
      >
        <label>Pet Name</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Pet Name"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Owner Name</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Owner Name"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Date</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hour</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Psymptom</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button
          type="submit"
          className="u-full-width"
        >Add Date</button>

      </form>
    </Fragment>
  );
}

export default Formulario;

