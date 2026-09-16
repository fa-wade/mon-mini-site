type SerieCardProps = {
  nom: string;
  image: string | null;
  genres: string[];
  statut: string;
};

export default function SerieCard({ nom, image, genres, statut }: SerieCardProps) {
  return (
    <div className="carte-serie">
      {image ? (
        <img src={image} alt={nom} />
      ) : (
        <p>Pas d'image disponible</p>
      )}
      <h3>{nom}</h3>
      <p>{genres.length > 0 ? genres.join(", ") : "Genre inconnu"}</p>
      <p>{statut === "Ended" ? "Terminée" : "En cours"}</p>
    </div>
  );
}