# Publication officielle : Netlify uniquement

## Cible

- **Site existant à conserver :** https://ventso.netlify.app/
- **Dépôt :** https://github.com/ventso00/portfolio
- **Branche de production :** `main`
- **Code de la V2 :** `index.html`, `404.html`, `_redirects`, `netlify.toml`
- **Application :** HTML/CSS/JavaScript statique, aucune installation ni build requis.

## Blocage vérifié le 5 novembre 2026

Le dépôt `main` contient la V2. Le site Netlify existant répond en HTTP 200, mais renvoie toujours l'ancien design. Une vérification automatisée compare la présence de `Des solutions web` et `UptimePulse V2` dans le HTML public.

Cela indique que la publication GitHub n'a pas mis à jour ce site Netlify ; cela ne démontre pas à lui seul si la cause est une déconnexion de dépôt, une branche de production différente, une publication verrouillée ou des builds désactivés.

## Réparer la publication sur le site Netlify existant

1. Ouvrir https://app.netlify.com/ et choisir le projet possédant déjà le domaine `ventso.netlify.app`. Ne pas créer un deuxième projet Netlify par erreur.
2. Dans **Project configuration → Developer settings → Continuous deployment → Repository**, vérifier que le dépôt lié est `ventso00/portfolio` et que la branche de production est `main`.
3. Si le dépôt n'est pas lié, sélectionner **Link repository** et autoriser le bon dépôt GitHub.
4. Vérifier que **Builds** et **Auto publishing** ne sont pas désactivés, et qu'aucune publication n'est verrouillée.
5. Vérifier les réglages : **Publish directory** = `.` ; **Build command** = vide (site statique).
6. Dans **Deploys**, utiliser **Trigger deploy → Deploy site** ou l'option de relance avec cache vidé lorsque nécessaire.
7. Attendre l'état **Published**, puis ouvrir https://ventso.netlify.app/ et vérifier la nouvelle accroche `Des solutions web, pensées pour être utiles.`.
8. Vérifier que la GitHub Action `Vérifier la publication Netlify` termine en succès ; elle permet de détecter une V2 encore absente du site.

**Sécurité :** ne partager dans aucun chat le jeton Netlify, une clé d'API ou un lien de build hook privé.

## Hébergement alternatif

Le propriétaire souhaite supprimer Vercel. Le site Netlify reste le seul domaine officiel. La suppression définitive du projet Vercel doit être confirmée par son propriétaire dans l'interface Vercel si la connexion à l'équipe n'autorise pas sa suppression.

## Référence

Documentation Netlify : https://docs.netlify.com/deploy/manage-deploys/manage-deploys-overview/
