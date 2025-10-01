# Contributing to Indignite

Merci de votre intérêt pour contribuer à Indignite ! 🎉

## Comment contribuer des phrases

La façon la plus simple de contribuer est d'ajouter de nouvelles phrases au fichier `data.json`.

### Étapes rapides

1. **Fork** ce repository sur GitHub
2. **Éditez** le fichier `data.json` directement sur GitHub ou localement
3. **Ajoutez** vos phrases dans le tableau `phrases`
4. **Créez** une Pull Request avec vos changements

### Format du fichier data.json

Le fichier `data.json` contient un simple tableau de phrases :

```json
{
  "phrases": [
    "Justice pour tous",
    "Égalité devant la loi",
    "Votre nouvelle phrase ici"
  ]
}
```

### Règles pour les phrases

✅ **À faire :**
- Utilisez des phrases courtes et percutantes
- Respectez le thème du service public
- Vérifiez qu'il n'y a pas de doublons
- Utilisez un français correct

❌ **À éviter :**
- Phrases trop longues (plus de 50 caractères)
- Contenu offensant ou inapproprié
- Doublons de phrases existantes
- Phrases vides

### Validation automatique

Lorsque vous créez une Pull Request, notre GitHub Action vérifie automatiquement :

- ✅ La syntaxe JSON est correcte
- ✅ Le fichier contient une clé `phrases`
- ✅ Toutes les phrases sont des chaînes de caractères
- ✅ Aucune phrase n'est vide
- ⚠️ Avertissement si des doublons sont détectés

Si la validation échoue, vous verrez un message d'erreur clair expliquant ce qui doit être corrigé.

## Autres types de contributions

### Améliorations du design

Si vous souhaitez améliorer le design :
1. Modifiez `style.css`
2. Assurez-vous que le design reste minimaliste et responsive
3. Testez sur mobile, tablette et desktop
4. Créez une Pull Request avec des captures d'écran

### Améliorations du code JavaScript

Pour les améliorations du code :
1. Modifiez `script.js`
2. Testez le fonctionnement des cartes, du son et des confettis
3. Assurez-vous que le code fonctionne sur tous les navigateurs modernes
4. Créez une Pull Request avec une description détaillée

### Documentation

Pour améliorer la documentation :
1. Modifiez `README.md`, `CONTRIBUTING.md` ou `DEPLOYMENT.md`
2. Assurez-vous que les instructions sont claires
3. Créez une Pull Request

## Tester localement

Pour tester vos changements localement :

```bash
# Clonez votre fork
git clone https://github.com/VOTRE-USERNAME/indignite.git
cd indignite

# Démarrez un serveur local
python3 -m http.server 8080
# Ou avec Node.js :
npx serve

# Ouvrez http://localhost:8080 dans votre navigateur
```

## Code de conduite

- Soyez respectueux envers tous les contributeurs
- Restez constructif dans vos commentaires
- Concentrez-vous sur l'amélioration du projet
- Amusez-vous ! 🎉

## Questions ?

Si vous avez des questions, n'hésitez pas à :
- Ouvrir une [issue](https://github.com/barrycarton/indignite/issues)
- Commenter une Pull Request existante

Merci pour votre contribution ! 👩‍⚖️
