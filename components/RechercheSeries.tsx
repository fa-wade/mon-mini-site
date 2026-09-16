"use client";
import { useState, useEffect } from 'react';
import SerieCard from './SerieCard';

export default function RechercheSeries() {
  const [recherche, setRecherche] = useState("");
  const [resultats, setResultats] = useState<any[]>([]);
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);
  const [genreFiltre, setGenreFiltre] = useState("tous");

  useEffect(() => {
    if (recherche.trim() === "") {
      setResultats([]);
      return;
    }

    async function chercherSeries() {
      setChargement(true);
      setErreur(null);
      try {
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${recherche}`
        );
        if (!response.ok) throw new Error("Erreur serveur");
        const data = await response.json();
        setResultats(data);
      } catch (err: any) {
        setErreur(err.message);
      } finally {
        setChargement(false);
      }
    }

    chercherSeries();
  }, [recherche]);
  const resultatsFiltres = resultats.filter((resultat) => {
  if (genreFiltre === "tous") return true;
  return resultat.show.genres.includes(genreFiltre);
});

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher une série..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />
<select value={genreFiltre} onChange={(e) => setGenreFiltre(e.target.value)}>
  <option value="tous">Tous les genres</option>
  <option value="Drama">Drama</option>
  <option value="Comedy">Comedy</option>
  <option value="Action">Action</option>
  <option value="Crime">Crime</option>
</select>
      {chargement && <p>Chargement...</p>}
      {erreur && <p>Erreur : {erreur}</p>}

      {!chargement && !erreur && recherche.trim() !== "" && resultatsFiltres.length === 0 && (
        <p>Aucune série ne correspond à ta recherche.</p>
      )}

      <div className="grille-series">
        {resultatsFiltres.map((resultat) => (
          <SerieCard
            key={resultat.show.id}
            nom={resultat.show.name}
            image={resultat.show.image ? resultat.show.image.medium : null}
            genres={resultat.show.genres}
            statut={resultat.show.status}
          />
        ))}
      </div>
    </div>
  );
}