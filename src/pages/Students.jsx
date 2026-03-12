import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Students() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {

    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erreur chargement élèves:", error);
    } else {
      setStudents(data);
    }
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <h1>Gestion des élèves</h1>

      <table style={{
        width: "100%",
        marginTop: "20px",
        borderCollapse: "collapse"
      }}>

        <thead>
          <tr style={{ background: "#f3f3f3" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Nom</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Téléphone</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Email</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Heures restantes</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student.id}>

              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {student.first_name} {student.last_name}
              </td>

              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {student.phone}
              </td>

              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {student.email}
              </td>

              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {student.hours_remaining}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
