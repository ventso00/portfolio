# Portfolio — Ventso Rajaomanjato

**Assistant technique & Développeur IT** · Madagascar · Français

La branche `redesign/assistant-technique-it-2026` contient une refonte éditoriale et visuelle de la landing page Netlify : design clair, navigation minimale, animations discrètes, graphiques techniques SVG originaux, projets documentés et compatibilité mobile.

## Site de destination

https://ventso.netlify.app/

Ce lien pointe sur le projet Netlify existant `ventso`. La nouvelle branche **ne correspond pas automatiquement au contenu publié**. La publication en production nécessite une validation et une opération de déploiement Netlify.

## Technologies du portfolio

HTML, CSS, JavaScript natif ; aucune bibliothèque frontend nécessaire et aucune dépendance installée au lancement.

## Vérifier

```bash
node tests/check-static.mjs
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000` et tester le parcours. Les tests Playwright sont décrits dans `tests/portfolio.spec.mjs` ; les GitHub Actions de la branche fournissent des captures pour plusieurs tailles d'écran.

## Pages et contenus

- `index.html` : landing page unique — accueil, compétences, projets, méthode, parcours, contact.
- `404.html` : page d'erreur claire.
- `netlify.toml` et `_redirects` : configuration du site statique.
- `robots.txt`, `sitemap.xml`, `llms.txt` : informations d'indexation.

Les visuels de projets sont des maquettes illustratives CSS. Aucun visuel Pinterest ou Canva sous droits tiers n'est copié.

## Projet Netlify existant

Le projet `ventso` affiche encore un déploiement ancien du **30 octobre 2026**, créé via une source API. Les changements GitHub ne produisent pas de nouvelle publication automatiquement dans la configuration observée.

Pour mettre cette branche en ligne :
1. Faire approuver la présentation et fusionner la branche dans `main`.
2. Depuis `https://app.netlify.com/projects/ventso/overview`, vérifier que le dépôt `ventso00/portfolio` et la branche `main` sont reliés.
3. Dans la section **Deploys**, relancer le déploiement du site existant ; configuration : dossier publié `.`, commande de build vide.
4. Vérifier le déploiement publié et comparer les éléments de la page publique avec le HTML GitHub. Ne pas créer un second projet Netlify.
