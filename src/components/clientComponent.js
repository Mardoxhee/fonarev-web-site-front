'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const ClientComponents = ({ initialArticleDetails }) => {
  const searchParams = useSearchParams();
  const articleId = searchParams.get('articleId'); // Récupérer l'article ID à partir des query params

  useEffect(() => {
    if (articleId) {
      console.log("Article ID from client:", articleId);
      // Ici, vous pouvez envoyer l'ID à une API ou à une autre partie de votre application
    }
  }, [articleId]);

  return (
    <div>
      <h2>Détails de l'article</h2>
      <p>{initialArticleDetails?.contenu}</p>
      {/* Autres manipulations côté client */}
    </div>
  );
};

export default ClientComponents;
