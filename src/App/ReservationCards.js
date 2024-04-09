import React from 'react';
import Card from './Card';
import './ReservationCards.css';

function ReservationCards({ reservations }) {
  const resCards = reservations.map(reservation => {
    return (
      <Card
        name={reservation.name}
        date={reservation.date}
        time= {reservation.time}
        guests={reservation.number}
        id={reservation.id}
        key={reservation.id}
      />
    )
  })

  return (
    <div className='resy-container'>
      {resCards}
    </div>
  )
}

export default ReservationCards
