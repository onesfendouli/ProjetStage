# HR Platform 🏢

[![Angular](https://img.shields.io/badge/Angular-17-red?logo=angular&logoColor=white)](https://angular.io/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3-green?logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/MySQL-8-blue?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

---

## 1. Présentation 📝

HR Platform est une application de gestion des ressources humaines, incluant :

- **Backoffice** 🖥️ : interface d’administration pour gérer les employés, formations et candidats  
- **Frontoffice** 🌐 : interface publique pour consultation des formations et candidatures  

L’application est construite avec un **backend Spring Boot**, un **frontend Angular** et une **base de données MySQL/PostgreSQL**, organisée en **monorepo** pour simplifier le développement et le déploiement.

---

## 2. Architecture 🏗️

Le projet est organisé comme suit :

hr-platform/
├── backend/ ⚙️ # Spring Boot et API REST
├── frontend/ 🌟 # Angular backoffice
├── frontoffice/ 🌐 # Angular frontoffice
└── README.md 📖

markdown
Copier le code

### Backend (Spring Boot) ⚙️
- Expose des **APIs REST** pour chaque entité (`Employee`, `Formation`, `Candidat`)  
- Serveur Tomcat intégré sur **port 8081**  
- Sert également le build Angular pour la production  
- Gestion des données via Spring Data JPA et base de données relationnelle  

### Frontend Backoffice 🌟
- Développé avec Angular 17  
- Comprend **composants, services et modèles** pour chaque entité  
- Interface d’administration pour gérer toutes les données RH  

### Frontend Frontoffice 🌐
- Développé avec Angular 17  
- Interface utilisateur publique pour consulter les formations et candidatures  
- Interaction avec le backend via les mêmes APIs REST  

---

## 3. Technologies 🛠️

| Côté | Technologie | Icône / Badge | Rôle |
|------|------------|---------------|------|
| Backend | Spring Boot | ⚙️ | Serveur REST et logique métier |
| Backend | Spring Data JPA | 🗄️ | Gestion base de données |
| Frontend | Angular 17 | 🌟 | Backoffice |
| Frontend | Angular 17 | 🌐 | Frontoffice |
| Base de données | MySQL/PostgreSQL | 🛢️ | Stockage des données |
| Déploiement | Maven, Node.js | 📦 | Build et packaging |

---

## 4. Fonctionnalités principales ✅

- Gestion des **employés** 👥  
- Gestion des **formations** 🎓  
- Gestion des **candidats** 📝  
- Authentification et gestion des rôles 🔐  
- Dashboard backoffice 📊 pour statistiques et rapports  
- Frontoffice 🌐 pour consultation des formations et candidatures  

---

## 5. Frontend – Organisation et fonctionnement 🌟🌐

### 5.1 Structure

- **Composants Angular** : interface utilisateur pour chaque fonctionnalité (liste, ajout, modification)  
- **Services Angular** : pont entre les composants et le backend pour les opérations CRUD  
- **Modèles TypeScript** : définition des entités (`Employee`, `Formation`, `Candidat`) pour typage et validation  

### 5.2 Communication avec le backend

- Tous les composants Angular utilisent les services correspondants  
- Les services Angular appellent les **endpoints REST du backend**  
- Les réponses JSON sont traitées et affichées dynamiquement dans les composants  

### 5.3 Différence backoffice / frontoffice

| Partie | Utilité | Interaction |
|--------|---------|------------|
| Backoffice 🌟 | Gestion administrative RH | CRUD complet via API |
| Frontoffice 🌐 | Interface utilisateur publique | Consultation des données via API |

---

## 6. API Endpoints 📡

Exemple pour l’entité **Employee** :

| Méthode | URL | Description |
|---------|-----|-------------|
| GET | /api/employees | Liste tous les employés |
| POST | /api/employees | Ajouter un employé |
| PUT | /api/employees/{id} | Mettre à jour un employé |
| DELETE | /api/employees/{id} | Supprimer un employé |

> Tous les services Angular sont connectés à ces endpoints.

---

## 7. Git & Monorepo 🌳

- Tous les projets (backend, frontend, frontoffice) sont dans **un seul repo Git**  
- Branches recommandées :
  - `main` 🟢 : production
  - `dev` 🔵 : développement général
  - `feature/backend` ⚙️ : backend
  - `feature/frontend` 🌟 : frontend  

- `.gitignore` :
  - backend : `/target/`, `.idea/`, `*.iml`  
  - frontend : `/node_modules/`, `/dist/`  

---

## 8. Contributions 🤝

- Crée une branche feature avec un nom clair  
- Commit avec un message précis  
- Push et crée un Pull Request vers `dev`

---

## 9. Auteur ✍️

- **Nom** : Fendouli Ones 
- **Projet** : HR Platform For Finding  a Job  
- **Email** : onesfendouli72@gmail.com  

---

## 10. Liens utiles 🔗

- [Angular Docs](https://angular.io/docs)  
- [Spring Boot Docs](https://spring.io/projects/spring-boot)  
- [MySQL Docs](https://www.mysql.com/)  
