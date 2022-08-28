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

const styleCanProd = {
  color: "black",
  fontWeight: "bolder",
  backgroundColor: "white"
}

const cambiarSpan=(value)=>{
  if (value >0) {
    return styleCanProd          
  }
}

export default function Item({nombre, descripcion, stock, id, sumar}) {

  const [valor, setValor]= useState(stock)

  const styles= cambiarSpan(valor)

  const restar = () => {
    if (valor>0){
      setValor(valor - 1)
      sumar()
    }
  }

  return (
    <div className='producto'>
      <h3 key={id}> { nombre } </h3>
      <p> { descripcion } </p>
      <h5>En stock:  <span style= {styles} > { valor?   valor   : "Agotado"}   </span>  </h5>
      <button onClick = { restar } > { valor?  "COMPRAR"  : "SIN STOCK"  } </button>
    </div>
  )
} 
