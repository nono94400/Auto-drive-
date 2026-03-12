import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Students() {

  const [students, setStudents] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hours, setHours] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {

    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setStudents(data);

  }

  async function addStudent() {

    const { error } = await supabase
      .from("students")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          email: email,
          hours_total: hours,
          hours_remaining: hours
        }
      ]);

    if (!error) {

      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setHours("");

      loadStudents();

    }

  }

  return (

    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <h1>Gestion des élèves</h1>

      <h2>Ajouter un élève</h2>

      <div style={{ marginBottom: "30px" }}>

        <input
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          placeholder="Téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Heures"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />

        <button onClick={addStudent}>
          Ajouter élève
        </button>

      </div>

      <table style={{
        width: "100%",
        borderCollapse: "collapse"
      }}>

        <thead>
          <tr style={{ background: "#eee" }}>
            <th>Nom</th>
            <th>Téléphone</th>
            <th>Email</th>
            <th>Heures restantes</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student.id}>

              <td>
                {student.first_name} {student.last_name}
              </td>

              <td>
                {student.phone}
              </td>

              <td>
                {student.email}
              </td>

              <td>
                {student.hours_remaining}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}
