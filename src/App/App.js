import './App.css';
import React, {  useState, useEffect } from 'react';
import ReservationCards from './ReservationCards';
import ReservationForm from './ReservationForm';


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

  async function postReservation(reservation) {
    await fetch("http://localhost:3001/api/v1/reservations", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reservation)
      }
    )
      .then(response => {
        if(!response.ok) {
          throw new Error(`There was an error posting ${reservation}`);
        }
        fetchReservations();
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchReservations();
  }, [])

  function addReservation(reservation) {
    setReservations([...reservations, reservation]);
  }


  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <ReservationForm addReservation={addReservation} postReservation={postReservation}/>
      {reservations ? <ReservationCards reservations={reservations}/> : <h2>Loading...</h2>}
    </div>
  );
}

export default App; 