# Portfolio — Ventso Rajaomanjato

Portfolio statique en français : **Développeur web Full-Stack junior** basé à Madagascar, React / Node.js / Express et assistance applicative.

Site officiel actuel : https://ventso.netlify.app/  
**Cette branche est une proposition de refonte et n'est pas approuvée pour la production.**

## Structure

- `index.html` : page complète autonome en HTML, CSS et JavaScript, sans dépendance de compilation.
- `llms.txt`, `sitemap.xml`, `robots.txt` : informations de référencement.
- `netlify.toml` et `_redirects` : configuration de routage et d'hébergement héritée.
- `tests/check-static.mjs` : validations statiques sans dépendances npm.
- `docs/PROFILE_README_DRAFT.md` : brouillon du README GitHub personnel.

## Design

Refonte éditoriale en français, responsive, sans framework et sans dépendances JS externes ; menu mobile accessible, navigation au clavier, option de réduction des animations, cartes de projets, contact par email.

Les aperçus des projets sont **illustratifs** et non des captures authentifiées des logiciels. Les projets sont personnels/académiques.

## Vérifier la branche en local

1. Cloner le dépôt et passer sur la branche `draft/fullstack-remote-profile-2026`.
2. Lancer `node tests/check-static.mjs` (Node.js 18+).
3. Ouvrir `index.html` en local. Pour un serveur statique local, utiliser `python -m http.server 8000` puis ouvrir `http://localhost:8000`.
4. Vérifier manuellement sur écran mobile et ordinateur : navigation, liens, textes, lisibilité, contraste, contact et défilement.

## Avant toute validation finale

- Inspecter le rendu à 320, 375, 768, 1024 et 1440 px.
- Tester menu mobile et parcours clavier.
- Vérifier les URL GitHub et les contacts.
- Contrôler les contenus de projets et leurs limites.
- Vérifier l'état du service Netlify et des éventuels aperçus automatiques.
- Actualiser le CV de développement avant de proposer un bouton de téléchargement ; le CV historique n'est pas mis en avant.
- Vérifier les anciens fichiers `portfolio.html` et les PDF avant toute suppression éventuelle.

**Interdiction dans ce travail :** fusion dans `main` ou déploiement volontaire sans validation explicite du propriétaire.
