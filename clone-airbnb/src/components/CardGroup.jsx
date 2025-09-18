import React from 'react'
import { useState } from 'react'
import './css/CardGroup.css'

export default function CardGroup({options}) {
    const [clickedId, setClickedId] = useState(-1)
    
        const handleClick = (e,i) =>{
            setClickedId(i)
    
        }

  return (
    <div className='row'>
        {
            options.map((item, i) => (
                <div key={i} className='col my-4'>
                    <div onClick={(e) => handleClick(e,i)} className={i === clickedId ? 'cardGroup active' : 'cardGroup'}>
                        <i className={item.icon}/>
                        <p className='text-truncate'>{item.text}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
