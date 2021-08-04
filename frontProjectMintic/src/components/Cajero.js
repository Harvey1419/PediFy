import React from 'react'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Cajero = () => {
  return (
    <div className="row">
      <div className="logohome col-lg-6 "></div>
      <div className="d-flex justify-content-center flex-column align-items-center col-lg-6">
        <img src={logo} height="100" width="100" alt="" />
        <h1 className="titulo text-center">Perfil de cajero</h1>
        <Link className="btn btn-primary" to="/">Cerrar sesion</Link>
        
        <div className="d-flex justify-content-center">
          <div class="card itemhome text-center">
            <div class="card-body">
              <h4 class="card-title">Producto #1</h4>
              <h5>Cantidad:</h5>
              <input type="number" class="form-control"  placeholder="Cantidad"/>
            </div>
          </div>
          
          <div class="card itemhome text-center">
          <div class="card-body">
              <h4 class="card-title">Producto #2</h4>
              <h5>Cantidad:</h5>
              <input type="number" class="form-control"  placeholder="Cantidad"/>
            </div>          
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div class="card itemhome text-center">
            <div class="card-body">
              <h4 class="card-title">Producto #3</h4>
              <h5>Cantidad:</h5>
              <input type="number" class="form-control"  placeholder="Cantidad"/>
            </div>
          </div>
          
          <div class="card itemhome text-center">
          <div class="card-body">
              <h4 class="card-title">Producto #4</h4>
              <h5>Cantidad:</h5>
              <input type="number" class="form-control"  placeholder="Cantidad"/>
            </div>          
          </div>
        </div>
        <Link className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">Pagar</Link>
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
                Total a pagar: <b>$ 800.000</b>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex justify-content-around">
              <h4><b>Poducto #1</b> <br/> $200.000</h4>
              <h4><b>Poducto #2</b> <br/> $200.000</h4>
              
            </div>
            <div class="modal-body d-flex justify-content-around">
            <h4><b>Poducto #3</b> <br/> $200.000</h4>
            <h4><b>Poducto #4</b> <br/> $200.000</h4>
              
            </div>
            <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Realizar compra</button>
      </div>
          </div>
        </div>
      </div>
    </div>  

  )
}

export default Cajero
