import React from 'react'
import Navegador from '../navegador/Navegador'
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <h1>ONEPHONE</h1>
      <Navegador />
    </div>
  )
}

export default Header
