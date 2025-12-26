# NS!! RECORDS - SITE OFFICIEL

## 🎂 À PROPOS DU PROJET

Ce site web a été créé spécialement pour l'anniversaire de NS!!, artiste du label NS!! Records. Le projet combine une présentation professionnelle du catalogue musical avec une DA unique choisis par NS lui meme :)

## 🎵 DESCRIPTION

Site officiel du label NS!! Records présentant :
- Les albums de l'artiste NS!!
- Les singles et sorties musicales
- Un système de countdown pour les prochaines sorties
- Les informations de contact et remerciements

## ✨ FONCTIONNALITÉS

### Page d'Accueil
- Animation de terminal de connexion immersive
- Message d'anniversaire personnalisé avec logo blanc
- Design rétro inspiré des systèmes d'exploitation vintage

### Albums
- **PROGRAM** : Album instrumental ambient basé sur des commandes Linux
- **APRÈS COUP** : Album horror-core racontant l'histoire de Sam et Sarah
- Albums 3 & 4 : Placeholders pour futures sorties

### Singles
- Présentation des singles avec layout alterné
- Liens vers toutes les plateformes de streaming

### Countdown
- Compte à rebours personnalisable pour les prochaines sorties
- Design minimaliste et épuré

### Pages Informatives
- Contact avec liens vers réseaux sociaux
- Page de remerciements

## 🛠️ TECHNOLOGIES

- **HTML5** : Structure du site
- **CSS3** : Design avec animations et transitions
- **JavaScript Vanilla** : Animations interactives, terminal, countdown
- **Font** : Disket-Mono (Regular & Bold)

## 📁 STRUCTURE DU PROJET

```
NSWEBSITE/
├── index.html              # Page d'accueil avec animation terminal
├── css/
│   └── style.css          # Tous les styles du site
├── js/
│   ├── script.js          # Menu et marquee
│   ├── terminal.js        # Animation de terminal
│   └── countdown.js       # Timer de countdown
├── html/
│   ├── albums.html        # Grille des albums
│   ├── singles.html       # Liste des singles
│   ├── countdown.html     # Page countdown
│   ├── program.html       # Détails album PROGRAM
│   ├── apres-coup.html    # Détails album APRÈS COUP
│   ├── album3.html        # Placeholder album 3
│   ├── album4.html        # Placeholder album 4
│   ├── contact.html       # Informations de contact
│   └── remerciements.html # Page de remerciements
├── images/
│   └── (logos et covers)
├── font/
│   └── (Disket-Mono fonts)
└── README.md
```

## ⚙️ CONFIGURATION

### Modifier la Date du Countdown

Pour changer la date du countdown, éditer le fichier `js/countdown.js` ligne 7 :

```javascript
const countdownDate = new Date("2025-12-31 23:59:59").getTime();
```

Format : `"YYYY-MM-DD HH:MM:SS"`

## 🎨 DESIGN

- **Thème** : Dark mode avec accents blancs
- **Typographie** : Disket-Mono (police monospace rétro)
- **Couleurs** : Noir (#000) et Blanc (#fff)
- **Animations** : Transitions fluides, effets de glow, scale au hover
- **Responsive** : Design adaptatif pour mobile (breakpoint à 768px)

## 🔗 LIENS

- **NS!! Instagram** : [@nicacolak](https://www.instagram.com/nicacolak/)
- **PAY.EXE GitHub** : [@PayExe](https://github.com/PayExe)
- **Email de l'artiste** : nsrecordslabel@gmail.com

## 🎁 CRÉDITS

**Développement & Design** : PAY.EXE  
**Artiste** : NS!!  
**Projet créé pour** : L'anniversaire de NS!!

## 📝 NOTES

- Les liens vers les plateformes de streaming sont actuellement des placeholders (#)
- Album 3 et Album 4 sont des pages placeholders en attente de contenu
- Le site utilise des animations GPU-accelerated pour des performances optimales

---

**MADE BY PAY.EXE** 🎂
