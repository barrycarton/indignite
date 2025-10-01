# indignite
... sur le service public

Une page web interactive de type bingo avec des phrases sur le service public. Cliquez sur une carte pour déclencher une explosion de confettis et un son ! 🎉👩‍⚖️

## 🎯 Fonctionnalités

- **Design minimaliste suisse** : Interface épurée et élégante
- **Cartes aléatoires** : Les phrases sont affichées de manière aléatoire
- **Effets interactifs** : Cliquez sur une carte pour :
  - Déclencher une explosion de confettis avec l'émoji juge femme (👩‍⚖️)
  - Jouer un son agréable
- **Design responsive** : Fonctionne sur mobile, tablette et desktop
- **Déployable sur Cloudflare Pages** : Site statique prêt à déployer

## 🚀 Déploiement

Ce site est conçu pour être déployé sur Cloudflare Pages.

1. Fork ce repository
2. Connectez-vous à [Cloudflare Pages](https://pages.cloudflare.com/)
3. Créez un nouveau projet et connectez votre repository
4. Laissez les paramètres par défaut (pas de build command nécessaire)
5. Déployez !

## 🤝 Contribuer

Nous encourageons les contributions ! Vous pouvez ajouter vos propres phrases au fichier `data.json`.

### Comment contribuer

1. **Fork** ce repository
2. **Éditez** le fichier `data.json` pour ajouter vos phrases
3. **Créez une Pull Request**

Votre contribution sera automatiquement validée par notre GitHub Action qui vérifie :
- La syntaxe JSON est correcte
- Le fichier contient bien une clé `phrases` avec un tableau
- Toutes les phrases sont des chaînes de caractères non vides

### Format du fichier data.json

```json
{
  "phrases": [
    "Votre phrase ici",
    "Une autre phrase",
    "..."
  ]
}
```

## 📝 Licence

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🎨 Technologies utilisées

- HTML5
- CSS3 (design responsive)
- JavaScript vanilla (pas de dépendances)
- Web Audio API pour les sons
- GitHub Actions pour la validation
