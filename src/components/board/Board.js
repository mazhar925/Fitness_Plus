import React, { useState, useEffect } from 'react';
import Cards from '../card/Cards';
import Profile from '../profile/Profile';
import './Board.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

export default function Board() {
    const [cards, setCard] = useState([]);
    const [times, setTime] = useState(0);

    const gymTime = (e)=>{
        setTime(times + parseInt(e))
    }

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>{
            setCard(data);
        })
      }, [])
  return (
    <div className="board">
        <div>
            <div className='app-title'>
            <h2> <FontAwesomeIcon icon={faDumbbell} /> Fitness Plus</h2>
            <p>Select today’s exercise</p>
            </div>
        <div className="cards-container">
            {
                cards.map(card=><Cards key={card.id} card={card} gymTime={gymTime}></Cards>)
            }
        </div>
        </div>
        <div className="identity-container">
            <Profile times={times}></Profile>
        </div>
    </div>
  )
}
