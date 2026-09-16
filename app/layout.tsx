import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header style={{ display: 'flex', gap: '20px', padding: '20px', background: '#312e81' }}>
          <Link href="/" style={{ color: 'white' }}>Accueil</Link>
          <Link href="/apropos" style={{ color: 'white' }}>À propos</Link>
        </header>
        <main style={{ padding: '20px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
