import Head from 'next/head'; 
import ClientComponents from '../../../components/clientComponent.js';
import { getFileLink } from './../../../lib/Requests.js';

export async function generateMetadata({ searchParams }) {
  const { articleId } = searchParams;
  const article = await fetchArticleDetails(articleId); 

  const imageUrl = article?.article.thumbanails ? await getFileLink(article?.article.thumbanails) : '';
  console.log("image url", imageUrl);
  let description = article?.article.contenu ? article?.article.contenu.substring(0, 50) : '';
  description = description.replace(/<[^>]+>/g, '');

  return {
    title: `${article?.article.titre} | FONAREV`,
    description: description,
    openGraph: {
      title: article?.article.titre,
      description: description, // Utilisez la description tronquée ici
      url: `https://www.fonarev.cd/actualites/details?articleId=${articleId}`,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

const DetailsPage = async ({ searchParams }) => {
  const { articleId } = searchParams; 
  const articleDetails = await fetchArticleDetails(articleId); 
  console.log("restor", articleDetails)
  return (
    <>
      <Head>
        <title>{articleDetails?.titre} | FONAREV</title>
      </Head>
      <main className="mainCont">
          {/* <ClientComponents initialArticleDetails={articleDetails?.article} />  */}
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
