import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const ListCajero = () => {
  return (
    <div className="row">
      <div className="logohome col-lg-6 "></div>
      <div className="d-flex justify-content-center flex-column align-items-center col-lg-6">
        <img src={logo} height="100" width="100" alt="" />
        <h1 className="titulo text-center">Gestion de cajeros</h1>
        <Link className="btn btn-primary" to="/Admin">Volver</Link>
        <div class="card itemhome text-center">
          <div class="card-body">
            <h3 class="card-title">Crear cajero</h3>
            <Link
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i class="fas fa-plus"></i>
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div class="card itemhome text-center">
            <div class="card-body">
              <h5 class="card-title">Silvia Parra</h5>
              <p class="card-text">silviaparra@gmail.com</p>
              <p class="card-text">
                Contraseña:
                <br /> 12345
              </p>
              <Link class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
              >Eliminar</Link>
            </div>
          </div>
          
          <div class="card itemhome text-center">
            <div class="card-body">
              <h5 class="card-title">Diego Berrio</h5>
              <p class="card-text">diegoberrio@gmail.com</p>
              <p class="card-text">
                Contraseña:
                <br /> 67890
              </p>
              <Link class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
              >Eliminar</Link>
            </div>
          </div>
        </div>
      </div>

      {/* modal  crear*/}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Crear cajero
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <span>
              <div class="mb-3 text-center">
                  <label for="exampleInputEmail1" class="form-label">
                    <h5>Nombre y apellido</h5>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  
                </div>
                <div class="mb-3 text-center">
                  <label for="exampleInputEmail1" class="form-label">
                    <h5>Correo electronico</h5>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  
                </div>
                <div class="mb-3 text-center">
                  <label for="exampleInputPassword1" class="form-label">
                    <h5>Contraseña</h5>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                
              </span>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerar
              </button>
              <button type="button" class="btn btn-primary">
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal eliminar */}
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Eliminar perfil
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex justify-content-around">
              <button type="button" class="btn btn-primary btn-lg"  data-bs-dismiss="modal">Eliminar</button>
              <button type="button" class="btn btn-secondary btn-lg"  data-bs-dismiss="modal">Cerrar</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>  
  );
};

export default ListCajero;
