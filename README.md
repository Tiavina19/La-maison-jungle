# La Maison Jungle 🌿

Bienvenue sur La Maison Jungle, un projet de boutique en ligne pour les amoureux des plantes, développé avec React. Ce projet a été conçu pour mettre en pratique les concepts fondamentaux et avancés de React, de la gestion de l'état à la création d'une interface utilisateur moderne et responsive.

---

## Fonctionnalités

- **Catalogue de plantes** : Affichage des plantes dans une grille élégante avec des effets de survol.
- **Filtrage par catégorie** : Un menu déroulant permet de filtrer les plantes par catégorie (classique, extérieur, plante grasse).
- **Panier dynamique** :
  - Ajout d'articles au panier.
  - Suppression individuelle d'un article.
  - Vidage complet du panier.
  - Calcul du total en temps réel.
- **Mise à jour du titre de la page** : Le titre de l'onglet du navigateur (`document.title`) se met à jour dynamiquement avec le montant total du panier grâce à `useEffect`.
- **Interface utilisateur moderne** :
  - Animations d'apparition sur les éléments.
  - Effets de survol (hover) sur les cartes des plantes et les boutons.
  - Design épuré et cohérent.
- **Entièrement Responsive** : L'interface s'adapte parfaitement aux différentes tailles d'écran (mobile, tablette et ordinateur de bureau) grâce aux Media Queries.
- **Newsletter** : Un champ de saisie dans le footer pour s'inscrire à la newsletter, avec une validation basique de l'email.

---

## Technologies utilisées

- **React.js** (v18+)
  - Hooks : `useState`, `useEffect`
  - Props, Children, Gestion des événements
- **JavaScript (ES6+)**
- **CSS3**
  - Flexbox & Grid pour la mise en page
  - Animations (`@keyframes`) et Transitions
  - Media Queries pour le design responsive
- **HTML5** sémantique

---

## Démarrage rapide

Pour lancer le projet en local, suivez ces étapes :

1.  **Clonez le dépôt**

    ```bash
    git clone https://github.com/Tiavina19/la-maison-jungle.git
    cd la-maison-jungle
    ```

2.  **Installez les dépendances**

    ```bash
    npm install
    ```

3.  **Lancez le serveur de développement**
    ```bash
    npm start
    ```
    L'application sera alors accessible à l'adresse `http://localhost:3000`.

---

## Scripts disponibles

Dans ce projet, vous pouvez exécuter :

- `npm start`: Lance l'application en mode développement.
- `npm test`: Lance les tests en mode interactif.
- `npm run build`: Construit l'application pour la production dans le dossier `build`.
- `npm run eject`: Ejecte la configuration de Create React App (opération irréversible).

---
