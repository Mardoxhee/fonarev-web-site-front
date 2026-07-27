# Documentation SEO — FONAREV et méthode réutilisable

Dernière mise à jour : 27 juillet 2026  
Projet : site officiel du FONAREV  
URL canonique : `https://www.fonarev.cd`

## 1. Objectif de cette documentation

Ce document présente :

1. les améliorations SEO réalisées sur le site du FONAREV ;
2. les raisons de chaque choix ;
3. les fichiers concernés ;
4. la procédure de mise en ligne et de soumission à Google ;
5. une méthode réutilisable pour travailler le SEO d’un autre site Next.js.

Le SEO technique facilite l’exploration, la compréhension et l’indexation d’un site. Il ne garantit cependant ni une indexation immédiate ni une première position sur Google. Le classement dépend aussi de la qualité du contenu, de l’autorité du domaine, des liens entrants, de la concurrence, de l’expérience utilisateur et de la régularité éditoriale.

## 2. Résultat obtenu pour le site FONAREV

Le site dispose maintenant de :

- métadonnées globales et spécifiques à chaque page ;
- titres et méta-descriptions associés à une intention de recherche précise ;
- URL canoniques basées sur `https://www.fonarev.cd` ;
- balises Open Graph pour Facebook, LinkedIn, WhatsApp et les autres plateformes compatibles ;
- Twitter Cards pour X ;
- image sociale FONAREV au format 1200 × 630 pixels ;
- données structurées Schema.org ;
- sitemap XML dynamique ;
- fichier `robots.txt` dynamique ;
- manifest du site ;
- métadonnées dynamiques pour les actualités ;
- métadonnées dynamiques pour les articles GENOCOST ;
- FAQ éditoriale optimisée et balisée avec `FAQPage` ;
- maillage interne renforcé ;
- textes alternatifs plus descriptifs sur les images principales ;
- liens d’actualités corrigés ;
- validation par une compilation Next.js de production.

Au moment de la validation, le sitemap contenait 85 URL :

- 21 pages publiques principales ;
- 4 articles du dossier GENOCOST ;
- 60 articles d’actualité récupérés depuis l’API.

Ce nombre évolue automatiquement lorsque la liste des actualités change.

## 3. Étapes réalisées sur le site FONAREV

### Étape 1 — Audit de l’architecture

Les routes présentes dans `src/app` ont été recensées. Les anciennes balises ajoutées avec `next/head` ont également été recherchées.

Problèmes identifiés :

- métadonnées dispersées dans plusieurs composants clients ;
- titre global défini depuis le menu du site ;
- titres et descriptions parfois identiques ou trop génériques ;
- absence de sitemap et de robots dynamiques dans l’App Router ;
- absence de données structurées globales ;
- page FAQ presque vide ;
- liens d’actualités contenant deux caractères `?` au lieu de `?` puis `&` ;
- layout global déclaré comme composant client, ce qui empêchait d’exploiter proprement l’API Metadata de Next.js.

### Étape 2 — Séparation du layout serveur et des fournisseurs clients

Le layout principal doit rester un composant serveur pour pouvoir exporter `metadata` et `viewport`.

Le fournisseur Redux a donc été déplacé dans :

- `src/app/providers.js`

Le layout serveur se trouve dans :

- `src/app/layout.js`

Cette séparation permet de conserver les fonctionnalités clientes tout en générant les balises SEO directement dans le HTML envoyé aux moteurs de recherche.

### Étape 3 — Centralisation de la configuration SEO

Le fichier suivant centralise le domaine, le nom du site, l’image sociale, les mots-clés communs et la fonction de génération des métadonnées :

- `src/lib/seo.js`

La fonction `createPageMetadata()` produit notamment :

- `title` ;
- `description` ;
- `keywords` ;
- `alternates.canonical` ;
- règles d’indexation ;
- Open Graph ;
- Twitter Cards.

Exemple simplifié :

```js
export const metadata = createPageMetadata({
  title: "FAQ FONAREV | Comment obtenir une réparation en RDC ?",
  description: "Réponses sur le FONAREV, les bénéficiaires et les réparations.",
  path: "/faq",
  keywords: [
    "Comment obtenir une réparation en RDC",
    "Qui peut bénéficier du FONAREV",
  ],
});
```

### Étape 4 — Métadonnées globales

Le fichier `src/app/layout.js` définit les informations communes à tout le site :

- domaine canonique ;
- nom de l’application ;
- organisme créateur et éditeur ;
- validation Google Search Console ;
- icônes ;
- langue `fr-CD` ;
- thème du navigateur ;
- métadonnées par défaut de la page d’accueil.

La balise de validation Google existante a été conservée :

```text
Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs
```

### Étape 5 — Stratégie de mots-clés par page

Les mêmes dizaines de mots-clés n’ont pas été copiés mécaniquement sur toutes les pages. Cette pratique provoquerait du bourrage de mots-clés et de la concurrence entre les pages du même site.

Chaque rubrique a reçu un sujet principal et des expressions secondaires cohérentes :

| Page | Intention principale | Exemples de mots-clés associés |
| --- | --- | --- |
| Accueil | Présenter le FONAREV | FONAREV, Fonds National des Réparations des Victimes, réparation des victimes RDC |
| À propos | Expliquer l’institution | Loi 22/065 RDC, Décret FONAREV, institution publique RDC, politique de réparation |
| Actualités | Informer sur les actions | Actualités FONAREV, communiqués FONAREV, justice et réparation |
| Activités | Montrer les interventions | accompagnement psychosocial, identification des victimes, réhabilitation |
| GENOCOST | Construire le dossier de référence | GENOCOST, génocide pour des gains économiques, mémoire des victimes |
| Pétition | Mobiliser pour la reconnaissance | pétition GENOCOST, reconnaissance des victimes, commémoration nationale |
| FAQ | Répondre aux recherches conversationnelles | comment obtenir une réparation, qui peut bénéficier du FONAREV |
| Publications | Valoriser les documents | rapports FONAREV, études FONAREV, documentation FONAREV |
| Newsletter | Développer la recherche de marque | newsletter FONAREV, publications et actualités FONAREV |
| Contact | Orienter les utilisateurs | contact FONAREV RDC, accès à la justice, accompagnement des victimes |
| Opportunités | Répondre aux recherches administratives | emplois FONAREV, appels d’offres FONAREV, stages FONAREV |

### Étape 6 — Métadonnées propres à chaque route

Des fichiers `layout.js` ont été ajoutés dans les rubriques concernées. Cela permet aux pages clientes de bénéficier de métadonnées générées côté serveur.

Exemples :

- `src/app/a-propos-du-fonarev/layout.js` ;
- `src/app/actualites/layout.js` ;
- `src/app/activites/layout.js` ;
- `src/app/genocost/layout.js` ;
- `src/app/faq/layout.js` ;
- `src/app/contact/layout.js` ;
- `src/app/publications/newsletter/layout.js` ;
- `src/app/opportunites/appels/layout.js`.

Chaque page possède ainsi un titre, une description, un canonical, Open Graph et Twitter spécifiques.

### Étape 7 — Suppression des anciennes balises dupliquées

Les imports et blocs `next/head` présents dans les composants de l’App Router ont été supprimés.

Cette opération évite :

- plusieurs titres pour la même page ;
- plusieurs méta-descriptions concurrentes ;
- une balise globale écrasant les balises spécifiques ;
- des changements tardifs de métadonnées uniquement côté navigateur.

### Étape 8 — Open Graph et Twitter Cards

Toutes les pages indexables reçoivent :

- `og:title` ;
- `og:description` ;
- `og:url` ;
- `og:type` ;
- `og:site_name` ;
- `og:locale` ;
- `og:image` ;
- `twitter:card` ;
- `twitter:title` ;
- `twitter:description` ;
- `twitter:image`.

L’image sociale globale se trouve dans :

- `public/og.png`

Dimensions : 1200 × 630 pixels.

Texte utilisé :

```text
FONAREV RDC
Justice · Dignité · Réparation
Fonds National des Réparations des Victimes
```

### Étape 9 — Données structurées Schema.org

Des blocs JSON-LD ont été intégrés pour aider les moteurs à comprendre la nature du site et de ses contenus.

Types utilisés :

- `GovernmentOrganization` pour le FONAREV ;
- `WebSite` pour le site officiel ;
- `FAQPage` pour la FAQ ;
- `NewsArticle` pour les actualités dynamiques ;
- `Article` pour les dossiers GENOCOST.

Les informations de l’organisation comprennent notamment :

- nom officiel et sigle ;
- logo ;
- URL ;
- description ;
- adresse à Kinshasa ;
- zone desservie ;
- profils sociaux officiels.

### Étape 10 — Création d’une vraie FAQ SEO

La page `src/app/faq/page.js` a été transformée en page éditoriale complète.

Elle répond notamment à ces recherches :

- Qu’est-ce que le FONAREV ?
- Quelle est la mission du FONAREV ?
- Qui peut bénéficier du FONAREV ?
- Comment les victimes sont-elles identifiées ?
- Comment obtenir ou demander une réparation en RDC ?
- Quels sont les types de réparations ?
- Comment accompagner les victimes de violences sexuelles ?
- Comment accéder à la justice en RDC ?
- Que signifie GENOCOST ?
- Qui finance le FONAREV ?

Les réponses sont présentes dans le HTML initial et sont également décrites dans un bloc `FAQPage`.

### Étape 11 — Sitemap XML dynamique

Le sitemap est généré par :

- `src/app/sitemap.js`

Il est accessible en production à :

```text
https://www.fonarev.cd/sitemap.xml
```

Il rassemble :

- les pages statiques définies dans `staticPages` ;
- les articles GENOCOST ;
- les actualités récupérées depuis l’API.

Il ne contient volontairement pas :

- les routes internes `/_next/` ;
- les points d’accès `/api/` ;
- les pages inexistantes ;
- les URL techniques qui ne doivent pas apparaître dans Google ;
- les fichiers PDF, sauf décision éditoriale spécifique.

Pour chaque page, le sitemap peut fournir :

- l’URL absolue ;
- la date de modification ;
- la fréquence indicative de mise à jour ;
- la priorité relative ;
- éventuellement une image.

Important : `lastModified` doit idéalement représenter la vraie date de modification du contenu. Il ne faut pas inventer une nouvelle date à chaque requête uniquement pour attirer Google.

### Étape 12 — Fichier robots.txt

Le fichier est généré par :

- `src/app/robots.js`

Il est accessible à :

```text
https://www.fonarev.cd/robots.txt
```

Il autorise l’exploration du site, bloque les routes API et déclare le sitemap :

```text
User-Agent: *
Allow: /
Disallow: /api/

Host: https://www.fonarev.cd
Sitemap: https://www.fonarev.cd/sitemap.xml
```

Les ressources `/_next/` ne sont pas bloquées : Google peut en avoir besoin pour charger les styles, les scripts et afficher correctement les pages.

### Étape 13 — Gestion des actualités dynamiques

Le fichier `src/app/actualites/[id]/page.js` génère maintenant les métadonnées à partir de l’article demandé.

Pour chaque actualité, le site produit :

- un titre basé sur le titre de l’article ;
- une description extraite du contenu sans balises HTML ;
- une URL canonique ;
- une image sociale lorsqu’elle est disponible ;
- le type Open Graph `article` ;
- un JSON-LD `NewsArticle` ;
- les dates de publication et de modification disponibles ;
- l’organisation FONAREV comme auteur et éditeur.

La récupération distante comporte un traitement d’échec afin de conserver des métadonnées de secours si l’API est temporairement indisponible.

### Étape 14 — Gestion des articles GENOCOST

Les pages `src/app/genocost/[slug]/page.js` disposent de :

- paramètres statiques pour les slugs connus ;
- titre et description propres à chaque article ;
- canonical propre ;
- image de l’article ;
- mots-clés liés au GENOCOST ;
- données structurées `Article` ;
- liens vers les autres contenus du dossier.

### Étape 15 — Maillage interne

Des liens supplémentaires ont été ajoutés pour faciliter la navigation des utilisateurs et des robots :

- accueil vers la FAQ complète ;
- pied de page vers la FAQ ;
- pied de page vers la newsletter ;
- FAQ vers À propos, GENOCOST, Actualités et Contact ;
- articles GENOCOST vers les autres articles du dossier ;
- actualités vers les articles associés et la pétition.

Un bon lien interne doit utiliser un texte descriptif. Exemple recommandé :

```text
Comprendre le GENOCOST
```

Exemple moins utile :

```text
Cliquez ici
```

### Étape 16 — Correction des liens d’actualités

Certains liens utilisaient cette structure incorrecte :

```text
/actualites/details?articleId=123?articleTitle=exemple
```

Ils utilisent maintenant :

```text
/actualites/details?articleId=123&articleTitle=exemple
```

Le premier paramètre commence avec `?` et les suivants avec `&`.

### Étape 17 — Manifest du site

Le fichier `src/app/manifest.js` renseigne :

- le nom complet du site ;
- son nom court ;
- sa description ;
- sa langue ;
- les couleurs de thème ;
- son icône.

Il est publié à :

```text
https://www.fonarev.cd/manifest.webmanifest
```

### Étape 18 — Validation technique

Les contrôles réalisés comprennent :

- compilation de production réussie ;
- génération des pages statiques ;
- validation XML du sitemap ;
- présence des canonical ;
- présence des balises Open Graph ;
- présence des Twitter Cards ;
- présence du JSON-LD de la FAQ ;
- présence du visuel `og.png` ;
- contrôle des espaces ou erreurs de diff.

Commande principale :

```bash
npm run build
```

Lorsque `xmllint` est disponible :

```bash
xmllint --noout .next/server/app/sitemap.xml.body
```

## 4. Procédure après la mise en production

### 4.1 Vérifier les URL publiques

Ouvrir dans un navigateur :

```text
https://www.fonarev.cd/robots.txt
https://www.fonarev.cd/sitemap.xml
https://www.fonarev.cd/manifest.webmanifest
https://www.fonarev.cd/og.png
```

Vérifier qu’aucune URL ne renvoie une erreur 404 ou 500.

### 4.2 Soumettre le sitemap dans Google Search Console

1. ouvrir Google Search Console ;
2. sélectionner la propriété `fonarev.cd` ou `https://www.fonarev.cd/` ;
3. ouvrir le rapport **Sitemaps** ;
4. saisir `sitemap.xml` ;
5. envoyer ;
6. vérifier que le statut devient « Réussite » ;
7. surveiller les erreurs et le nombre d’URL découvertes.

La déclaration dans `robots.txt` permet aussi une découverte automatique, mais la soumission dans Search Console donne un suivi plus clair.

### 4.3 Demander l’indexation des pages prioritaires

Dans l’outil **Inspection de l’URL**, commencer par :

1. la page d’accueil ;
2. la page GENOCOST ;
3. la page À propos ;
4. la page FAQ ;
5. la page Actualités ;
6. les articles stratégiques les plus complets.

Ne pas envoyer des centaines de demandes manuelles. Le sitemap et le maillage interne doivent assurer la découverte normale du reste du site.

### 4.4 Surveiller l’indexation

Chaque semaine au lancement, puis chaque mois :

- consulter le rapport d’indexation ;
- vérifier les pages explorées mais non indexées ;
- rechercher les erreurs 404 et serveur ;
- vérifier les URL considérées comme doublons ;
- vérifier les canonical choisies par Google ;
- suivre les requêtes, impressions, clics et positions ;
- identifier les pages qui se concurrencent sur le même mot-clé.

## 5. Méthode SEO réutilisable pour un autre site

### Phase A — Comprendre le site

Avant de modifier le code :

1. définir l’objectif commercial ou institutionnel ;
2. identifier les publics ;
3. inventorier toutes les pages ;
4. déterminer les pages qui doivent être indexées ;
5. relever les anciennes URL et les redirections nécessaires ;
6. choisir un seul domaine canonique : avec ou sans `www` ;
7. vérifier la langue et le pays ciblés.

### Phase B — Construire la carte des mots-clés

Créer une feuille avec au minimum :

| URL | Mot-clé principal | Mots-clés secondaires | Intention | Title | Description | H1 |
| --- | --- | --- | --- | --- | --- | --- |
| `/service` | service principal | variantes utiles | commerciale | titre unique | résumé unique | titre visible |

Règles importantes :

- une intention principale par page ;
- éviter que deux pages ciblent exactement la même requête ;
- utiliser les variantes naturellement dans le texte ;
- répondre réellement à la question de l’utilisateur ;
- ne pas répéter une liste de mots-clés sans contexte ;
- privilégier la qualité du contenu plutôt que la densité de mots-clés.

### Phase C — Optimiser chaque page

Pour chaque URL indexable, vérifier :

- un titre unique et compréhensible ;
- une méta-description unique ;
- un seul H1 principal ;
- une structure logique H1, H2, H3 ;
- du contenu original et utile ;
- une URL courte et stable ;
- un canonical correct ;
- des images compressées ;
- des attributs `alt` décrivant réellement l’image ;
- des liens internes vers les pages proches ;
- une navigation utilisable sur mobile ;
- des appels à l’action cohérents.

### Phase D — Configurer les aperçus sociaux

Prévoir une image de 1200 × 630 pixels et renseigner Open Graph et Twitter.

Tester notamment :

- le titre ;
- la description ;
- l’URL absolue de l’image ;
- la lisibilité du visuel en petit format ;
- l’absence de texte coupé ;
- la cohérence entre le contenu de la page et l’aperçu.

### Phase E — Ajouter les données structurées pertinentes

Choisir uniquement les types correspondant réellement au contenu :

- `Organization` ou `GovernmentOrganization` ;
- `LocalBusiness` ;
- `WebSite` ;
- `BreadcrumbList` ;
- `Article` ou `NewsArticle` ;
- `FAQPage` ;
- `Event` ;
- `Product` ;
- `JobPosting` ;
- `VideoObject`.

Ne jamais déclarer dans le JSON-LD une information qui n’est pas visible ou vraie sur la page.

### Phase F — Créer le sitemap et robots.txt

Le sitemap doit contenir uniquement les URL :

- canoniques ;
- publiques ;
- accessibles avec un code HTTP 200 ;
- destinées à apparaître dans Google.

Il faut exclure :

- les URL de connexion ;
- les paniers ou espaces personnels ;
- les résultats de recherche internes ;
- les filtres et paramètres sans valeur SEO ;
- les URL dupliquées ;
- les pages redirigées ;
- les pages en erreur ;
- les routes API.

`robots.txt` ne sert pas à supprimer une page déjà indexée. Pour empêcher l’indexation d’une page accessible, utiliser une directive `noindex` appropriée et permettre temporairement au robot de lire cette directive.

### Phase G — Valider avant publication

Checklist minimale :

- [ ] la compilation de production réussit ;
- [ ] toutes les pages importantes répondent en HTTP 200 ;
- [ ] chaque page possède un title unique ;
- [ ] chaque page possède une description unique ;
- [ ] chaque page possède un canonical correct ;
- [ ] Open Graph utilise des URL absolues ;
- [ ] Twitter Card est présente ;
- [ ] le sitemap est un XML valide ;
- [ ] toutes les URL du sitemap sont indexables ;
- [ ] `robots.txt` référence le sitemap ;
- [ ] les ressources CSS et JavaScript ne sont pas bloquées ;
- [ ] les données structurées correspondent au contenu visible ;
- [ ] les liens internes ne renvoient pas de 404 ;
- [ ] les redirections HTTP vers le domaine canonique sont actives ;
- [ ] le site est utilisable sur mobile ;
- [ ] les images importantes ont un `alt` pertinent ;
- [ ] les performances ne se sont pas dégradées.

### Phase H — Publier et suivre

Après publication :

1. soumettre le sitemap ;
2. inspecter les URL prioritaires ;
3. surveiller l’exploration et l’indexation ;
4. suivre les performances des requêtes ;
5. améliorer les pages qui obtiennent des impressions sans clics ;
6. enrichir les contenus proches de la première page ;
7. obtenir des liens entrants légitimes ;
8. publier régulièrement des contenus utiles ;
9. mettre à jour les contenus devenus obsolètes ;
10. mesurer les résultats sur plusieurs semaines et plusieurs mois.

## 6. Stratégie éditoriale recommandée pour le FONAREV

Les prochains contenus devraient être organisés en groupes thématiques.

### Groupe 1 — Comprendre les réparations

- Qu’est-ce qu’une réparation individuelle ?
- Qu’est-ce qu’une réparation collective ?
- Comment les préjudices sont-ils évalués ?
- Comment fonctionne l’identification des victimes ?
- Quels sont les droits des victimes des conflits en RDC ?

### Groupe 2 — Accès à la justice et accompagnement

- Comment accéder à la justice en RDC ?
- En quoi consiste l’accompagnement psychosocial ?
- Comment protéger la confidentialité des victimes ?
- Quel accompagnement juridique est disponible ?
- Comment soutenir la réhabilitation communautaire ?

### Groupe 3 — GENOCOST et mémoire

- Que signifie GENOCOST ?
- Histoire et mémoire du GENOCOST ;
- pourquoi la date du 2 août est importante ;
- témoignages et mémoire des victimes ;
- reconnaissance nationale et internationale ;
- liens entre crimes de masse, ressources et gains économiques.

### Groupe 4 — Institution et transparence

- mission et fonctionnement du FONAREV ;
- présentation de la Loi 22/065 ;
- sources de financement ;
- rapports annuels ;
- résultats des programmes ;
- communiqués et publications officielles.

Chaque article doit renvoyer vers une page principale du même groupe et vers au moins un contenu complémentaire.

## 7. Erreurs SEO à éviter

- promettre une première position garantie ;
- copier tous les mots-clés sur chaque page ;
- créer plusieurs pages presque identiques ;
- utiliser des titres génériques comme « Bienvenue » ;
- changer fréquemment les URL sans redirections ;
- inscrire des URL non canoniques dans le sitemap ;
- bloquer les fichiers CSS et JavaScript nécessaires au rendu ;
- publier des pages vides ou « en construction » en grand nombre ;
- utiliser des descriptions identiques partout ;
- ajouter des données structurées fausses ou invisibles ;
- oublier de mettre à jour les dates et informations institutionnelles ;
- considérer la balise `keywords` comme le facteur principal de classement ;
- négliger le contenu, les performances et les liens entrants.

## 8. Fichiers SEO importants du projet

```text
src/lib/seo.js
src/app/layout.js
src/app/providers.js
src/app/sitemap.js
src/app/robots.js
src/app/manifest.js
src/app/faq/page.js
src/app/actualites/[id]/page.js
src/app/genocost/[slug]/page.js
public/og.png
```

Les fichiers `layout.js` ajoutés dans les différentes rubriques contiennent la stratégie de titre, description et mots-clés de chaque page.

## 9. Définition de « SEO terminé » pour une première version

Une première version SEO peut être considérée comme prête lorsque :

- les pages importantes ont une intention claire ;
- les métadonnées sont uniques ;
- le domaine canonique est cohérent ;
- les robots peuvent explorer le contenu ;
- le sitemap répertorie les URL canoniques ;
- les aperçus sociaux sont corrects ;
- les données structurées sont valides et honnêtes ;
- le maillage interne rend chaque page importante accessible ;
- le site compile et fonctionne en production ;
- Search Console reçoit le sitemap ;
- un calendrier de suivi et de contenu est prévu.

Le SEO reste ensuite un travail continu : observation, publication, mise à jour et amélioration.
