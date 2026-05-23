# catalogue-app

Petite application de catalogue produits.
Stack : **Vite + React + TypeScript**, API **Express**, tests **Vitest**.

## Démarrer

```bash
npm install
npm run dev       # front (Vite :5173) + API Node (:3001) ensemble
npm test          # tests Vitest
npm run format    # formatage Prettier (optionnel)
```

Le front proxifie `/api/*` vers `http://localhost:3001` (voir `vite.config.ts`).
Node 18+ recommandé (voir `.nvmrc`).

## Données

`src/data/products.ts` (front) et `server/products.js` (API).
Chaque produit : `id`, `name`, `category`, `price`, `stock`.

## Fonctionnalités

- [x] Afficher la liste des produits (`src/App.tsx`).
- [ ] Recherche par nom, en direct (insensible à la casse).
- [ ] Extraire la logique de filtrage dans `src/filterProducts.ts` (fonction pure).
- [ ] Trier par prix (croissant/décroissant) et par nom, combiné à la recherche.
- [ ] Filtrer par catégorie (catégories déduites des données).
- [ ] API Node : `GET /api/products` et `?search=` ; côté front, remplacer les
      données mockées par un `fetch` avec gestion des états chargement / erreur.
- [ ] Optimiser la recherche (debounce ou annulation de la requête précédente).
- [ ] Tests de `filterProducts` dans `src/filterProducts.test.ts`.
