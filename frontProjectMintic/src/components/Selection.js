import React, { Fragment, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


const Selection = () => {
 
  return (
    <div className="row">
      <div className="logohome col-lg-6 "></div>
      <div className="d-flex justify-content-center flex-column align-items-center col-lg-6">
        
        <img src={logo} height="100" width="100" alt="" />
        <h1 className="titulo">Bienvenido al panel de Pedify</h1>
        <Fragment>
            <div class="card itemhome text-center">
              <div class="card-body">
                <h3 class="card-title">Administrador</h3>
                <p class="card-text">
                  Podras crear o eliminar perfiles de cajeros y ver los
                  reportes.
                </p>
                <Link className="btn btn-primary" to="/LoginAdmin">Ingresar</Link>
              </div>
            </div>

            <div class="card itemhome text-center">
              <div class="card-body">
                <h3 class="card-title">Cajero</h3>
                <p class="card-text">
                  Podras ver el inventario y vender productos.
                </p>
                <Link className="btn btn-primary" to="/LoginCajero">Ingresar</Link>
                
              </div>
            </div>
          </Fragment>

      </div>
    </div>
  )
}

export default Selection
