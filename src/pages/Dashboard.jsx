import React from "react";

export default function Dashboard() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Dashboard AutoDrive</h1>

      <p>Bienvenue dans votre logiciel de gestion d'auto-école</p>

      <div style={{ marginTop: "30px" }}>
        <h3>Statistiques</h3>

        <ul>
          <li>Élèves : 42</li>
          <li>Moniteurs : 5</li>
          <li>Véhicules : 6</li>
          <li>Leçons aujourd'hui : 18</li>
        </ul>
      </div>
    </div>
  );
}
