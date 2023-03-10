import { createSlice } from "@reduxjs/toolkit";
import Booki from "../Assets/Booki-screen.webp"
import OhMyFood from "../Assets/OhMyFood-screen.webp"
import LaPanthere from "../Assets/LaPanthere-screen.webp"
import Kanap from "../Assets/Kanap-screen.webp"
import Piiquante from "../Assets/Piiquante-screen.webp"
import Kasa from "../Assets/Kasa-screen.webp"
import Corbeau from "../Assets/Corbeau-sur-crâne-01.webp"

export const CarousselSlice = createSlice({
    name : "Carrousel",
    initialState : {
        carrouselIndex : 0,
        carrouselData : [{
            id :"1",
            title: "Booki",
            image : Booki,
            description : "Dans ce premier projet, l'objectif était de réaliser une page web en HTML et CSS à partir d'une maquette qui m'a été fournis. Le repect de cette dernière était primordiale pour la réussite du projet. J'ai dû découper la maquette pour pouvoir la réaliser en HTML et utiliser Flexbox pour faire la mise en forme. Des effets au survol ont été ajouté sur certain élément. L'utilisation de Fontawsome et de GoogleFont étaient également demandé",
            Langages : "HTML5, CSS3"
        },
        {
            id:"2",
            title: "Oh My Food",
            image : OhMyFood,
            description:"Oh My Food est le second projet réaliser lors de ma formation, ici le but était de créer un site pour commander dans divers restaurant. Plusieurs pages étaient nécessaires et cela à également permis d'utiliser le préprocesseur Sass ainsi que de faire des animations CSS. Cela a permis d'améliorer mon niveau de compréhension et d'usage du CSS",
            Langages:"HTML5, CSS3, Sass"
        },
        {
            id:"3",
            title: "La Panthère",
            image : LaPanthere,
            description: "Le but de ce projet est de se former aux principes du SEO et d'optimisation du site. Ainsi je devais auditer le site afin de connaitre ces performances et examiner le code pour l'optimiser et retirer tout ce qui est reconnu comme des techniques de Black Hat (comme mettre en tout petit et de la même couleur que le fond des mots-clés par exemple), assurrer l'accessibilité du site en faisant en sorte qu'il n'y a pas de texte important dans les images, en veillant à ce que le texte soit de la bonne taille, et que les contrastes soient suffisants. Pour finir un petit peu d'optimisation, notamment sur les images pour qu'elles aient le format approprié pour un site internet" 
        },
        {
            id:"4",
            title: "Kanap",
            image : Kanap, 
            description : "Le projet Kanap est un site de e-commerce qui vend des canapés. J'avais à disposition le site déjà prêt, ma mission était de le rendre dynamique grâce à JavaScript. Ainsi j'ai pu afficher les produits disponibles en requêtant une API et en intégrant dans la page web les éléments HTML nécessaire. De plus, je devais afficher les détails d'un produit lorsque l'on cliquait sur ce dernier sur la page d'accueil et ce grâce à la récupération de données via l'URL afin de requêter l'API pour ce produit spécifiquement et de manière dynamique. Sur ces détails, il est possible de sélectionner une couleur et une quantité et d'ajouter le produit dans le panier. Le panier qui s'affiche en fonction de ce qu'il y a dans le localstorage et qui se calcul de manière dynamique. Enfin pour valider la commande, le formulaire est vérifié via des Regex afin que les données transmisent par le client soient valides pour ainsi valider la commande",
            Langages:"JavaScript"
        },
        {
            id :"5",
            title: "Piiquante",
            image : Piiquante,
            description : "Sur ce projet, mon objectif était de bâtir une API REST afin de permettre à un site de partage de sauce piquante de proposer à ces utilisitateurs de se connecter, d'ajouter une sauce avec un titre, une image, etc... Mais aussi la possibilité de la modifier et de la suppprimer. Un système de like/dislike a été ajouté. Les données sont enregistrées sur une base de données MongoDB. Le serveur a été crée avec express, et la sécurisation des mots de passe est assurée via Bcrypt. Un système de validation des emails est également présente pour s'assurer qu'un email ne soit utilisé que pour un seul compte et que ce dernier soit valide.",
            Langages :"JavaScript, Express, MongoDB, Bcrypt" 
        },
        {
            id:"6",
            title: "Kasa",
            image : Kasa,
            description : "La mission lié à ce projet, est de bâtir la partie front-end du site immobilier Kasa. Pour cela j'ai utilisé React.js ainsi que react router dom afin de créer les chemins nécessaires à la navigation sur le site. J'ai ainsi découvert le fonctionnement de React et de son système de composants ainsi que son système de hook qui permet de manipuler l'état de nos composants, ainsi que les props qui permettent de personnaliser à volonté nos composants les rendant réutilisable à l'infini. Comme pour le projet Kanap, la récupération de données via l'URL a été utilisé pour récupéré le nécessaire afin d'afficher les détails sur une location. Tout le site est créer en Single Page Application. Ce dernier projet de ma formation, m'a permis de revoir et d'utiliser tout ce que j'ai pu voir auparavant, en l'adaptant à l'écriture de React ",
            Langages : "React.js, Sass" 
        },
        {
            id:"7",
            title: "Portefolio",
            image : Corbeau,
            description : "Et oui mon portefolio est un projet en lui même ! Pour toujours m'améliorer, j'ai réutilisé tout ce que j'ai appris lors de ma formation. En effet, je l'ai créé sous React.js avec une touche de Redux pour découvrir comme cela fonctionne. De même, j'ai appris comment faire de la 3D mais aussi améliorer mon niveau en animation fait via CSS. J'ai également pû créer un mini-jeux pour rendre ce portefolio plus immersif et amusant. Tout cela pour stimuler mon imagination et ma créativité. Mais aussi apprendre de nouvelle chose, progresser, me dépasser pour m'améliorer",
            Langages : "React.js, Redux, Sass"
        }],
    },
    reducers : {
        prochainCaroussel : (state, action) => {
            var tailleTableau  = state.carrouselData.length;
            if (state.carrouselIndex < tailleTableau - 1) {
                state.carrouselIndex = state.carrouselIndex + 1;
            }
            else {
                state.carrouselIndex = 0;
            }
        },
        precedentCaroussel : (state, action) => {
            var tailleTableau  = state.carrouselData.length;
            if (state.carrouselIndex > 0){
                state.carrouselIndex -= 1;
            }
            else {
                state.carrouselIndex = tailleTableau - 1;
            }
        }
    }
})

export const {prochainCaroussel, precedentCaroussel} = CarousselSlice.actions;
export default CarousselSlice.reducer;