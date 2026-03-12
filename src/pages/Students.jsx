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

    if (error) {
      console.log(error);
    } else {
      setStudents(data);
    }

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

    <div style={{
      padding: "20px",
      maxWidth: "900px",
      margin: "auto",
      fontFamily: "Arial"
    }}>

      <h1>Gestion des élèves</h1>

      <h2>Ajouter un élève</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))",
        gap: "10px",
        marginBottom: "30px"
      }}>

        <input
          placeholder="Prénom"
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
        />

        <input
          placeholder="Nom"
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
        />

        <input
          placeholder="Téléphone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          placeholder="Heures"
          value={hours}
          onChange={(e)=>setHours(e.target.value)}
        />

        <button onClick={addStudent}>
          Ajouter élève
        </button>

      </div>


      <h2>Liste des élèves</h2>

      <div style={{
        display:"grid",
        gap:"15px"
      }}>

        {students.map(student => (

          <div key={student.id}
          style={{
            border:"1px solid #ddd",
            borderRadius:"10px",
            padding:"15px",
            background:"white",
            boxShadow:"0 2px 5px rgba(0,0,0,0.05)"
          }}>

            <div style={{
              fontWeight:"bold",
              fontSize:"18px"
            }}>
              {student.first_name} {student.last_name}
            </div>

            <div>
              📞 {student.phone}
            </div>

            <div>
              ✉️ {student.email}
            </div>

            <div style={{marginTop:"5px"}}>
              ⏱ {student.hours_remaining} heures restantes
            </div>

          </div>

        ))}

      </div>

   
