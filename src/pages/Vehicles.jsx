import React from "react";

export default function Vehicles() {

  const vehicles = [
    { id: 1, model: "Peugeot 208", type: "Boîte manuelle" },
    { id: 2, model: "Renault Clio", type: "Boîte automatique" },
    { id: 3, model: "Volkswagen Polo", type: "Boîte manuelle" }
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Gestion des véhicules</h1>

      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Modèle</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Type</th>
          </tr>
        </thead>

        <tbody>
          {vehicles.map(vehicle => (
            <tr key={vehicle.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{vehicle.model}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{vehicle.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}