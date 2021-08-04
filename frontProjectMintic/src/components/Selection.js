import React, { Fragment, useState } from "react";
import logo from "../assets/logo.png";
import Login from '../components/Login'


const Selection = () => {
  const [selection, setSelection] = useState(false);
  const [name, setName] = useState("");
  const login = (perfil, velidation) => {
    setName(perfil);
    setSelection(velidation);
  };
  return (
    <div className="row">
      <div className="logohome col-lg-6 "></div>
      <div className="d-flex justify-content-center flex-column align-items-center col-lg-6">
        
        <img src={logo} height="100" width="100" alt="" />
        <h1 className="titulo">Bienvenido al panel de Pedify</h1>
        {selection === false ? (
          <Fragment>
            <div class="card itemhome text-center">
              <div class="card-body">
                <h3 class="card-title">Administrador</h3>
                <p class="card-text">
                  Podras crear o eliminar perfiles de cajeros y ver los
                  reportes.
                </p>
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    login("Administrador", true);
                  }}
                >
                  Ingresar
                </button>
              </div>
            </div>

            <div class="card itemhome text-center">
              <div class="card-body">
                <h3 class="card-title">Cajero</h3>
                <p class="card-text">
                  Podras ver el inventario y vender productos.
                </p>
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    login("Cajero", true);
                  }}
                >
                  Ingresar
                </button>
              </div>
            </div>
          </Fragment>
        ) : (
          <Login setSelection={setSelection} name={name} />
        )}
      </div>
    </div>
  )
}

export default Selection
