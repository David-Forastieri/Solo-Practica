import React from 'react';
import Boton from '../boton/Boton';
import './cartel.scss';

const Cartel = ({dato}) => {
  console.log(dato);

  //console.log(dato[0].title);
  
  return (
      <div className='body'>
        {dato.map((e, i)=> {
          return(
            <div key={i} className='cartel' >
              <div className='img-cartel'>
                <img src={e.thumbnail} alt="imagen" />
              </div>  
                <p className='name-cartel'>{e.title}</p> 
              <div>
                <Boton />
              </div>
            </div>
            )
        })}      
      </div>
      )
}

export default Cartel

/*
{dato.map((e, i)=>{
            return(
              <p key={i} >{e.title}</p>
            )
          })}
 */