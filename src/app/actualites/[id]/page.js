import { useGetAllArticlesQuery } from '../../store/slices/actualite';
import Head from 'next/head';
import Link from 'next/link';
// import { formatTitre } from '@/utils/formatters'; // A helper utility for formatting titles
import ArchiveCard from '@/components/sideCard'; // Move the card to a client component
import ClientComponents from './../../../components/clientComponent.js'

export async function generateMetadata({ params }) {
  const { articleId } = params;
  const article = await fetchArticleDetails(articleId); // Fetch article details in the server component

  return {
    title: `${article?.titre} | FONAREV`,
    description: article?.contenu,
    openGraph: {
      title: article?.titre,
      description: article?.contenu,
      url: `https://www.fonarev.cd/actualites/details?articleId=${articleId}`,
      images: [{ url: article?.thumbanails }],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

const DetailsPage = async ({ searchParams }) => {
  const { articleId } = searchParams;
  const articleDetails = await fetchArticleDetails(articleId); // Fetch article details server-side

  return (
    <>
      <Head>
        <title>{articleDetails?.titre} | FONAREV</title>
      </Head>
      <main className="mainCont">
        <section className="postDetails">
          <h1>{articleDetails?.titre}</h1>
          <div className="thumbnails" style={{ backgroundImage: `url(${articleDetails?.thumbanails})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          {/* <p>{`Publié le ${formatDate(articleDetails?.date)}`}</p> */}
          <ClientComponents articleDetails={articleDetails} /> {/* Move client logic here */}
        </section>
        {/* <AsideSection /> */}
      </main>
    </>
  );
};

export default DetailsPage;

async function fetchArticleDetails(articleId) {
  const res = await fetch(`https://fonarev-api.onrender.com/articles/${articleId}`);
  return res.json();
}
