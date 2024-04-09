import React from 'react';
import './Card.css';

function Card({ name, date, time, guests, id }) {
  return (
    <section className='reservation-card'>
        <h2 className='reservation-card-name'>{name}</h2>
        <p>{date}</p>
        <p>{time}</p>
        <p>Number of guests {guests}</p>
        <button className='cancel-button'>Cancel</button>
    </section>
  )
}

export default Card
