import React from "react";
import { useState } from "react";
import "./ReservationForm.css";

function ReservationForm({ addReservation }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");

    function submitReservation(event) {
        event.preventDefault();
        console.log("clicked");
        const newReservation = {
            id: Date.now(),
            name,
            date,
            time,
            guests
        }
        addReservation(newReservation);
    }

  return (
    <section className="reservation-form">
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input
        type="date"
        placeholder="Date (mm/dd)"
        name="date"
        value={date}
        onChange={event => setDate(event.target.value)}
      />
      <input
        type="time"
        placeholder="Time"
        name="time"
        value={time}
        onChange={event => setTime(event.target.value)}
      />
      <input
        type="number"
        placeholder="Number of Guests"
        name="numGuests"
        value={guests}
        onChange={event => setGuests(event.target.value)}
      />
      <button className="reservation-form-button" onClick={event => submitReservation(event)}>Make Reservation</button>
    </section>
  );
}

export default ReservationForm;
