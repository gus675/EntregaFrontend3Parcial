// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)*/

import React from 'react'
import styles from "./CabeceraSt/styles.module.css";

export default function Cabecera({cantProd}) {
  
    return (
      <header className={styles['cabecera']}>
          {
            <div>
                <h1>Carrito de compras</h1>
                <p>Cantidad de productos <span style={{padding:"0px 20px 0px 20px"}}>{cantProd}</span>
                </p>
            </div>
          }
      </header>
    )
}
