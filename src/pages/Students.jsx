import React from "react";

export default function Students() {

  const students = [
    { id: 1, name: "Ali", hoursRemaining: 5 },
    { id: 2, name: "Sofia", hoursRemaining: 8 },
    { id: 3, name: "Lucas", hoursRemaining: 3 },
    { id: 4, name: "Emma", hoursRemaining: 10 }
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Gestion des élèves</h1>

      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Nom</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Heures restantes</th>
          </tr>
        </thead>

        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.hoursRemaining} h</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}