import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Students() {

  const [students, setStudents] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {

    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setStudents(data);
    }
  }

  async function addStudent() {

    if (!firstName || !lastName) return;

    const { error } = await supabase
      .from("students")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          hours_total: 20,
          hours_remaining: 20
        }
      ]);

    if (error) console.error(error);

    setFirstName("");
    setLastName("");

    fetchStudents();
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <h1>Gestion des élèves</h1>

      <div style={{ marginBottom: "20px" }}>
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

        <button onClick={addStudent}>
          Ajouter élève
        </button>
      </div>

      <h2>Liste des élèves</h2>

      {students.map((student) => (
        <div key={student.id}>
          {student.first_name} {student.last_name} — {student.hours_remaining}h restantes
        </div>
      ))}

    </div>
  );
}
