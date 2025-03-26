# 🎬 API db-cinematic  

Cette API permet de **récupérer**, **ajouter** et **supprimer** des films et leurs séances dans une base de données `db-cinematic`.  
Le script de création de la base de données est disponible dans le fichier [`scriptCreationBDD.sql`](./scriptCreationBDD.sql).

---

## 🚀 Installation et Mise en route  

### 1️⃣ Cloner le projet  
Clonez le projet en exécutant la commande suivante :  
```sh
git clone https://github.com/AlexandreOneFire22/NitroJS-Alexandre-Nolan.git
```
Accédez au dossier du projet :
```sh
cd NitroJS-Alexandre-Nolan
```

### 2️⃣ Installer les dépendances
Installez les dépendances en exécutant :
```sh
npm install
```

Accédez ensuite au dossier `nitro-app` et installez ses dépendances :
```sh
cd nitro-app
```
```sh
npm install
```

### 3️⃣ Lancer le projet
Démarrez l'application avec la commande :
```sh
npm run dev
```

### 4️⃣ Installer `fnm` (Facultatif)
Pour gérer la version de Node.js, vous pouvez installer `fnm` (si npm n'est pas reconnu en nom d'applet) :
```sh
winget install Schniz.fnm
fnm install 22
```

---

## 📌 Endpoints disponibles

| Méthode  | Endpoint                 | Description |
|----------|--------------------------|-------------|
| `GET`    | `/api/films`             | Récupère la liste des films |
| `GET`    | `/api/films/[id]`        | Récupère les détails d’un film par son ID |
| `GET`    | `/api/films/[id]/seance` | Récupère les séances d’un film |
| `POST`   | `/api/films/add`         | Ajoute un nouveau film |
| `DELETE` | `/api/films/[id]/delete` | Supprime un film |
| `PUT`    | `/api/films/[id]/update` | Supprime un film |

---

## 🛠 Technologies utilisées

- **Node.js**
- **NitroJS**
- **Mysql2**
- **Base de données SQL (`db-cinematic`)**

---

## 📜 Licence
Ce projet est sous licence libre. Vous pouvez le modifier et l’utiliser comme bon vous semble.

---

💡 *Projet développé par [AlexandreOneFire22](https://github.com/AlexandreOneFire22) et [Roiborgne](https://github.com/Roiborgne) 🔥