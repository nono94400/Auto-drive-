import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  async function loadStudents() {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setStudents(data);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  async function addStudent(e) {
    e.preventDefault();

    if (!firstName || !lastName) return;

    await supabase.from("students").insert([
      {
        first_name: firstName,
        last_name: lastName,
      },
    ]);

    setFirstName("");
    setLastName("");

    loadStudents();
  }

  async function deleteStudent(id) {
    await supabase.from("students").delete().eq("id", id);
    loadStudents();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Gestion des élèves</h1>

      <form onSubmit={addStudent} style={{ marginBottom: 20 }}>
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

        <button type="submit">Ajouter élève</button>
      </form>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.first_name}</td>
              <td>{s.last_name}</td>

              <td>
                <button onClick={() => deleteStudent(s.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}