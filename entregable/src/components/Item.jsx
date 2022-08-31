// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import React, {useState} from "react"
import styles from './BotonSt/styles.module.css'

export default function Item({nombre, descripcion, stock, id, img, sumar}) {

  const [valor, setValor]= useState(stock)
  const stylesSpan= cambiarSpan(valor)

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
        boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.4)"}
        }>
          <img src={img}  alt= "Zapas"/>
          <h3 key={id}> { nombre } </h3>
          <p> { descripcion } </p>
          <h5>En stock:  <span style= {stylesSpan} > { valor?   valor   : "Agotado"}   </span>  </h5>
          <button disabled={!valor} className={ styles['boton']} onClick = {restar} >
            { valor?  "COMPRAR"  : "SIN STOCK"}
          </button>
    </div>
  )
}

const styleCanProd = {
  padding :'0px 20px 0px 20px',
  color: "black",
  fontSize: "16px",
  backgroundColor: "#32e456"
}

const cambiarSpan=(value)=>{
  if (value >0) {
    return styleCanProd          
  }
}

