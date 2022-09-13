
import { useState } from "react"


export default function Item( {total, comprar, nombre, descripcion, stock} ) {
  const [cantidad, setCantidad] = useState(stock)

  const manejoStock = () => {
    setCantidad(cantidad - 1)
    comprar()
  }

  return (
    <div className='producto'>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>
        En stock: {cantidad > 0 ? cantidad : <span> Agotado </span> } 
      </h5>
      <button disabled={!cantidad} onClick={manejoStock}>{cantidad ? 'COMPRAR' : 'SIN STOCK'}</button>
      {/*cantidad > 0 ? <button onClick = {manejoStock}> COMPRAR </button> : <button disabled> SIN STOCK </button>*/}
    </div>
  )
}
