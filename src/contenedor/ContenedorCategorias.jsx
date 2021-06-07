import React, {useEffect, useState} from 'react'
import Cartel from '../componentes/cartel/Cartel'

const ContenedorCategorias = () => {

const [cate, setCate] = useState([])
  
  useEffect(() => {
    
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=Samsung')
    .then(res=> res.json())
    .then(dato=>{
     
      setCate(dato.results)
    })

  }, [])
  return (
    <div>
      <Cartel dato={cate} />

    </div>
  )
}

export default ContenedorCategorias;
