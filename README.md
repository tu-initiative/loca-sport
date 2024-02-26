<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h2 align="left">📅 Court Booking App</h3>
  <p align="left">
    An application that helps court owners manage their facilities and meet their customers!!
  </p>
</div>


<!-- GETTING STARTED -->
## :rocket: Getting Started

### 💪 Prerequisites

Make sure those libraries are installed
1. node (version 20 is recommended)
2. yarn
3. docker

### 🛠️ Installation

After finishing clone this repository. Install the requirement dependencies.
```
yarn install
```

Create `.env` files.
```
cp .env.example ./env
```

Run the postgresql database inside docker.
```
docker compose up -d
```

Migrate the database.
```
nx run api:migrate
```

<!-- TODO: update instruction to seed db later -->

Generate required types for both backend & frontend
```
nx run-many -t generate
```

Start the backend service
```
nx serve api
```

Start the frontend service 
```
nx dev web
```
