export const genocostArticles = [
  {
    slug: "sensibilisation-et-mobilisation",
    href: "/genocost/sensibilisation-et-mobilisation",
    image: "/genocost1.jpg",
    tag: "RDC",
    title: "Sensibilisation et mobilisation pour la reconnaissance",
    text: "Actions d'information et de plaidoyer pour faire comprendre la mémoire du Genocost.",
    intro:
      "La reconnaissance du Genocost commence par une mobilisation patiente : expliquer, documenter, écouter et faire circuler la mémoire auprès des communautés et des institutions.",
    date: "02 août",
    location: "République démocratique du Congo",
    paragraphs: [
      "Les actions de sensibilisation permettent de replacer les victimes au centre du récit public. Elles donnent des mots à une douleur longtemps ignorée et rappellent que la reconnaissance n'est pas seulement symbolique : elle ouvre un chemin vers la vérité, la justice et la réparation.",
      "Le FONAREV accompagne cette mobilisation en portant des messages clairs sur la mémoire des massacres, la dignité des survivants et la nécessité de prévenir la répétition des crimes. Ces activités rapprochent les citoyens, les institutions, les jeunes, les leaders communautaires et les partenaires autour d'une même responsabilité.",
      "Informer sur le Genocost, c'est aussi lutter contre l'oubli. Chaque rencontre, chaque campagne et chaque support de communication contribue à faire comprendre la dimension humaine, historique et économique des violences subies en RDC.",
    ],
    takeaways: [
      "Faire connaître le sens du Genocost auprès du public.",
      "Porter la mémoire des victimes dans les espaces communautaires.",
      "Renforcer le plaidoyer pour une reconnaissance nationale et internationale.",
    ],
  },
  {
    slug: "side-events-commemoration-genocost",
    href: "/genocost/side-events-commemoration-genocost",
    image: "/banieregenocost.jpg",
    tag: "Genève / New York",
    title: "Side events autour de la commémoration du Genocost",
    text: "Rencontres, panels et espaces de dialogue avec les partenaires institutionnels.",
    intro:
      "Les side events donnent une portée internationale à la commémoration du Genocost en ouvrant des espaces de dialogue avec les décideurs, les experts et les partenaires.",
    date: "Autour du 02 août",
    location: "Genève et New York",
    paragraphs: [
      "À Genève, à New York et dans d'autres espaces de plaidoyer, les rencontres autour du Genocost permettent de porter la voix des victimes au-delà des frontières nationales. Elles inscrivent la reconnaissance dans les discussions internationales sur les droits humains, la justice et la réparation.",
      "Ces événements réunissent des institutions, des acteurs diplomatiques, des organisations partenaires, des chercheurs et des représentants de la société civile. Leur objectif est de renforcer la compréhension des crimes commis, de soutenir la documentation et de mobiliser des appuis pour la non-répétition.",
      "Le FONAREV y défend une approche centrée sur les victimes : reconnaître les faits, préserver la mémoire, soutenir les survivants et construire des réponses de réparation qui tiennent compte de la gravité des préjudices.",
    ],
    takeaways: [
      "Internationaliser la mémoire du Genocost.",
      "Créer des espaces de dialogue avec les partenaires institutionnels.",
      "Relier reconnaissance, justice, réparation et non-répétition.",
    ],
  },
  {
    slug: "ecoute-dignite-reparation",
    href: "/genocost/ecoute-dignite-reparation",
    image: "/idvic3.jpg",
    tag: "Victimes",
    title: "Écoute, dignité et réparation",
    text: "Présence auprès des survivantes, des familles et des communautés affectées.",
    intro:
      "La mémoire du Genocost prend tout son sens lorsqu'elle rejoint les survivantes, les familles et les communautés qui portent encore les conséquences des violences.",
    date: "Actions continues",
    location: "Communautés affectées",
    paragraphs: [
      "Écouter les victimes, c'est reconnaître leur histoire avant toute démarche administrative. Cette présence donne de la place à la parole, à la dignité et aux besoins concrets des personnes touchées par les violences sexuelles liées aux conflits et les crimes contre la paix et la sécurité de l'humanité.",
      "Le FONAREV inscrit son action dans une logique de réparation centrée sur l'humain. Cela suppose d'identifier les préjudices, d'orienter les survivants, de soutenir l'accompagnement et de préserver le lien entre mémoire collective et réparation individuelle ou communautaire.",
      "La reconnaissance du Genocost ne peut pas être séparée de cette proximité avec les victimes. Elle rappelle que derrière chaque chiffre, il y a des familles, des territoires, des deuils, des blessures et une exigence de reconstruction.",
    ],
    takeaways: [
      "Placer la dignité des victimes au cœur de l'action.",
      "Relier mémoire, accompagnement et réparation.",
      "Renforcer la confiance avec les communautés affectées.",
    ],
  },
  {
    slug: "engagement-diplomatique-institutionnel",
    href: "/genocost/engagement-diplomatique-institutionnel",
    image: "/genostTandem.jpg",
    tag: "Plaidoyer",
    title: "Engagement diplomatique et institutionnel",
    text: "Coordination des voix pour la reconnaissance, la vérité historique et la non-répétition.",
    intro:
      "La reconnaissance du Genocost exige un plaidoyer structuré auprès des institutions nationales, régionales et internationales.",
    date: "Plaidoyer permanent",
    location: "RDC et espaces internationaux",
    paragraphs: [
      "L'engagement diplomatique et institutionnel vise à faire avancer la reconnaissance des crimes commis en RDC comme un sujet de vérité historique, de justice et de responsabilité collective. Il donne une dimension politique et internationale à la mémoire des victimes.",
      "Le FONAREV travaille à coordonner les voix, à renforcer les alliances et à inscrire le Genocost dans les espaces où se prennent les décisions. Ce travail demande de la documentation, de la pédagogie, une présence constante et une attention aux attentes des survivants.",
      "Ce plaidoyer porte un message simple : reconnaître les crimes, c'est honorer les victimes, soutenir la réparation et construire les conditions d'une paix durable fondée sur la vérité et la non-répétition.",
    ],
    takeaways: [
      "Faire avancer la reconnaissance dans les cadres institutionnels.",
      "Coordonner les messages de plaidoyer autour du Genocost.",
      "Soutenir la vérité historique et la non-répétition.",
    ],
  },
]

export const getGenocostArticle = (slug) => genocostArticles.find((article) => article.slug === slug)
