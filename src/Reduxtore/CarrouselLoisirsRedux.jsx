import { createSlice } from "@reduxjs/toolkit";
import Dessin from '../Assets/dessin.webp'
import Jv from '../Assets/jv.webp'
import Livre from '../Assets/livre.webp'

//logique des flèches pour déplacer les images du carrousel
export const CarrouselLoisirsSlice = createSlice({
    name : "CarrouselLoisirs",
    initialState : {
        index : 0,
        data : [
            {
                "id" : "1",
                "title": "Dessiner",
                "description" : "Comme vous avez pu le remarquer en entrant dans la bibliothèque, j'aime dessiner. Cela me permet d'exprimer mon côté créatif et de libéré mon imagination. Mes dessins sont réaliser à la main. Puis je les numérise pour pouvoir les mettre au propre, et les colorier grâce à illustrator et photoshop. N'hésitez pas à jeter un oeil à mon Insta, je poste les dessins que j'ai terminé.",
                "image" : Dessin
            },
            {
                "id" : "2",
                "title":"Jouer aux Jeux Vidéos",
                "description" : "J'aime les jeux vidéos depuis que je suis petite. Je joue plus sur console que sur PC, tout dépend des jeux. J'affectionne particulièrement les consoles de Nintendo car il y en a pour tous les goûts. Mes styles de jeux préféré sont les rpg (comme Dragon Quest), mais j'aime aussi les jeux d'aventure comme les Zelda et tout plein d'autre. Et bien que j'aime les jeux solos, j'apprécie aussi les jeux multijoueurs, comme World of Warcraft",
                "image" : Jv
            },
            {
                "id" : "3",
                "title" : "Lire",
                "description" : "La lecture est quelque chose de très important. Je lis de tout ! Des romans bien sur, de fantasy la plupart du temps, mais aussi des ouvrages de vulgarisation scientifique qui peuvent touché à divers domaine comme la la vie sur terre, ou l'astronomie. J'apprécie également les livres d'Histoire. Et dans un tout autre registre je lisais beaucoup de mangas.",
                "image" : Livre
            }
        ]
    },
    reducers : {
        Left : (state, action) => {
            var tailleTableau  = state.data.length;
            if (state.index < tailleTableau - 1) {
                state.index = state.index + 1;
            }
            else {
                state.index = 0;
            }
        },
        Right : (state, action) => {
            var tailleTableau  = state.data.length;
            if (state.index > 0){
                state.index -= 1;
            }
            else {
                state.index = tailleTableau - 1;
            }
        }
    }
})

export const {Left, Right} = CarrouselLoisirsSlice.actions;
export default CarrouselLoisirsSlice.reducer;