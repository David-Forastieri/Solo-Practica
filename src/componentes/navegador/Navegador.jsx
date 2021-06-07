import React, {useState} from 'react';
import './navegador.scss'

const Navegador = () => {

  const styles = {
    navItem:{
      left:'0',
      transition: 'left 3s linear'
    }
  }

  const [open, setOpen]= useState(false)

  const Press =()=>{
    setOpen(!open)
   
  }

  return (
    <nav className='nav-block'>
      <div>
        <button onClick={() => { Press() }} >=</button>
      </div>
      {open? 
        <div className='nav-item' style={styles.navItem}>
          <div className='text'>
            <p>Todas</p>
            <p>las marcas</p>
          </div>
          
            <ul>
              <li>ola</li>
              <li>lla</li>
              <li>slsls</li>
            </ul>
          
        </div>
        : null
      }
    </nav>
  )
}

export default Navegador
