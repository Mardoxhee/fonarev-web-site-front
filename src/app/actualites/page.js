"use client";

import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "./style.module.scss";
import { useGetAllArticlesQuery } from "../store/slices/actualite";
import { getFileLink } from "./../../lib/Requests";

const promos = [
  {
    label: "Mémoire nationale",
    title: "GENOCOST",
    text: "Comprendre la mémoire des victimes et la reconnaissance du génocide pour des gains économiques.",
    image: "/genocost-cover.jpeg",
    href: "/a-propos-du-fonarev/#genocost",
    cta: "Lire le dossier",
  },
  {
    label: "Mobilisation citoyenne",
    title: "Signer la pétition",
    text: "Porter la voix des victimes, soutenir la reconnaissance et renforcer les efforts de réparation.",
    image: "/genocost1.jpg",
    href: "/petition",
    cta: "Voir la pétition",
  },
];

const slugify = (title) =>
  title
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const stripHtml = (value = "") =>
  value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const formatDate = (dateString) => {
  if (!dateString) return "Date à venir";

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
};

const getArticleUrl = (article) =>
  `/actualites/details?articleId=${article?._id}&articleTitle=${slugify(article?.titre)}`;

const ArticleImage = ({ source, className, children }) => {
  const [imageUrl, setImageUrl] = useState("/placebo.jpg");

  useEffect(() => {
    let isMounted = true;

    const resolveImage = async () => {
      if (!source) {
        setImageUrl("/placebo.jpg");
        return;
      }

      try {
        const link = await getFileLink(source);
        if (isMounted) setImageUrl(link || "/placebo.jpg");
      } catch (error) {
        if (isMounted) setImageUrl("/placebo.jpg");
      }
    };

    resolveImage();

    return () => {
      isMounted = false;
    };
  }, [source]);

  return (
    <div
      className={className}
      style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 16, 35, 0.08), rgba(12, 16, 35, 0.64)), url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};

const Actualite = () => {
  const { data, isLoading, error } = useGetAllArticlesQuery("");

  const articles = useMemo(() => {
    const source = data?.article ? [...data.article] : [];
    return source.reverse();
  }, [data]);

  const featuredArticle = articles[0];
  const topArticles = articles.slice(1, 5);
  const archiveArticles = articles.slice(0, 12);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-news-reveal]");

    elements.forEach((element, index) => {
      element.setAttribute("data-reveal", "");
      element.style.setProperty("--reveal-delay", `${Math.min(index * 80, 420)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [articles.length]);

  return (
    <>
      <Head>
        <title>FONAREV RDC | Actualités</title>
        <meta
          name="description"
          content="Retrouvez les actualités, communiqués et dossiers du FONAREV."
        />
        <meta
          name="keywords"
          content="FONAREV, actualités, réparation, victimes, RDC, Genocost, pétition"
        />
        <meta
          name="google-site-verification"
          content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs"
        />
      </Head>

      <main className={styles.main}>
        <section className={styles.newsHero}>
          <div className={styles.heroHeader} data-news-reveal>
            <span className={styles.eyebrow}>Actualités</span>
            <h1>Le fil d'information du FONAREV.</h1>
            <p>
              Communiqués, missions, mobilisation et mémoire : une lecture claire
              des actions menées au service des victimes.
            </p>
          </div>

          {isLoading && (
            <div className={styles.loadingState} data-news-reveal>
              Chargement des actualités...
            </div>
          )}

          {error && (
            <div className={styles.loadingState} data-news-reveal>
              Les actualités ne sont pas disponibles pour le moment.
            </div>
          )}

          {featuredArticle && (
            <div className={styles.leadLayout}>
              <Link
                href={getArticleUrl(featuredArticle)}
                className={styles.featuredCard}
                data-news-reveal
              >
                <ArticleImage
                  source={featuredArticle.thumbanails}
                  className={styles.featuredImage}
                >
                  <span>À la une</span>
                </ArticleImage>
                <div className={styles.featuredText}>
                  <time>{formatDate(featuredArticle.date)}</time>
                  <h2>{featuredArticle.titre}</h2>
                  <p>{stripHtml(featuredArticle.contenu).slice(0, 190)}...</p>
                </div>
              </Link>

              <aside className={styles.editorPick} data-news-reveal>
                <div className={styles.pickHeader}>
                  <span className={styles.eyebrow}>À lire aussi</span>
                  <Icon icon="solar:bookmark-bold" />
                </div>
                {topArticles.map((article) => (
                  <Link
                    className={styles.pickItem}
                    href={getArticleUrl(article)}
                    key={article._id}
                  >
                    <ArticleImage
                      source={article.thumbanails}
                      className={styles.pickImage}
                    />
                    <div>
                      <time>{formatDate(article.date)}</time>
                      <h3>{article.titre}</h3>
                    </div>
                  </Link>
                ))}
              </aside>
            </div>
          )}
        </section>

        <section className={styles.promoSection}>
          {promos.map((promo, index) => (
            <Link
              href={promo.href}
              className={styles.promoCard}
              key={promo.title}
              data-news-reveal
              style={{ backgroundImage: `linear-gradient(105deg, rgba(13, 18, 38, 0.86), rgba(142, 31, 113, 0.48), rgba(0, 137, 207, 0.28)), url(${promo.image})` }}
            >
              <span>{promo.label}</span>
              <h2>{promo.title}</h2>
              <p>{promo.text}</p>
              <strong>
                {promo.cta}
                <Icon icon={index === 1 ? "solar:pen-new-square-bold" : "solar:arrow-right-up-linear"} />
              </strong>
            </Link>
          ))}
        </section>

        <section className={styles.archiveSection}>
          <div className={styles.archiveHeader} data-news-reveal>
            <span className={styles.eyebrow}>Dernières publications</span>
            <h2>Suivre l'actualité institutionnelle.</h2>
          </div>

          <div className={styles.articleGrid}>
            {archiveArticles.map((article) => (
              <Link
                href={getArticleUrl(article)}
                className={styles.articleCard}
                key={article._id}
                data-news-reveal
              >
                <ArticleImage
                  source={article.thumbanails}
                  className={styles.articleImage}
                >
                  <span>FONAREV</span>
                </ArticleImage>
                <div className={styles.articleBody}>
                  <time>{formatDate(article.date)}</time>
                  <h3>{article.titre}</h3>
                  <p>{stripHtml(article.contenu).slice(0, 120)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Actualite;
