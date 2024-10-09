// ClientWrapper.js
'use client'; // Indique que ce composant est rendu côté client
import { useSearchParams } from 'next/navigation';
import DetailsPage from './DetailsPage'; // Importer le composant serveur

const ClientWrapper = () => {
  const searchParams = useSearchParams();
  const articleId = searchParams.get('articleId'); // Récupère l'article ID depuis les query params

  if (!articleId) {
    return <p>Article ID not found.</p>;
  }

  return <DetailsPage articleId={articleId} />; // Passer articleId au composant serveur
};

export default ClientWrapper;
