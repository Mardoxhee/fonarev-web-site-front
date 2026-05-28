"use client"

import { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./faq.module.scss";

const faqItems = [
  {
    icon: "solar:shield-user-bold",
    question: "Quid du FONAREV ?",
    answer:
      "Le Fonds national des réparations des victimes des violences sexuelles liées aux conflits et des crimes contre la paix et la sécurité de l'humanité est un établissement public dédié à la protection, à l'accompagnement et à la réparation des victimes.",
    points: [
      "Identifier les victimes",
      "Faciliter l'accès à la justice",
      "Accompagner juridiquement les victimes",
      "Allouer des réparations adaptées",
    ],
  },
  {
    icon: "solar:buildings-2-bold",
    question: "Quel est le statut du FONAREV ?",
    answer:
      "Le FONAREV est un établissement public institué par la loi n° 22/065 du 26 décembre 2022. Il est placé sous la tutelle du ministère ayant les Droits humains dans ses attributions.",
  },
  {
    icon: "solar:wallet-money-bold",
    question: "Quelles sont ses sources de financement ?",
    answer: "Les ressources du Fonds proviennent de plusieurs sources prévues par les textes et les mécanismes de solidarité.",
    points: [
      "11 % de la redevance minière versée par le titulaire du titre minier",
      "2 % de la part réservée à l'État sur les certificats carbone",
      "Solidarité nationale et internationale",
      "Contributions des partenaires, organisations et philanthropes",
      "Dons et legs",
    ],
  },
  {
    icon: "solar:map-point-wave-bold",
    question: "Quel est son champ d'action ?",
    answer:
      "Le FONAREV intervient sur toute l'étendue de la République démocratique du Congo, pour les faits couverts à partir de 1993 à ce jour.",
  },
  {
    icon: "solar:users-group-rounded-bold",
    question: "Quels types de victimes sont pris en charge ?",
    answer:
      "Le FONAREV prend en considération les victimes directes et indirectes, selon les préjudices subis et les liens avec les personnes affectées.",
    points: [
      "Victimes directes des violences sexuelles liées aux conflits et des crimes graves",
      "Victimes de tortures, pillages, destructions et dommages en période de conflit",
      "Victimes indirectes : conjoints survivants, enfants, frères, sœurs et proches",
    ],
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className={styles.faqWrapper}>
      <aside className={styles.faqPanel}>
        <span>RÉPONSES ESSENTIELLES</span>
        <h3>Comprendre le FONAREV en quelques questions.</h3>
        <p>
          Une lecture claire de la mission, du statut, du financement et du champ d'action de l'institution.
        </p>
      </aside>

      <div className={styles.faqList}>
        {faqItems.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <article className={`${styles.faqItem} ${isOpen ? styles.open : ""}`} key={item.question}>
              <button type="button" onClick={() => setActiveIndex(isOpen ? -1 : index)} aria-expanded={isOpen}>
                <span className={styles.questionIcon}>
                  <Icon icon={item.icon} />
                </span>
                <strong>{item.question}</strong>
                <span className={styles.toggleIcon}>
                  <span />
                  <span />
                </span>
              </button>

              <div className={styles.answer} aria-hidden={!isOpen}>
                <p>{item.answer}</p>
                {item.points && (
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        <Icon icon="solar:check-circle-bold" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
