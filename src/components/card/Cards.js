import React from 'react'
import './card.css'

export default function Cards(props) {
  const {card, gymTime} = props;
  const {name, description, img, age, time} = card;
  return (
    <div className='card'>
        <img src={img} alt="fit" />
       <div className='card-info'>
       <h2>{name}</h2>
        <p>{description}</p>
        <p>Age:{age}</p>
        <p>Time:{time}s</p>
       </div>
        <button className='btn-card' onClick={()=>{gymTime(time)}}>Add to list</button>
    </div>
  )
}
