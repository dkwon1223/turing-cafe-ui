import React from 'react'

function Card({ name, date, time, guests }) {
  return (
    <section className='reservation-card'>
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{time}</p>
        <p>Number of guests {guests}</p>
    </section>
  )
}

export default Card
