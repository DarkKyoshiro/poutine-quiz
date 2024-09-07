import { Injectable } from "@angular/core"
import { Question } from "../../models/question.model"

@Injectable({
    providedIn: "root",
})
export class QuestionsService {
    questions: Question[] = [
        {
            id: 1,
            type: "Nugget",
            speed: false,
            round: 1,
            points: 1,

            question: "Qui n'a jamais partagé le lit du roi Arthur ?",
            propositionsDetailed: [
                "Perceval",
                "Le Duc d'Acquitaine",
                "Monseigneur Boniface, êveque de Germanie",
                "La Reine Guenièvre",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "A",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 2,
            type: "Nugget",
            speed: false,
            round: 1,
            points: 1,

            question: "Quel interval musical est de la merde d'après le Père Blaise ?",
            propositionsDetailed: ["L'Unisson", "La Tierce", "La Quinte", "L'Auto-tune"],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "B",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 3,
            type: "Nugget",
            speed: false,
            round: 1,
            points: 1,

            question:
                "Dans le livre 2, Arthur offre une rose particuliere a une paysanne. Que fait-elle avec ?",
            propositionsDetailed: [
                "Elle ne comprend pas le principe et s'en fait une infusion",
                "Elle ne comprend pas le principe et se la met dans les cheveux",
                "Elle ne comprend pas le principe et la mange",
                "Elle ne comprend pas le principe, se sent insultée et gifle Arthur",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "C",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 4,
            type: "Nugget",
            speed: false,
            round: 1,
            points: 1,

            question: "Quel roi de clan breton maitrise la Foudre ?",
            propositionsDetailed: [
                "Arthur, roi de Bretagne",
                "Ketchatar, roi d'Irlande",
                "Loth, roi d'Orcanie",
                "Couillière, roi Burgonde",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "C",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 5,
            type: "Nugget",
            speed: false,
            round: 1,
            points: 1,

            question: "Quel surnom ne désigne pas le chevalier Yvain ?",
            propositionsDetailed: [
                "Le chevalier au lion",
                "L'orphelin de Carmélide",
                "Le chevalier au pancréas",
                "Le chevalier de mes deux",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "C",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 6,
            type: "Nugget",
            speed: false,
            round: 1,
            points: 1,

            question: "Quelle insulte le maitre d'armes n'a jamais dit au roi Arthur ?",
            propositionsDetailed: [
                "HAHA, Sire ! Je vous attends ! À moins que vous préfériez que l'on dise partout que le roi est une petite pédale qui pisse dans son froc à l'idée de se battre !",
                "En garde, espèce de vieille pute dégarnie !",
                "Mais allez-y bon sang, magnez-vous le fion, espèce de grosse dinde !",
                "En garde, ma biquette ! Je vais vous découper le gras du cul, ça vous fera ça de moins à trimbaler !",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "C",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 7,
            type: "SelOuPoivre",
            speed: true,
            round: 1,
            points: 1,

            question:
                "Pour savoir s’il va y avoir du vent, il faut mettre son doigt dans le cul du coq",
            propositionsDetailed: ["Kadoc", "Karadoc"],
            propositionsShort: ["Kadoc", "Karadoc"],
            answer: "Kadoc",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 8,
            type: "SelOuPoivre",
            speed: true,
            round: 1,
            points: 1,

            question:
                "Lorsqu’on le tient par la partie sporadique, ou boulière, le fenouil est un objet redondant",
            propositionsDetailed: ["Kadoc", "Karadoc"],
            propositionsShort: ["Kadoc", "Karadoc"],
            answer: "Karadoc",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 9,
            type: "SelOuPoivre",
            speed: true,
            round: 1,
            points: 1,

            question: "La neige qui poudroie dans la solitude de notre enfance",
            propositionsDetailed: ["Kadoc", "Karadoc"],
            propositionsShort: ["Kadoc", "Karadoc"],
            answer: "Karadoc",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 10,
            type: "SelOuPoivre",
            speed: true,
            round: 1,
            points: 1,

            question:
                "Des fois on n'a pas le choix faut sacrifier des jeunes, c'est le grand qu'a dit.",
            propositionsDetailed: ["Kadoc", "Karadoc"],
            propositionsShort: ["Kadoc", "Karadoc"],
            answer: "Kadoc",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 11,
            type: "SelOuPoivre",
            speed: true,
            round: 1,
            points: 1,

            question: "J'te présente vos hommages au roi arthur",
            propositionsDetailed: ["Kadoc", "Karadoc"],
            propositionsShort: ["Kadoc", "Karadoc"],
            answer: "Kadoc",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 12,
            type: "SelOuPoivre",
            speed: true,
            round: 1,
            points: 1,

            question: "On met du beurre dans le fond du plat pour pas que le gratin colle",
            propositionsDetailed: ["Kadoc", "Karadoc"],
            propositionsShort: ["Kadoc", "Karadoc"],
            answer: "Kadoc",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 13,
            type: "Menu",
            speed: false,
            round: 1,
            group: 1,
            points: 1,

            title: "Un destin exceptionnel",
            question: "Comment Arthur a découvert que Perceval a une exceptionnelle destinée ?",
            answer: "En donnant Excalibur à Perceval et en voyant que l'aura magique ne disparait pas",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 14,
            type: "Menu",
            speed: false,
            round: 1,
            group: 1,
            points: 1,

            title: "Un destin exceptionnel",
            question:
                "Quel objet Perceval a rapporté au roi Arthur lorsqu'il est passé au travers d'un portail dimensionnel ?",
            answer: "Un sabre-laser",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 15,
            type: "Menu",
            speed: false,
            round: 1,
            group: 1,
            points: 1,

            title: "Un destin exceptionnel",
            question: "Quel est le nom du clan que Perceval a fondé avec Karadoc ?",
            answer: "Les semi-croustillants",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 16,
            type: "Menu",
            speed: false,
            round: 1,
            group: 1,
            points: 1,

            title: "Un destin exceptionnel",
            question:
                "Quelle relique sacrée Perceval a balancé dans la forêt ou une rivière après l'avoir récupéré auprès d'un vieux clodo lors d'une de ces quêtes ?",
            questionComment: "Il y en a deux mais juste un seul suffit",
            answer: "Les clous de la sainte croix et le saint-suaire",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 17,
            type: "Menu",
            speed: false,
            round: 1,
            group: 2,
            points: 1,

            title: "Sorts et Potions",
            question:
                "Comment Perceval et Karadoc choisissent les ingrédients à utiliser lorsqu'ils tentent de préparer une potion de puissance ?",
            questionComment: "Bonus si vous me dite l'effet de la potion qu'ils ont préparé",
            answer: "À l'odeur, selon si ça sent les pieds ou pas",
            answerComment: "Ça leur donne une voix nasillarde, comme de l'Hélium",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 18,
            type: "Menu",
            speed: false,
            round: 1,
            group: 2,
            points: 1,

            title: "Sorts et Potions",
            question:
                "Quelle potion Merlin a créé par erreur pour Dame Mevanwi au lieu de préparer une potion pour le mal de gorge ?",
            answer: "La potion d'invincibilité",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 19,
            type: "Menu",
            speed: false,
            round: 1,
            group: 2,
            points: 1,

            title: "Sorts et Potions",
            question:
                "D'après Merlin, quelle est la première étape pour créer une plaque de dissimulation",
            answer: "Il faut bien traiter le bois, car sinon dès qu'il pleut ça gonfle et ça tiens moins",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 20,
            type: "Menu",
            speed: false,
            round: 1,
            group: 2,
            points: 1,

            title: "Sorts et Potions",
            question:
                "À l'instar de la pierre philosophale, que permet de transmuter la pierre de lune inventée par Merlin, et en quoi ?",
            answer: "Petite pierre ronde qui permet de transformer de la viande de chèvre en eau",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 21,
            type: "Menu",
            speed: false,
            round: 1,
            group: 3,
            points: 1,

            title: "Traditions ludiques Galloises",
            question: "Au jeu de la Grelottine, que fait-on lorsqu’on tente une Grelottine ?",
            answer: "tenter une grelottine : parier qu’il va monter de 6 ou 7. Il ne joue pas et au tour suivant, si le total des mises des 2 autres joueurs ne suffit pas à combler l’écart, il remporte la grelottine, et on change de manche. Il annonce donc les mises de la manche suivante.",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 22,
            type: "Menu",
            speed: false,
            round: 1,
            group: 3,
            points: 1,

            title: "Traditions ludiques Galloises",
            question: "Au jeu du Robobrole, quelles sont les 9 actions possibles ?",
            answer: "Les actions possibles sont : 'boubin', 'broube', 'roubou', 'brobinle', 'robourle', 'roubourle', 'passe gagnante', 'ratou-robole' et 'robobrole'",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 23,
            type: "Menu",
            speed: false,
            round: 1,
            group: 3,
            points: 1,

            title: "Traditions ludiques Galloises",
            question: "De quoi a-t’on besoin pour jouer au Sloubi ?",
            answer: "50 bouts de bois de 2 pouces, 50 bouts de bois de 3 pouces, 50 bouts de bois de 4 pouces, 50 poutres de la longueur de la pièce dans laquelle vous jouez, 120 dés, mais ça peut aussi se faire avec juste 3 dés en les lançant 40 fois",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 24,
            type: "Menu",
            speed: false,
            round: 1,
            group: 3,
            points: 1,

            title: "Traditions ludiques Galloises",
            question: "Que doit faire le vainqueur d’une donne du jeu du pélican ?",
            answer: "Le vainqueur de la donne doit classer ses artichauts du plus lisse au plus râpeux. Ça peut être long, c'est pour ça qu'il faut tenter de diminuer son nombre d’artichauts soit :\n- en faisant un tour de troque ou on peut refiler jusqu'à 17% pour de ses artichauts\n- en achetant la banque, ce qui double les points de votre voisin et diminue de moitié votre nombre d’artichauts, c'est la raitournelle.\n\nLa 2ème possibilité n'est possible que s'il n y a plus d'artichauts dans la banque, si cette condition n'est pas vérifiée on peut faire artichette.\nSi c'est votre voisin de gauche qui achète la banque il doit refourguer 17% des artichauts qu'il a gagné dans la donne précédente, vous pouvez alors faire artichette et coller le banquier a -6 pour tenter à votre tour la raitournelle.\n\nSi ça passe, vous balancez les annonces : artichette, tichette de 2, tichette de 3, tichette de 21, michette, tchiledeque, mique , sganabadarlane, résiné et raitournelle.",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 25,
            type: "Addition",
            speed: true,
            round: 1,
            points: 3,

            title: "Les vieux c'est mysterieux",
            question:
                "Dans un premier temps, il vous faudra retrouver une vieille bien mystérieuse, c’est elle qui vous donnera plus d’informations et vous guidera. \nAttention ce ne sera pas une tâche aisée. En effet, il parait que pas tout le monde puisse la voir, en fait il y a que notre bon roi qui l’ait vu… \nMais bon, vous ne devriez pas avoir de soucis. \nCommencez par chercher près des points d’eau. Pas les plus grands, mais pas les plus petits…",
            answer: "La Dame du Lac",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 26,
            type: "Addition",
            speed: true,
            round: 1,
            points: 3,

            title: "Les vieux c'est mysterieux",
            question:
                "Alors que vous veniez de trouver votre Guide, vous êtes vite rejoins par deux petits vieux clopinant à pied. \nIl semblerait que ce soient des renforts, mais vous n’avez pas bien compris leurs surnoms, quelque chose avec un animal ou un organe, c’était un peu bizarre. \nEt bien que vous êtes sur que ce sont de vrais chevaliers, les entendre dire qu'ils étaient pétrifiés de peur devant un Fakir qui a enroulé sa bite autour d'un baton et qui a soulevé des poids avec ses couilles ne vous a guère rassuré... \nMais bon, vous prenez toute l’aide qu’on vous offre.",
            answer: "Yvain et Gauvain",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 27,
            type: "Addition",
            speed: true,
            round: 1,
            points: 3,

            title: "Les vieux c'est mysterieux",
            question:
                "Après un pénible trajet en forêt, ayant dû rebrousser chemin plusieurs fois dû aux indications un peu vagues de votre guide, vous arrivez à l’orée d’une clairière, et on vous informe de la teneur de votre quête. \nVous devrez infiltrer le camp champêtre d’un vieux. Mais attention, on ne parle pas de n’importe quel vieux, nooooon, ce vieux était le plus fidèle chevalier de notre bon roi. \nQuelle tragédie toute cette histoire, et quelle trahison. Lui qui devait pourtant retrouver le Graal… \nMais cessons de ressasser le passé, ce qui est fait est fait et vous avez une quête à remplir.",
            answer: "Lancelot",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 28,
            type: "Addition",
            speed: true,
            round: 1,
            points: 3,

            title: "Les vieux c'est mysterieux",
            question:
                "Vous étant fait passer par des gardes du camps à l’aide d’habits trouvés ici et là, vous êtes maintenant infiltrés, et vous allez pouvoir rechercher la vieille qui a rejoint le traitre. \nLes deux chevaliers vous ont apporté un message de notre roi à lui transmettre. Le roi a beaucoup réfléchi, a changé d’avis pour l’échange, et espère qu’elle retrouvera la raison. \nAh justement la voilà qui rentre dans la tente du traitre. \nVous aurez besoin de ruse et de patience pour essayer de contourner les gardes qui la protège et faire passer votre missive.",
            answer: "La reine Guenièvre",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 29,
            type: "Addition",
            speed: true,
            round: 1,
            points: 3,

            title: "Les vieux c'est mysterieux",
            question:
                "Ayant fait passer le message avec succès, et ayant récupéré la réponse de votre ancienne reine, vous tentez de repartir aussi discrètement que vous êtes arrivé, mais horreur, vous n’étiez pas les seuls à tourner autour du camp. \nUn imposant vieillard entièrement vêtu de noir avec un capuche rabaissée lui masquant le visage vous barre la route. \nTout son être dégage une aura sombre, et vos sens vous crie de ne pas l’affronter, que c’est inutile et que la seule réponse que vous obtiendrez de lui sera définitive. \nD’une voix rauque et puissante, il avertit les gardes et un combat intense s’en suit, ce qui permis au vieillard de s’éclipser subtilement pour aller retrouver le traitre",
            answer: "Méléagant",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 30,
            type: "Addition",
            speed: true,
            round: 1,
            points: 3,

            title: "Les vieux c'est mysterieux",
            question:
                "Bien que victorieux, vous n’en êtes pas ressorti indemne et peinez à rentrer au château. \nAlors que vous êtes évanoui sur le chemin, un étrange petit vieux vient à votre aide et vous emmène à l’abris où vous allez pouvoir reprendre des forces. \nL’ayant vite reconnu, vous savez très bien que ce geste aura un prix et qu’il ne se privera pas d’utiliser votre dette pour ses nombreuses magouilles dans la cour du château. \nCombat de chien, esclavagisme, contrefaçon, vous ne savez pas encore quels ennuis vous allez-vous attirez, mais vous savez que vous n’y échapperez pas. \nMais bon, au moins vous êtes en vie et vous allez pouvoir rentrer à Kaamelott faire votre rapport, et qui sait, peut-être que ce petit vieux a un bon cœur et que si il vous a sauvé vous, il sauvera quelqu’un d’autre de plus important plus tard. \nMais ceci est une autre histoire...",
            answer: "Venec",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 31,
            type: "Tips",
            speed: true,
            round: 1,
            points: 0,

            question: "Écrivons la légende",
            answer: "Bon en fait on s'en fou un peu ça va finir aux archive et personne va lire ce truc. Allé pour l'effort je donne les points à tout le monde.",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },

        {
            id: 32,
            type: "Nugget",
            speed: false,
            round: 2,
            points: 1,

            question: "Quel pays a eu son independance sans le vouloir ?",
            propositionsDetailed: ["Andorre", "Tuvalu", "Singapour", "Le Québec"],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "C",
            answerComment:
                "Singapour a gagné son indépendance non pas parce qu'ils le voulait, mais parce que le parlement Malaysien a voté à l'unanimité (sans représentants de Singapour) l'expulsion de la Malaysie",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 33,
            type: "Nugget",
            speed: false,
            round: 2,
            points: 1,

            question:
                "Qu'est-il arrivé lorsqu'un scientifique a voulu tester le paradoxe du singe savant ?",
            questionComment:
                "Ce paradoxe dit que si on laisse un singe devant une machine à écrire, au bout d'un moment il y a une chance que ce singe écrire une oeuvre de Shakespear",
            propositionsDetailed: [
                "Le singe a écrit 5 pages remplies de S",
                "Le singe a détruit le clavier avec une pierre",
                "Le singe a chié sur le clavier",
                "A, B, C et donc D",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "D",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 34,
            type: "Nugget",
            speed: false,
            round: 2,
            points: 1,

            question: "Comment s'appelle cet insecte ?",
            propositionsDetailed: [
                "Agathidium Vaderi en hommage à Darth Vador",
                "Agra Katewinsletae en hommage à Kate",
                "Agra Schwarzeneggeri en hommage à Schwarzenegger",
                "Anophthalmus Hitleri en hommage à Hitler",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "D",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 35,
            type: "Nugget",
            speed: false,
            round: 2,
            points: 1,

            question: "Combien de pages prends la démonstration mathématique que 1+1=2 ?",
            propositionsDetailed: [
                "1 page... Normal...",
                "16 pages... C'est un peu plus long...",
                "162 pages... Ça commence à faire beaucoup...",
                "0 page... On n'a pas encore réussi à le prouver... C'est un peu la honte...",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "C",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 36,
            type: "Nugget",
            speed: false,
            round: 2,
            points: 1,

            question: "Quels sont les derniers mots dits sur la lune ?",
            propositionsDetailed: [
                "God willing, we shall return: Si Dieu le veut, nous reviendrons",
                "All right, let's get this mother out of here and go home: Très bien, sortons cette maman d'ici et rentrons chez nous",
                "Houston, we have a problem: Houston, nous avons un problème",
                "Chewie, we’re going home: Chewie, on renter à la maison",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "B",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 37,
            type: "Nugget",
            speed: false,
            round: 2,
            points: 1,

            question: "Dans la pub de quel jeu-vidéo voit-on Alexandre Astier ?",
            propositionsDetailed: [
                "Dark Age of Camelot",
                "World of Warcraft",
                "Guild Wars",
                "Bob l'éponge: Bataille pour Bikini Bottom",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "B",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 38,
            type: "SelOuPoivre",
            speed: true,
            round: 2,
            points: 1,

            question: "Like a virgin - Madonna",
            propositionsDetailed: ["Ça parle de Cul", "Ça parle pas de Cul"],
            propositionsShort: ["Ça parle de Cul", "Ça parle pas de Cul"],
            answer: "Ça parle pas de Cul",
            answerComment:
                "Like A Virgin est une chanson qui décrit l'état émotionnel de Steinberg après qu'une relation ratée l'a laissé dans les bras de quelqu'un d'autre. Cette nouvelle relation l'a fait se sentir brillant et nouveau. Vous savez, comme une vierge",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 39,
            type: "SelOuPoivre",
            speed: true,
            round: 2,
            points: 1,

            question: "In the air tonight - Phil Collins",
            propositionsDetailed: ["Ça parle de Cul", "Ça parle pas de Cul"],
            propositionsShort: ["Ça parle de Cul", "Ça parle pas de Cul"],
            answer: "Ça parle pas de Cul",
            answerComment:
                "En fait Phil ne sait même pas de quoi ça parle vraiment, c'est juste cool",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 40,
            type: "SelOuPoivre",
            speed: true,
            round: 2,
            points: 1,

            question: "La Macarena - Los Del Rio",
            propositionsDetailed: ["Ça parle de Cul", "Ça parle pas de Cul"],
            propositionsShort: ["Ça parle de Cul", "Ça parle pas de Cul"],
            answer: "Ça parle de Cul",
            answerComment:
                "C'est à propos d'une femme qui trompe son copain avec deux de ses amis... En même temps... Si vous voyez ce que je veux dire...",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 41,
            type: "SelOuPoivre",
            speed: true,
            round: 2,
            points: 1,

            question: "If you seek Amy - Britney Spears",
            propositionsDetailed: ["Ça parle de Cul", "Ça parle pas de Cul"],
            propositionsShort: ["Ça parle de Cul", "Ça parle pas de Cul"],
            answer: "Ça parle de Cul",
            answerComment: "F U C K Me",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 42,
            type: "SelOuPoivre",
            speed: true,
            round: 2,
            points: 1,

            question: "Like a prayer - Madonna",
            propositionsDetailed: ["Ça parle de Cul", "Ça parle pas de Cul"],
            propositionsShort: ["Ça parle de Cul", "Ça parle pas de Cul"],
            answer: "Ça parle de Cul",
            answerComment: "La chanson parle de fellation",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 43,
            type: "SelOuPoivre",
            speed: true,
            round: 2,
            points: 1,

            question: "Every Breath You Take - The Police",
            propositionsDetailed: ["Ça parle de Cul", "Ça parle pas de Cul"],
            propositionsShort: ["Ça parle de Cul", "Ça parle pas de Cul"],
            answer: "Ça parle pas de Cul",
            answerComment: "La chanson est à propos d'un stalker, donc pas super sexy",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 44,
            type: "Menu",
            speed: false,
            round: 2,
            group: 1,
            points: 1,

            title: "Parlons boules",
            question: "Quel fruit est nommé à partir du mot aztec pour testicule ?",
            answer: "L'avocat",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 45,
            type: "Menu",
            speed: false,
            round: 2,
            group: 1,
            points: 1,

            title: "Parlons boules",
            question:
                "Quel pourcentage de son corps, les testicules de la decticelle côtière représentent ? (à 5% près)",
            answer: "14 %",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 46,
            type: "Menu",
            speed: false,
            round: 2,
            group: 1,
            points: 1,

            title: "Parlons boules",
            question:
                "D’après les croyances du moyen-âge, quel testicule produirait des filles exclusivement ? Le testicule droit ou le gauche ?",
            answer: "Gauche",
            answerComment:
                "Comme tous ce qui est signe de malheur à l'époque. Certains se le faisait enlever parait-il...",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 47,
            type: "Menu",
            speed: false,
            round: 2,
            group: 1,
            points: 1,

            title: "Parlons boules",
            question:
                "Chez les singes hurleurs, comment peut-on savoir qui a les plus petites boules ?",
            answer: "C'est celui qui gueule le plus fort",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 48,
            type: "Menu",
            speed: false,
            round: 2,
            group: 2,
            points: 1,

            title: "GOAT",
            question:
                "Quelle est la BOAT (Boisson La plus bue of all time) ? (Après l’eau bien sûr)",
            answer: "Le Thé",
            answerComment:
                "Le Thé est la boisson la plus bue dans le monde après l’Eau. 500 millions de tasses de thés sont bues chaque jour.",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 49,
            type: "Menu",
            speed: false,
            round: 2,
            group: 2,
            points: 1,

            title: "GOAT",
            question: "Quel est lo LOAT ? Le livre le plus vendu of all time ?",
            answer: "La Bible",
            answerComment:
                "Patrick Sébastien, le vrai gout des tomates mûres. Juste devant la Bible. Non je déconne c’est la Bible.",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 50,
            type: "Menu",
            speed: false,
            round: 2,
            group: 2,
            points: 1,

            title: "GOAT",
            question: "Quelle est la COAT, la chanson la plus streamée of all time sur Spotify ?",
            answer: "Blinding Lights de The Weeknd ",
            answerComment:
                "Blinding Lights de The Weeknd suivi de près par Shape of You de Ed Sheeran (en date du 31 mars 2024). Bon j’ai un peu aidé en l’écoutant en boucle pendant 3 semaines",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 51,
            type: "Menu",
            speed: false,
            round: 2,
            group: 2,
            points: 1,

            title: "GOAT",
            question:
                "Et enfin… Ah non merde. Un auteur a cru que c’était un menu sur les chèvres, du coup il y a une question qui n’a rien à voir… Je vous la pose quand même. Quel est le temps de gestation d’une chèvre ? (à 1 mois près)",
            answer: "5 mois",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 52,
            type: "Menu",
            speed: false,
            round: 2,
            group: 3,
            points: 1,

            title: "Uniforme SS",
            question:
                "Question très simple pour se mettre en jambe, qui a designé et fabriqué les uniformes nazis ?",
            answer: "Hugo Ferdinand Boss",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 53,
            type: "Menu",
            speed: false,
            round: 2,
            group: 3,
            points: 1,

            title: "Uniforme SS",
            question: "D’ailleurs, l’a-t-il fait sous la contrainte ou pas du tout ?",
            answer: "Pas du tout, dès 1931 il adhère au parti Nazi",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 54,
            type: "Menu",
            speed: false,
            round: 2,
            group: 3,
            points: 1,

            title: "Uniforme SS",
            question:
                "Qui a eu l’idée de la couleur noire des uniforme SS, pour se différencier des autres soldats ?",
            answer: "Himmler, qui n'avait pas que des mauvaises idées finalement",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 55,
            type: "Menu",
            speed: false,
            round: 2,
            group: 3,
            points: 1,

            title: "Uniforme SS",
            question: "V ou F, on pouvait acheter son uniforme SS chez IKKSS ?",
            answer: "Faux",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 56,
            type: "Addition",
            speed: true,
            round: 2,
            points: 3,

            title: "La réponse est un titre de chanson",
            question:
                "C’est soit-disant un sport noble entre un animal et un homme, mais c’est pas mal surtout un massacre publique.",
            answer: "La Corrida - Francis Cabrel",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 57,
            type: "Addition",
            speed: true,
            round: 2,
            points: 3,

            title: "La réponse est un titre de chanson",
            question: "C'est aussi en lien avec la Météo",
            answer: "Mistral Gagnant – Renaud\nIt’s Raining Men – Geri Halliwell\nUmbrella – Rihanna\nSinging in the Rain – Gene Kelly",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 58,
            type: "Addition",
            speed: true,
            round: 2,
            points: 3,

            title: "La réponse est un titre de chanson",
            question: "C'est un mois de l'année",
            answer: "September – Earth, Wind and Fire\nLaisse Avril – Julien Doré\nNovember Rain – Guns n’Roses\nWake me up when September Ends – Green Day",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 59,
            type: "Addition",
            speed: true,
            round: 2,
            points: 3,

            title: "La réponse est un titre de chanson",
            question: "C’est ce qu’on dit après avoir fait l’amour",
            answer: "Baby one more time – Britney Spears, Que je t’aime – Johnny Halliday, Prendre un enfant par la main – Yves Duteil",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 60,
            type: "Addition",
            speed: true,
            round: 2,
            points: 3,

            title: "La réponse est un titre de chanson",
            question:
                "C’est à propos d’une princesse Disney, mais c’est pas une chanson de Disney, et c’est pas une princesse, fin bref c’est aussi le nom d’une princesse Disney, c’est plus simple dit comme ça.",
            answer: "Cendrillon - Téléphone",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 61,
            type: "Addition",
            speed: true,
            round: 2,
            points: 3,

            title: "La réponse est un titre de chanson",
            question: "Ca pourrait aussi désigner la masturbation",
            answer: "Beat it - Michael Jackson, Let it go - Idina Menzel, Formidable - Stromae, Ça fait mal - Christophe Maé",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 62,
            type: "Tips",
            speed: true,
            round: 2,
            points: 0,

            question: "Le mime",
            answer: "Dumb & Dumber\nJurassic Park\nBatman",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 63,
            type: "PoutineDeLaMort",
            speed: false,
            round: 3,
            points: 0,

            question:
                "1. V ou F, la série Kaamelott a été écrite par un Crétin de Troyes ? \n\n" +
                "2. D’après Merlin, que dit le dragon quand il se fait marcher sur la patte ? Si vous ne savez pas, dites Dis donc, tu ne manques pas de toupet?\n\n" +
                "3. Diriez-vous que regarder tous les épisodes de Kaamelott d’une traite est plutôt une bonne ou une bonne idée ?\n\n" +
                "4. Si le chevalier Malcolum devait rejoindre la table ronde, le metteriez-vous plutôt à gauche, à droite ou au milieu ?\n\n" +
                "5. À votre avis, peux-t'on dire d'un fenouil qu'il est sporadique ?\n\n" +
                "6. Si je vous chante à la volette là de suite, ça vous restera dans la tête pendant combien de temps à peu près ?\n\n" +
                "7. Je me ferais bien une petite partie de Sloubi, vous auriez pas 50 bouts de bois de 2 pouces, 50 de 3 pouces et 50 de 4 pouces ? J'ai déjà le reste\n\n" +
                "8. Est-ce que vous êtes assez brave pour manger les tartes cuisinées par Dame Seli ?\n\n" +
                "9. Si vous deviez former un clan de chevalier, comment l’appeleriez vous ?\n\n" +
                "10. Allé, ça vous tente on vous adoube la maintenant en tant que Sire Patate Frite de la Sauce Brune ?",
            answer: "NA",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
    ]
}
