import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ali", hours: 5 },
    { id: 2, name: "Sofia", hours: 8 },
  ]);

  const [instructors] = useState([
    { id: 1, name: "Moniteur 1" },
    { id: 2, name: "Moniteur 2" },
  ]);

  const [cars] = useState([
    { id: 1, type: "Boîte manuelle" },
    { id: 2, type: "Boîte automatique" },
  ]);

  const [bookings, setBookings] = useState([]);

  const [newBooking, setNewBooking] = useState({
    student: "",
    instructor: "",
    car: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setNewBooking({
      ...newBooking,
      [e.target.name]: e.target.value,
    });
  };

  const addBooking = () => {
    if (
      newBooking.student &&
      newBooking.instructor &&
      newBooking.car &&
      newBooking.date &&
      newBooking.time
    ) {
      setBookings([
        ...bookings,
        {
          id: bookings.length + 1,
          ...newBooking,
        },
      ]);

      setNewBooking({
        student: "",
        instructor: "",
        car: "",
        date: "",
        time: "",
      });
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "30px" }}>
      <h1>AutoDrive – Dashboard Auto-École</h1>

      <hr />

      <h2>Élèves</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} – {student.hours} heures restantes
          </li>
        ))}
      </ul>

      <h2>Moniteurs</h2>
      <ul>
        {instructors.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>

      <h2>Véhicules</h2>
      <ul>
        {cars.map((c) => (
          <li key={c.id}>{c.type}</li>
        ))}
      </ul>

      <hr />

      <h2>Créer une réservation</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <select name="student" value={newBooking.student} onChange={handleChange}>
          <option value="">Choisir un élève</option>
          {students.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>

        <select name="instructor" value={newBooking.instructor} onChange={handleChange}>
          <option value="">Choisir un moniteur</option>
          {instructors.map((i) => (
            <option key={i.id} value={i.name}>
              {i.name}
            </option>
          ))}
        </select>

        <select name="car" value={newBooking.car} onChange={handleChange}>
          <option value="">Choisir un véhicule</option>
          {cars.map((c) => (
            <option key={c.id} value={c.type}>
              {c.type}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="date"
          value={newBooking.date}
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          value={newBooking.time}
          onChange={handleChange}
        />

        <button onClick={addBooking}>Ajouter réservation</button>
      </div>

      <hr />

      <h2>Planning</h2>

      {bookings.length === 0 && <p>Aucune réservation pour le moment.</p>}

      <ul>
        {bookings.map((b) => (
          <li key={b.id}>
            {b.date} {b.time} – {b.student} avec {b.instructor} ({b.car})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
