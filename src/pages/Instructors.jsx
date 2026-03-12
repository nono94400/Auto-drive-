import React from "react";

export default function Instructors() {

  const instructors = [
    { id: 1, name: "Moniteur 1", car: "Peugeot 208" },
    { id: 2, name: "Moniteur 2", car: "Renault Clio" },
    { id: 3, name: "Moniteur 3", car: "Volkswagen Polo" }
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Gestion des moniteurs</h1>

      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Nom</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Véhicule</th>
          </tr>
        </thead>

        <tbody>
          {instructors.map(instructor => (
            <tr key={instructor.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{instructor.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{instructor.car}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}