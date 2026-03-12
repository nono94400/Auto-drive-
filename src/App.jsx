import React, { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Instructors from "./pages/Instructors";
import Vehicles from "./pages/Vehicles";
import Booking from "./pages/Booking";

export default function App() {

  const [page, setPage] = useState("dashboard");

  const renderPage = () => {

    if (page === "dashboard") return <Dashboard />;
    if (page === "students") return <Students />;
    if (page === "instructors") return <Instructors />;
    if (page === "vehicles") return <Vehicles />;
    if (page === "booking") return <Booking />;

  };

  return (

    <div style={{ display: "flex", fontFamily: "Arial" }}>

      <div
        style={{
          width: "220px",
          height: "100vh",
          background: "#111",
          color: "white",
          padding: "20px"
        }}
      >

        <h2>AutoDrive</h2>

        <div style={{ marginTop: "30px" }}>

          <p style={{ cursor: "pointer" }} onClick={() => setPage("dashboard")}>
            Dashboard
          </p>

          <p style={{ cursor: "pointer" }} onClick={() => setPage("students")}>
            Élèves
          </p>

          <p style={{ cursor: "pointer" }} onClick={() => setPage("instructors")}>
            Moniteurs
          </p>

          <p style={{ cursor: "pointer" }} onClick={() => setPage("vehicles")}>
            Véhicules
          </p>

          <p style={{ cursor: "pointer" }} onClick={() => setPage("booking")}>
            Planning
          </p>

        </div>

      </div>

      <div style={{ flex: 1 }}>

        {renderPage()}

      </div>

    </div>

  );

}