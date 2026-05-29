"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import styles from "./client.module.scss";
import { useGetAllArticlesQuery } from "./../app/store/slices/actualite";
import { getFileLink } from "./../lib/Requests";

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
  if (!dateString) return "";

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString));
};

const getArticleUrl = (article) =>
  `/actualites/details?articleId=${article?._id}&articleTitle=${slugify(article?.titre)}`;

const RemoteImage = ({ source, className, children }) => {
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
      style={{ backgroundImage: `linear-gradient(180deg, rgba(12, 16, 35, 0.02), rgba(12, 16, 35, 0.28)), url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};

const Details = ({ initialArticleDetails }) => {
  const searchParams = useSearchParams();
  const articleId = searchParams.get("articleId");
  const { data } = useGetAllArticlesQuery("");
  const [articleDetails, setArticleDetails] = useState(initialArticleDetails || null);

  const articles = useMemo(() => {
    const source = data?.article ? [...data.article] : [];
    return source.reverse();
  }, [data]);

  const relatedArticles = articles
    .filter((article) => article?._id !== articleId)
    .slice(0, 4);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-detail-reveal]");

    elements.forEach((element, index) => {
      element.setAttribute("data-reveal", "");
      element.style.setProperty("--reveal-delay", `${Math.min(index * 75, 360)}ms`);
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
  }, [articleDetails]);

  useEffect(() => {
    if (!articleId) return;

    let isMounted = true;

    const fetchArticleDetails = async () => {
      try {
        const response = await fetch(`https://fonarev-api.onrender.com/articles/${articleId}`);
        const data = await response.json();
        if (isMounted) setArticleDetails(data.article);
      } catch (error) {
        if (isMounted && initialArticleDetails) setArticleDetails(initialArticleDetails);
      }
    };

    fetchArticleDetails();

    return () => {
      isMounted = false;
    };
  }, [articleId, initialArticleDetails]);

  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "https://www.fonarev.cd/actualites";

  const shareLinks = [
    {
      label: "Facebook",
      icon: "logos:facebook",
      href: `https://www.facebook.com/share.php?u=${encodeURIComponent(currentUrl)}`,
    },
    {
      label: "X",
      icon: "logos:twitter",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`,
    },
    {
      label: "LinkedIn",
      icon: "devicon:linkedin",
      href: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(currentUrl)}`,
    },
  ];

  if (!articleDetails) {
    return (
      <main className={styles.mainCont}>
        <div className={styles.loading}>Chargement de l'article...</div>
      </main>
    );
  }

  return (
    <main className={styles.mainCont}>
      <article className={styles.postDetails}>
        <div className={styles.articleHeader} data-detail-reveal>
          <Link href="/actualites" className={styles.backLink}>
            <Icon icon="solar:arrow-left-linear" />
            Retour aux actualités
          </Link>
          <span className={styles.eyebrow}>Actualité FONAREV</span>
          <h1>{articleDetails.titre}</h1>
          <div className={styles.metaLine}>
            <span>Par le FONAREV</span>
            <time>Publié le {formatDate(articleDetails.date)}</time>
          </div>
        </div>

        <div className={styles.shareContainer} data-detail-reveal>
          <p>{stripHtml(articleDetails.contenu).slice(0, 150)}...</p>
          <div className={styles.ctaContainer}>
            <span>Partager</span>
            <ul className={styles.socialMedia}>
              {shareLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                    <Icon icon={link.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section
          className={styles.textContent}
          data-detail-reveal
          dangerouslySetInnerHTML={{ __html: articleDetails.contenu }}
        />
      </article>

      <aside className={styles.sideBar}>
        <div className={styles.cardContainer} data-detail-reveal>
          <h2>À lire aussi</h2>
          {relatedArticles.map((article) => (
            <Link key={article?._id} href={getArticleUrl(article)} className={styles.sideItem}>
              <RemoteImage source={article.thumbanails} className={styles.sideImage} />
              <div>
                <time>{formatDate(article.date)}</time>
                <h3>{article.titre}</h3>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/petition" className={styles.petitionPub} data-detail-reveal>
          <span>Mobilisation</span>
          <strong>Signer / voir la pétition</strong>
          <small>Porter la voix des victimes</small>
        </Link>
      </aside>
    </main>
  );
};

export default Details;
