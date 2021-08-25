import React, {useState, useEffect} from 'react'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { api } from "../api";
import Card from './Card';

const Cajero = () => {

  const [products, setProducts] = useState([])
  const [costo, setCosto] = useState([])
  const [loader, setLoader] = useState(false)
  
  const __getProducts = async () => {

      try {
        const res = await api.getProducts()
        if (res) {
          
          setProducts(res.products)
          setCosto(res.products)
          setLoader(true)
          
      }else{
       console.log("falla")
      }
      } catch (error) {
        console.log(error)
      }
    
  };
  useEffect(() => {
    __getProducts()
  }, [])

  const [data, setData] = useState({
    producto611860125f7bb3c3b3d75014: 0,
    producto611860455f7bb3c3b3d75017: 0,
    producto611866c0dc9667c83751ca9b: 0,
    producto6118677612bff0c871a29589: 0,
  })

  
  const actualizarState = (e) =>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }
  
if (loader === true) {
  var item1 =  costo[0].productCost
var item2 =  costo[1].productCost
var item3 =  costo[2].productCost
var item4 =  costo[3].productCost

  var total = 
    item1 * data.producto611860125f7bb3c3b3d75014 + 
    item2 *  data.producto611860455f7bb3c3b3d75017 +
    item3 *  data.producto611866c0dc9667c83751ca9b +
    item4 *  data.producto6118677612bff0c871a29589 
} else {
  console.log("cargando")
}
  

  return (
    <div className="row">
      <div className="logohome col-lg-6 "></div>
      <div className="d-flex justify-content-center flex-column align-items-center col-lg-6">
        {/* <img src={logo} height="100" width="100" alt="" /> */}
        <h1 className="titulo text-center">Perfil de cajero</h1>
        <Link className="btn btn-primary" to="/">Cerrar sesion</Link>
        
        <div  style={{ width:"50vw", flexWrap:"wrap", flexDirection:"row", display:"flex", justifyContent:"space-around", margin:"10px"}}>
        {products.map((item) => (
              <Card
              _id={item._id}
              name={item.productName}
              cost={item.productCost}
              stock={item.stock}
              __v={item.__v}
              />
            ))}
        </div>
               
        <Link className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">hacer pedido</Link>
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
                {
                  loader ? 
              <h5 class="modal-title" id="exampleModalLabel">
                  Total a pagar: <b>$ {total}</b>
              </h5>
                  :
                  null
                }
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            
            <div class="modal-body d-flex justify-content-around" style={{ display:"flex", flexWrap:"wrap", width:"100%"}}>
            {products.map((item) => (
              
              <>
              <h4 style={{ width:"200px", margin:"10px"}}
              
              id={item._id}><b>{item.productName}</b><br/>
                <input
                  type="number"
                  style={{width:"100px"}}
                  name={`producto${item._id}`}
                  min="0"
                  max={item.stock}
                  onChange={actualizarState}
                  
                />
              </h4>
              
            
              </>
              
             
            ))}
              
              
              
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
