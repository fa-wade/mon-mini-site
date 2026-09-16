"use client";
import { useState } from 'react';
import Produit from '../components/Produit';

export default function Accueil() {
  const [panier, setPanier] = useState(0);

  function ajouterAuPanier() {
    setPanier(panier + 1);
  }

  return (
    <div>
      <h1>Bienvenue sur mon mini-site</h1>
      <p className="panier-global">🛒 Articles dans le panier : {panier}</p>

      <div className="liste-produits">
        <Produit nom="T-shirt" prix={5000} stock={12} onAjouter={ajouterAuPanier} />
        <Produit nom="Paire de chaussures" prix={15000} stock={0} onAjouter={ajouterAuPanier} />
        <Produit nom="Sac" prix={8000} stock={3} onAjouter={ajouterAuPanier} />
      </div>
    </div>
  );
}
