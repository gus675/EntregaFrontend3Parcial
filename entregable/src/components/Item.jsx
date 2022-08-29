// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import React, {useState} from "react"
import stylesb from './BotonSt/styles.module.css'
import stylesz from './ImagenSt/styles.module.css'

export default function Item({nombre, descripcion, stock, id, img, sumar}) {

  const [valor, setValor]= useState(stock)
  const styles= cambiarSpan(valor)

  const restar = () => {
    if (valor>0){
      setValor(valor - 1)
      sumar()
    }
  }

  return (
    <div  className='producto'
      style={
        {backgroundColor: "#fffafa",
        webkitBoxShadow: "5px 5px 15px 5px rgba(0,0,0,0.32)",
        boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.32)",
        padding: "20px"}
        }>
          <img src={img}  alt= "Zapas" className={ stylesz['imagen']}/>
          <h3 key={id}> { nombre } </h3><hr/>
          <p> { descripcion } </p>
          <h5>En stock:  <span style= {styles} > { valor?   valor   : "Agotado"}   </span>  </h5>
          <button className={ stylesb['boton']} onClick = { restar } >
            { valor?  "COMPRAR"  : "SIN STOCK"  }
          </button>
    </div>
  )
}

const styleCanProd = {
  padding :'0px 20px 0px 20px',
  color: "black",
  fontSize: "14px",
  backgroundColor: "#32e456"
}

const cambiarSpan=(value)=>{
  if (value >0) {
    return styleCanProd          
  }
}
