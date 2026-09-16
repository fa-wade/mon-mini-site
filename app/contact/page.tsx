"use client";
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [message, setMessage] = useState("");
  const [envoye, setEnvoye] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnvoye(true);
  }

  return (
    <div>
      <h1>Contactez-nous</h1>

      {envoye ? (
        <p>Merci, ton message a bien été envoyé (simulation) !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="message">Ton message :</label>
          <br />
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            cols={40}
          />
          <br />
          <button type="submit" disabled={message.trim() === ""}>
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
}