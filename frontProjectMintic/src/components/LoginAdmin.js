import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import { api } from "../api";

const LoginCajero = () => {
  const [error, setError] = useState(false)
  const [validate, setValidate] = useState(false)
  const [redireccion, setRedireccion] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: ""
  })


  // api
  
  const __loginAdmin = async (email, password) => {
    if ((email.trim() === "" || password.trim() === "")) {
      setError(true)
    } else {
      try {
        const res = await api.loginAdmin(email, password)
        console.log(res)
        if (res.token) {
          
          setRedireccion(true)
          
      }else{
        setError(false)
        setValidate(true)
      }
      } catch (error) {
        console.log(error)
      }
    }
  };
  // api

  const actualizarState = (e) =>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }
 
  return (
    <div className="row">
      <div className="logohome col-lg-6 "></div>
      <div className="d-flex justify-content-center flex-column align-items-center col-lg-6">
        <img src={logo} height="100" width="100" alt="" />
        <h1 className="titulo">Bienvenido al panel de Pedify</h1>
        <div className="card text-center itemhome ">
          <div class="card-body">
            <h1 className="card-title ">Login Admin</h1>
            {error ? <p>Campos vacios</p> : null}
            {validate ? <p>Correo o contraseña invalidos</p> : null}
            <span className="sepacer">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  <h5>Usuario</h5>
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={actualizarState}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  <h5>Contraseña</h5>
                </label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={actualizarState}
                />
              </div>

              <div className="d-flex  justify-content-around sepacer ">
                <Link class="btn btn-primary" 
                onClick={() => {__loginAdmin(data.email, data.password) }}
                to={ redireccion === true ? "/Admin" : "/LoginAdmin"}  
                >
                  Entrar
                </Link>

                <Link class="btn btn-primary" to="/">
                  Volver
                </Link>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCajero;
