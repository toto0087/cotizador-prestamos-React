import React, { useState, Fragment } from "react"; //improtamos para usar state
import { calcularTtotal } from "../helpers";


const Formulario = (props) => {

    const { cantidad, 
      guardarCantidad, 
      plazo, guardarPlazo, 
      total, guardarTotal, 
      guardarCargando } = props

  //Definimos state
  const [error, guardarError] = useState(false);

  const calcularPrestamo = (e) => {
    e.preventDefault();

    // validamos
    if (cantidad === 0 || plazo === "") {
      guardarError(true);
      return;
    }

    // Elimina error previo
    guardarError(false);

    // Habilitamos el spinner.
    guardarCargando(true)

    setTimeout(() => {
      // Realiza la cotizacion
      const total = calcularTtotal(cantidad, plazo);

      // Una vez guardado, mostramo el total
      guardarTotal(total)

      guardarCargando(false)

    }, 3000);

    console.log(total);
  };

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Lending amount</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={(e) => guardarCantidad(parseInt(e.target.value))} //Usa eventos en el mismo html
            />
          </div>
          <div>
            <label>Term for payment</label>
            <select
              className="u-full-width"
              onChange={(e) => guardarPlazo(parseInt(e.target.value))}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {(error) ? <p className="error">Todos los campos son obligatorios</p> : null}
    </Fragment>
  );
};

export default Formulario;
