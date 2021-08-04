// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Selection from "./components/Selection";
import { Fragment } from "react";
import Admin from "./components/Admin";
import Cajero from "./components/Cajero";
import ListCajero from "./components/ListCajero";
import ReporteDiario from "./components/ReporteDiario";
import ReporteMensual from "./components/ReporteMensual";
function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route path="/ReporteMensual">
            <div className="container">
              <ReporteMensual />
            </div>
          </Route>
          <Route path="/ReporteDiario">
            <div className="container">
              <ReporteDiario />
            </div>
          </Route>
          <Route path="/ListCajero">
            <div className="container">
              <ListCajero />
            </div>
          </Route>
          <Route path="/Cajero">
            <div className="container"><Cajero /></div>
          </Route>
          <Route path="/Admin">
            <div className="container">
              <Admin />
            </div>
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/">
            <div className="container">
              <Selection />
            </div>
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
