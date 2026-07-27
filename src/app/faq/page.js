import Link from "next/link";
import styles from "./style.module.scss";
import { SITE_URL } from "../../lib/seo";

const faqItems = [
  {
    question: "Qu'est-ce que le FONAREV ?",
    answer:
      "Le FONAREV est le Fonds National des Réparations des Victimes des violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité. C'est un établissement public de la République démocratique du Congo.",
  },
  {
    question: "Quelle est la mission du FONAREV ?",
    answer:
      "Le FONAREV identifie les victimes, facilite leur accès à la justice, contribue à leur accompagnement juridique, médico-sanitaire et psychosocial, puis met en œuvre des réparations adaptées aux préjudices reconnus.",
  },
  {
    question: "Qui peut bénéficier du FONAREV ?",
    answer:
      "Les mécanismes concernent les victimes directes et, selon le cadre applicable, certaines victimes indirectes des violences sexuelles liées aux conflits et des crimes contre la paix et la sécurité de l'humanité commis en RDC.",
  },
  {
    question: "Comment les victimes sont-elles identifiées ?",
    answer:
      "L'identification repose sur une démarche de documentation, d'écoute, d'analyse des préjudices et de vérification, conduite dans le respect de la dignité, de la confidentialité et des droits des personnes concernées.",
  },
  {
    question: "Comment obtenir ou demander une réparation en RDC ?",
    answer:
      "Une personne concernée peut contacter le FONAREV afin d'être informée et orientée vers le mécanisme approprié. L'accès à une réparation dépend de l'identification de la victime, de la reconnaissance du préjudice et des procédures prévues par les textes.",
  },
  {
    question: "Quels sont les types de réparations des victimes ?",
    answer:
      "Les réponses peuvent comprendre des réparations individuelles ou collectives, matérielles ou symboliques, ainsi que des mesures de réhabilitation, de satisfaction et de restauration communautaire adaptées aux préjudices.",
  },
  {
    question: "Comment accompagner les victimes de violences sexuelles ?",
    answer:
      "L'accompagnement doit être centré sur la victime et coordonner l'écoute, la protection, les soins, le soutien psychosocial, l'aide juridique, la confidentialité et l'orientation vers les services compétents.",
  },
  {
    question: "Comment accéder à la justice en RDC ?",
    answer:
      "Le FONAREV contribue à l'orientation et à l'accompagnement juridique des victimes. Pour une situation personnelle, il est recommandé de contacter l'institution afin de connaître les voies adaptées au dossier.",
  },
  {
    question: "Que signifie GENOCOST ?",
    answer:
      "GENOCOST désigne le plaidoyer autour du génocide pour des gains économiques en RDC. Il relie la mémoire des victimes, la reconnaissance des crimes de masse, la vérité historique, la justice et la non-répétition.",
  },
  {
    question: "Qui finance le FONAREV ?",
    answer:
      "Les ressources du Fonds proviennent des mécanismes prévus par les textes, notamment une part de la redevance minière et des certificats carbone, ainsi que de la solidarité nationale et internationale, des contributions, dons et legs.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faq#faq`,
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <span>FONAREV RDC · Questions fréquentes</span>
        <h1>Comprendre la réparation des victimes et l'accès à la justice en RDC</h1>
        <p>
          Des réponses claires sur la mission du FONAREV, l'identification des victimes, les réparations
          individuelles et collectives, l'accompagnement psychosocial et le GENOCOST.
        </p>
      </section>

      <section className={styles.content} aria-labelledby="faq-title">
        <div className={styles.intro}>
          <span>Informations essentielles</span>
          <h2 id="faq-title">Questions fréquentes sur le FONAREV</h2>
          <p>
            Ces informations sont générales. Pour une demande liée à une situation personnelle, contactez
            directement le FONAREV afin d'obtenir une orientation adaptée.
          </p>
          <Link href="/contact">Contacter le FONAREV</Link>
        </div>

        <div className={styles.list}>
          {faqItems.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.question}
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <nav className={styles.related} aria-label="Ressources complémentaires">
        <Link href="/a-propos-du-fonarev">Mission et cadre légal du FONAREV</Link>
        <Link href="/genocost">Comprendre le GENOCOST</Link>
        <Link href="/actualites">Actualités FONAREV</Link>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
