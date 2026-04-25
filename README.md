# ZePouce Landing Page

Landing page officielle de **ZePouce** — Le partage sans blabla.

## Installation locale

```bash
# Clone le repo
git clone https://github.com/zepouce/landing.git
cd landing

# Installe les dépendances
npm install

# Lance le serveur de développement
npm start
```

L'app s'ouvre automatiquement sur `http://localhost:3000`

## Build pour production

```bash
npm run build
```

Le dossier `build/` est prêt à être déployé sur Netlify, Vercel, ou n'importe quel serveur HTTP.

## Déploiement sur Netlify

1. Push le code sur GitHub
2. Va sur [netlify.com](https://netlify.com)
3. "New site from Git" → sélectionne `zepouce/landing`
4. Deploy automatique ! ✨

## Architecture

```
zepouce-landing/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx           # Composant principal
│   └── index.js          # Point d'entrée
├── package.json
├── .gitignore
└── README.md
```

## Stack

- **React** 18.2
- **Tailwind CSS** (inline styles)
- **Lucide React** (icons)
- **Netlify** (hosting)

## Newsletter

Le formulaire newsletter est actuellement en simulation. Pour activer les vrais emails :

### Option 1 : Netlify Forms
```jsx
<form name="newsletter" method="POST" netlify>
  <input type="email" name="email" required />
  <button type="submit">Rejoindre</button>
</form>
```

### Option 2 : EmailJS
Ajoute EmailJS dans `App.jsx` et configure tes IDs.

### Option 3 : Formspree
Crée un formulaire sur [formspree.io](https://formspree.io)

## Contact

📧 Besoin d'aide ? Contacte-nous via la landing !

---

**ZePouce** © 2026 · Le partage sans blabla 🖐️
