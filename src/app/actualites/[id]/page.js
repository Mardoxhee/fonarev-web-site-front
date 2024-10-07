import Head from 'next/head'; 
import ClientComponents from '../../../components/clientComponent.js';
import { getFileLink } from './../../../lib/Requests.js';

export async function generateMetadata({ searchParams }) {
  const { articleId } = searchParams;
  const article = await fetchArticleDetails(articleId); 
  console.log("article fetched", article);

  // Utilisez getFileLink pour obtenir le lien de l'image
  const imageUrl = article?.thumbanails ? await getFileLink(article.thumbanails) : '';

  // Coupez le contenu à 50 caractères pour la description
  const description = article?.contenu ? article.contenu.substring(0, 50) : '';

  return {
    title: `${article?.titre} | FONAREV`,
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
                <title>FONAREV RDC</title>
                        <link rel="canonical" href={`https://www.fonarev.cd/actualites/details?articleId=${articleId}`} key="canonical" />
                        <meta
                            property="og:site_name"
                            content="Fonarev RDC"
                            key="ogsitename"
                        />
                        <meta
                            name="description"
                            content={description}
                        />
                        <meta
                            property="og:title"
                            content={`${articleDetails?.titre }, Fonarev RDC`}
                            key="title"
                        />
                        <meta
                            property="og:description"
                            content={`${articleDetails?.contenu }, Fonarev RDC`}
                            key="ogdesc"
                        />
                        <meta
                            property="og:image"
                            itemProp="image"
                            content={imageUrl}
                            key="ogimage"
                        />
                        <link itemProp="thumbnailUrl" href={imageUrl } />
                        {/* <meta property="og:url" content={`${pathname}${lastPart}`} key="ogurl" /> */}
                        <meta name="twitter:card" content="summary_large_image" key="twcard" />
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
