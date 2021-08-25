import React from "react";
import dona from "../assets/dona.jpg";
import cafe from "../assets/cafe.jpeg";
import milo from "../assets/milo.jpg";
import pan from "../assets/pan.jpeg";

const Card = (props) => {
  const { _id, actualizarState, name, cost, stock, __v } = props;
  return (
    <>
      <div class="card  text-center" id={_id} style={{ margin: "10px", width:"40%" }}>
        <div class="card-body">
          {(() => {
            switch (name) {
              case "dona":
                return <img src={dona} height="100" width="100" alt="" />;
              case "milo":
                return <img src={milo} height="100" width="100" alt="" />;
              case "coffe":
                return <img src={cafe} height="100" width="100" alt="" />;
              case "sandwhich":
                return <img src={pan} height="100" width="100" alt="" />;

              default:
                break;
            }
          })()}

          <h4 class="card-title">{name}</h4>
          <h5>Cantidad: {stock}</h5>
          <h5>Valor: {cost}</h5>
          {/* <input
            type="number"
            name={`producto${_id}`}
            onChange={() => {actualizarState()}}
            class="form-control"
            placeholder="Cantidad"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Card;
