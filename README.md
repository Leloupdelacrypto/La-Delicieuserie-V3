# La Délicieuserie — Site vitrine

Site vitrine statique pour **La Délicieuserie** (biscuiterie artisanale personnalisée à Calais).  
Stack ultra-léger : **HTML + CSS + JS** (pas de framework).

---

## 🚀 Mise en ligne sur GitHub Pages

1. Crée un dépôt public sur GitHub (ex. `delicieuserie-site`).  
2. Glisse/dépose tous les fichiers de ce dossier dans le dépôt (**Upload files**).  
3. Va dans **Settings → Pages** :  
   - **Source** : *Deploy from a branch*  
   - **Branch** : `main` / `/ (root)`  
   - **Save**  
4. Ton site sera accessible sous : `https://<ton-pseudo>.github.io/delicieuserie-site/`

---

## 📁 Structure
```
index.html
styles.css
script.js
assets/
  └── logo.png
images/
  ├── fond-biscuits.jpg
  ├── atelier.jpg
  ├── produit1.jpg
  ├── produit2.jpg
  ├── produit3.jpg
  └── logos/
      ├── orpi.png
      ├── peugeot.png
      ├── citroen.png
      ├── casino-calais.png
      └── airbnb.png
```

---

## 🎨 Marque & design

- **Couleurs** :  
  - Primaire (orange) `#f28b39`  
  - Accent (bleu) `#7aaacb`  
- **Typographies** :  
  - Titres & CTAs : **Montserrat**  
  - Texte courant : **Source Sans 3**

Tu peux ajuster les tokens de design en haut de `styles.css` (variables `:root`).

---

## 🧩 Sections

- **Hero** : claim + CTA “Voir les modèles” / “Obtenir un devis”  
- **Pourquoi nous choisir** : 3 cartes (bio / 100% perso / accompagnement)  
- **Produits** : 3 cartes exemples (prénoms, logo, mariage)  
- **Entreprises** : mur de logos + points clés + CTA pro  
- **Tarifs indicatifs** : 3 cartes (prix TTC / quantités mini)  
- **Témoignages** : slider léger (autoplay desktop)  
- **Contact** : coordonnées + formulaire (compatible Netlify)

---

## 🖼️ Images

Les images actuelles sont des **placeholders** : remplace-les par tes propres photos **en gardant les mêmes noms** (ainsi, rien à modifier dans le code).  
- `images/fond-biscuits.jpg` : image de fond du header  
- `images/produit1.jpg..3.jpg` : cartes produits  
- `images/atelier.jpg` : visuel “À propos”  
- `images/logos/*.png` : mur de logos entreprises

> Astuce : exporte tes photos en **JPG 70–80%** et vise **1600–2000 px** de large pour un bon équilibre qualité/poids.

---

## 🔧 Personnalisation rapide

- **Texte** : modifie les contenus directement dans `index.html`.  
- **Tarifs** : section `#tarifs` → adapte prix, quantités, options.  
- **Coordonnées** : section `#contact` + top-banner.  
- **Réseaux sociaux** : liens dans le footer.

---

## ♿ Accessibilité & UX
- Lien d’évitement *“Aller au contenu principal”*  
- Menu mobile avec `aria-expanded`  
- Contrastes testés sur le thème par défaut

---

## 📦 Développement local
Ouvrir `index.html` dans ton navigateur suffit. Pour un petit serveur local :

```bash
# Python 3
python -m http.server 8080
# puis va sur http://localhost:8080
```

---

## 📄 Licence
Code du template placé sous licence **MIT**.  
Les **images** sont à remplacer par tes propres visuels ou des images libres compatibles **usage commercial**.

---

_Fichier généré le 2025-09-16._

---

## 🔄 CI : Optimisation auto
- À chaque **push sur `main`**, GitHub Actions optimise les images (`/images`) et génère `dist/styles.min.css` & `dist/script.min.js`.
- Les fichiers optimisés sont **auto-commit** au dépôt.

### Utiliser les versions minifiées en prod
Dans `index.html`, tu peux pointer vers `dist/styles.min.css` et `dist/script.min.js` si tu veux, ou garder les versions non-minifiées.
