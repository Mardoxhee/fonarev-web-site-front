"use client";
import React from "react";
import styles from "./activites.module.scss";
import ActuCard from "@/components/actuCard";
import { useGetAllArticlesQuery } from "./../store/slices/actualite";
import Skeleton from "@/components/skeleton";
import Link from "next/link";
import Banner from "@/components/banner";
import Head from "next/head";

const Activites = () => {
  const { data, error, isLoading } = useGetAllArticlesQuery("");
  const articles = data?.article ? [...data.article] : [];

  // Filtrer les articles pour n'inclure que ceux qui ont une propriété date
  const articlesWithDates = articles.filter(article => article.date);

  // Utilisez un objet pour regrouper les articles par mois et année
  const articlesGroupedByMonth = {};

  // Fonction pour formater les dates
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("fr-FR", options);
  }

  // Fonction pour extraire le mois et l'année
  function getMonthAndYear(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString("fr-FR", { month: "long" });
    const year = date.getFullYear();
    return { month, year };
  }

  // Regroupez les articles par mois et année uniquement si la date est définie
  articlesWithDates.forEach((article) => {
    const { month, year } = getMonthAndYear(article.date);

    const key = `${year}-${month}`; // Utilisez une clé pour le regroupement
    if (!articlesGroupedByMonth[key]) {
      articlesGroupedByMonth[key] = []; // Créez un tableau si nécessaire
    }

    articlesGroupedByMonth[key].push(article);
  });

  // Triez les clés pour obtenir l'ordre inverse (du plus récent au plus ancien)
  const sortedKeys = Object.keys(articlesGroupedByMonth).sort((a, b) => {
    const [yearA, monthA] = a.split("-");
    const [yearB, monthB] = b.split("-");

    // Pour afficher les années les plus récentes en premier
    if (yearA === yearB) {
      const months = [
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre",
      ];

      return months.indexOf(monthB) - months.indexOf(monthA); // ordre décroissant par mois
    }

    return parseInt(yearB) - parseInt(yearA); // ordre décroissant par année
  });

  return (
    <>
      <Head>
        <title>
          Fonarev rdc | Activités du FONAREV : Fonds national des réparations des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité
        </title>
        <meta
          name="google-site-verification"
          content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs"
        />
        <meta
          name="keywords"
          content="victimes, violences sexuelles, Etat congolais, guerre à l'est, réparation des victimes, réparation, aide aux victimes, soutien aux victimes, préjudices, massacre, république démocratique du congo, tuerie, minerais, 11%, redevance"
        />
      </Head>
      <main className={styles.main}>
        <Banner
          pageTitle="Les activités du Fonarev"
          background="/dga.jpg"
        />
        {isLoading ? (
          <Skeleton />
        ) : (
          sortedKeys.map((key) => {
            const articles = articlesGroupedByMonth[key];
            const [year, month] = key.split("-");

            return (
              <section className={styles.grouper} key={key}>
                <h3>
                  {year} <span>{month}</span>
                </h3>
                <div className={styles.cardWrapper}>
                  {articles.map((article) => (
                    <Link
                      href={`/actualites/${article._id}`}
                      key={article._id}
                    >
                      <ActuCard
                        date={article.date ? formatDate(article.date) : ""}
                        category="Activité"
                        bg={article.thumbanails}
                        title={article.titre}
                      />
                    </Link>
                  ))}
                </div>
              </section>
            );
          })
        )}
      </main>
    </>
  );
};

export default Activites;
