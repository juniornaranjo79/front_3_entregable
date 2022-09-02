import React from 'react'

export default function Cabecera({total}) {
  
  return (
    <header>
      <h1>Carrito de comptras</h1>
      <p>Cantidad de productos: <span>{total}</span></p>
    </header>
  )
}
