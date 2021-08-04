import React, { Fragment, useState } from "react";
// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Login = (props) => {
  const { name, setSelection } = props;
  const [pass, setPass] = useState(false);
  return (
    <Fragment>
      {pass ? null : (
        <div className="card text-center itemhome ">
          <div class="card-body">
            <h1 className="card-title ">{name}</h1>

            <span className="sepacer">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  <h5>Usuario</h5>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  <h5>Contraseña</h5>
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

             

              <div className="d-flex  justify-content-around sepacer ">
                {name === "Administrador" ? (
                  <Link class="btn btn-primary" to="/Admin">
                    Entrar
                  </Link>
                ) : (
                  <Link class="btn btn-primary" to="/Cajero">Entrar</Link>
                )}

                <a
                  href="/"
                  class="btn btn-primary"
                >
                  Volver
                </a>
              </div>
            </span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Login;
