import React, { useState } from "react";

export default function Booking() {

  const [bookings, setBookings] = useState([]);

  const [student, setStudent] = useState("");
  const [instructor, setInstructor] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [date, setDate] = useState("");

  const addBooking = () => {
    if (!student || !instructor || !vehicle || !date) return;

    const newBooking = {
      id: Date.now(),
      student,
      instructor,
      vehicle,
      date
    };

    setBookings([...bookings, newBooking]);

    setStudent("");
    setInstructor("");
    setVehicle("");
    setDate("");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <h1>Planning des réservations</h1>

      <div style={{ marginTop: "30px" }}>

        <h3>Créer une réservation</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>

          <input
            placeholder="Nom de l'élève"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />

          <input
            placeholder="Nom du moniteur"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
          />

          <input
            placeholder="Véhicule"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button onClick={addBooking}>
            Ajouter réservation
          </button>

        </div>

      </div>

      <div style={{ marginTop: "40px" }}>

        <h3>Planning</h3>

        {bookings.length === 0 && <p>Aucune réservation pour le moment.</p>}

        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              {booking.date} — {booking.student} avec {booking.instructor} ({booking.vehicle})
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}