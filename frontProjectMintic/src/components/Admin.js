import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="row">
      <div className="logohome col-lg-6 "></div>
      <div className="d-flex justify-content-center flex-column align-items-center col-lg-6">
        <img src={logo} height="100" width="100" alt="" />
        <h1 className="titulo text-center">
          Bienvenido al perfil de Administrador
        </h1>
        <Link className="btn btn-primary" to="/">Cerrar sesion</Link>
        <div class="card itemhome text-center">
          <div class="card-body">
            <h3 class="card-title">Cajeros creados</h3>
            <p class="card-text">
              Tendras acceso a todos los cajeros como administrador
            </p>
            <Link class="btn btn-primary" to="/ListCajero">
              Ver / Crear
            </Link>
          </div>
        </div>

        <div class="card itemhome text-center">
          <div class="card-body">
            <h3 class="card-title">Descargar reportes</h3>
            <p class="card-text">
              Selecciona una de estas dos opciones para descargar
            </p>
            <div className="d-flex justify-content-around">
              <Link class="btn btn-primary" to="/ReporteDiario">
                Diario
              </Link>
              <Link class="btn btn-primary" to="/ReporteMensual">
                Mensual
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
