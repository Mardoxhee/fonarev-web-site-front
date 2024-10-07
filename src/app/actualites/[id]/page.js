import Head from 'next/head'; 
import ClientComponents from '../../../components/clientComponent.js';
import { getFileLink } from './../../../lib/Requests.js';

export async function generateMetadata({ searchParams }) {
  const { articleId } = searchParams;
  const article = await fetchArticleDetails(articleId); 

  console.log("article fetched", article);

  // Utilisez getFileLink pour obtenir le lien de l'image
  const imageUrl = article?.article.thumbanails ? await getFileLink(article.thumbanails) : '';

  // Coupez le contenu à 50 caractères pour la description
  const description = article?.article.contenu ? article.contenu.substring(0, 50) : '';

  return {
    title: `${article?.article.titre} | FONAREV`,
    description: description,
    openGraph: {
      title: article?.titre,
      description: description, // Utilisez la description tronquée ici
      url: `https://www.fonarev.cd/actualites/details?articleId=${articleId}`,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

const DetailsPage = async ({ params }) => {
  const { articleId } = params; 
  const articleDetails = await fetchArticleDetails(articleId); 

  return (
    <>
      <Head>
        <title>{articleDetails?.titre} | FONAREV</title>
      </Head>
      <main className="mainCont">
        <section className="postDetails">
          <h1>{articleDetails?.titre}</h1>
          <div
            className="thumbnails"
            style={{
              backgroundImage: `url(${articleDetails?.thumbanails})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          {/* Passez simplement les détails de l'article au composant client */}
          <ClientComponents initialArticleDetails={articleDetails} /> 
        </section>
      </main>
    </>
  );
};

export default DetailsPage;

// Helper function to fetch article details from the API
async function fetchArticleDetails(articleId) {
  const res = await fetch(`https://fonarev-api.onrender.com/articles/${articleId}`);
  return res.json();
} 
