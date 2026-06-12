# Intégration Google Places API — Note en temps réel

## Ce qui a été ajouté

- **`src/routes/api/google-rating.ts`** — endpoint Cloudflare Worker qui interroge l'API Places (New)
- **`src/hooks/use-google-rating.ts`** — hook React Query pour consommer l'endpoint
- **`src/routes/index.tsx`** — note et nombre d'avis dynamiques dans la section hero
- **`src/routes/avis.tsx`** — note dynamique + liens Google corrects (voir avis / laisser un avis)

## Place ID utilisé

```
ChIJF2sXKTjB9EcR6ty4qnkxDlw
```

→ N'as du Volant, 133 Av. Franklin Roosevelt, 69500 Bron

## Obtenir une clé API Google Places

1. Aller sur https://console.cloud.google.com/
2. Créer un projet (ou utiliser un existant)
3. Activer l'API **"Places API (New)"**
4. Créer des identifiants → Clé API
5. Restreindre la clé à l'API Places et aux IP de votre Worker (recommandé)

> L'appel utilisé (`rating` + `userRatingCount` uniquement) correspond au SKU
> **"Places Details - Basic"** — environ 0,017 $ pour 1 000 requêtes.
> Avec le cache CDN Cloudflare (1h), le coût réel est négligeable.

## Configurer la clé sur Cloudflare Workers

### Option 1 — Secret (recommandé, la clé n'apparaît jamais dans les logs)

```bash
wrangler secret put GOOGLE_PLACES_API_KEY
# → coller la clé quand demandé
```

### Option 2 — Dashboard Cloudflare

Workers & Pages → votre Worker → Settings → Variables & Secrets → Add variable
Nom : `GOOGLE_PLACES_API_KEY` / Type : Secret

## Comportement si la clé n'est pas configurée

L'endpoint retourne un fallback avec les valeurs `4,9` / `233` avis — le site
reste entièrement fonctionnel, sans erreur visible pour l'utilisateur.

## Liens Google générés automatiquement

| Usage | URL |
|---|---|
| Voir les avis | `https://www.google.com/maps/place/?q=place_id:ChIJF2sXKTjB9EcR6ty4qnkxDlw` |
| **Laisser un avis** | `https://search.google.com/local/writereview?placeid=ChIJF2sXKTjB9EcR6ty4qnkxDlw` |

Le lien "laisser un avis" ouvre **directement le formulaire d'avis Google** (pas une recherche).
