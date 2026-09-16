"use client";
import { useState } from 'react';

type ProduitProps = {
  nom: string;
  prix: number;
  stock: number;
  onAjouter: () => void;
};

export default function Produit({ nom, prix, stock, onAjouter }: ProduitProps) {
  const [quantite, setQuantite] = useState(0);

  function handleClick() {
    setQuantite(quantite + 1);
    onAjouter();
  }

  return (
    <div className="produit">
      <h2>{nom}</h2>
      <p className="prix">{prix} FCFA</p>
      <p className={stock === 0 ? "stock-rupture" : "stock"}>
        {stock === 0 ? "Rupture de stock" : stock}
      </p>
      <p className="quantite">Quantité : {quantite}</p>
      <button onClick={handleClick} disabled={stock === 0}>
        Ajouter au panier
      </button>
    </div>
  );
}