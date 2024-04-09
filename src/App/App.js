import './App.css';
import React, {  useState, useEffect } from 'react';
import ReservationCards from './ReservationCards';


function App() {
  const [reservations, setReservations] = useState();

  async function fetchReservations() {
    await fetch("http://localhost:3001/api/v1/reservations")
      .then(response => {
        if(!response.ok) {
          throw new Error("There was an issue retrieving reservation information. Try again later.");
        }
        return response.json();
      })
      .then(data => {
        setReservations(data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchReservations();
  }, [])


  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <ReservationCards reservations={reservations}/>
    </div>
  );
}

export default App; 