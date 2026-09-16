"use client";
import { useState, useEffect } from 'react';

export default function ListeUtilisateurs() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  async function chargerUtilisateurs() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error("Erreur serveur");
      const data = await response.json();
      setUtilisateurs(data);
    } catch (err: any) {
      setErreur(err.message);
    } finally {
      setChargement(false);
    }
  }

  useEffect(() => {
    chargerUtilisateurs();
  }, []);

  if (chargement) return <p>Chargement...</p>;
  if (erreur) return <p>Erreur : {erreur}</p>;

  return (
    <ul>
      {utilisateurs.map((u: any) => (
        <li key={u.id}>{u.name} — {u.email}</li>
      ))}
    </ul>
  );
}