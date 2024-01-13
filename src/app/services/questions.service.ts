import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Question[] = [
    {
        id: 1,
        type: 'Nugget',
        speed: false,
        round: 1,
        points: 1,

        question: "À quel genre de musique cet extrait appartient ?",
        propositionsDetailed: ["Bubblegum Pop", "Lousiana Swamp Pop", "Sophisti-Pop", "Poupi Poupi Poupi Pop"],
        propositionsShort: ["A", "B", "C", "D"],
        answer: "C",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 2,
        type: 'Nugget',
        speed: false,
        round: 1,
        points: 1,

        question: "Dans 'What does the Fox say ?' que ne dis pas le renard ?",
        propositionsDetailed: ["Ring-ding-ding-ding-dingeringgeding", "Joff-tchoff-tchoffo-tchoffo-tchoff", "Chacha-chacha-chacha-chow", "Wouki-wouki-wouki-yop"],
        propositionsShort: ["A", "B", "C", "D"],
        answer: "D",
        answerComment: "Le renard glappit, ou il jappe", 
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 3,
        type: 'Nugget',
        speed: false,
        round: 1,
        points: 1,

        question: "Quel groupe chante cette chanson de noel un peu particulière ?",
        propositionsDetailed: ["Sabaton", "Black Sabbath", "Metallica", "Maria Carey"],
        propositionsShort: ["A", "B", "C", "D"],
        answer: "A",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 4,
        type: 'Nugget',
        speed: false,
        round: 1,
        points: 1,

        question: "Dans cet extrait, on entend un rire au début, qui rit et pourquoi ?",
        propositionsDetailed: ["Le batteur après avoir jeté une de ses baguettes sur le guitariste par erreur", "Le chanteur après s’être assis par erreur sur le piano", "Le pianist après avoir lâché un bon gros pet silencieux mais fatal", "Le guitariste après s’être rendu compte qu’il n’avait pas rejoint le bon groupe"],
        propositionsShort: ["A", "B", "C", "D"],
        answer: "B",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 5,
        type: 'Nugget',
        speed: false,
        round: 1,
        points: 1,

        question: "Quelle chanteuse a pour premier titre 'Batches & Cookies' sorti en 2013 ?",
        propositionsDetailed: ["Nicky Minaj", "Lizzo", "Cardi B", "Gordon Ramsey"],
        propositionsShort: ["A", "B", "C", "D"],
        answer: "B",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 6,
        type: 'Nugget',
        speed: false,
        round: 1,
        points: 1,

        question: "Quel est le titre de cette chanson ?",
        propositionsDetailed: ["I'll take everything", "Wordplay", "Better Man", "Supercalifragilisticexpialidocious"],
        propositionsShort: ["A", "B", "C", "D"],
        answer: "A",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 7,
        type: 'SelOuPoivre',
        speed: true,
        round: 1,
        points: 1,

        question: "Beyond Rangoon",
        propositionsDetailed: ["Hans Zimmer", "Pas Hans Zimmer"],
        propositionsShort: ["Hans Zimmer", "Pas Hans Zimmer"],
        answer: "Hans Zimmer",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 8,
        type: 'SelOuPoivre',
        speed: true,
        round: 1,
        points: 1,

        question: "The Creator",
        propositionsDetailed: ["Hans Zimmer", "Pas Hans Zimmer"],
        propositionsShort: ["Hans Zimmer", "Pas Hans Zimmer"],
        answer: "Hans Zimmer",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 9,
        type: 'SelOuPoivre',
        speed: true,
        round: 1,
        points: 1,

        question: "Uncharted 4",
        propositionsDetailed: ["Hans Zimmer", "Pas Hans Zimmer"],
        propositionsShort: ["Hans Zimmer", "Pas Hans Zimmer"],
        answer: "Pas Hans Zimmer",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 10,
        type: 'SelOuPoivre',
        speed: true,
        round: 1,
        points: 1,

        question: "Gravity",
        propositionsDetailed: ["Hans Zimmer", "Pas Hans Zimmer"],
        propositionsShort: ["Hans Zimmer", "Pas Hans Zimmer"],
        answer: "Pas Hans Zimmer",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 11,
        type: 'SelOuPoivre',
        speed: true,
        round: 1,
        points: 1,

        question: "The Usual Suspects",
        propositionsDetailed: ["Hans Zimmer", "Pas Hans Zimmer"],
        propositionsShort: ["Hans Zimmer", "Pas Hans Zimmer"],
        answer: "Pas Hans Zimmer",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 12,
        type: 'SelOuPoivre',
        speed: true,
        round: 1,
        points: 1,

        question: "Days of Thunder",
        propositionsDetailed: ["Hans Zimmer", "Pas Hans Zimmer"],
        propositionsShort: ["Hans Zimmer", "Pas Hans Zimmer"],
        answer: "Hans Zimmer",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 13,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 1,
        points: 1,

        title: "L'art du Discours",
        question: "Qui a prononcé ce discours ?",
        answer: "Martin Luther King",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 14,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 1,
        points: 1,

        title: "L'art du Discours",
        question: "Qui a prononcé ce discours et où ?",
        answer: "Le Général de Gaule à Montréal",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 15,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 1,
        points: 1,

        title: "L'art du Discours",
        question: "Qui a prononcé ce discours et dans quel film ?",
        answer: "Le Roi Georges VI ou Colin Firth dans King's Speech",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 16,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 1,
        points: 1,

        title: "L'art du Discours",
        question: "Qui a prononcé ce discours et dans quel film ?",
        answer: "Rocky ou Stalone dans Rocky Balboa",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 17,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 2,
        points: 1,

        title: "À la façon de nos ancêtres",
        question: "Titre et Groupe",
        answer: "Blue de Eiffel 65",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 18,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 2,
        points: 1,

        title: "À la façon de nos ancêtres",
        question: "Titre et Groupe",
        answer: "We will Rock You de Queen",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 19,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 2,
        points: 1,

        title: "À la façon de nos ancêtres",
        question: "Titre et Groupe",
        answer: "Sombody That I Used To Know de Gotye (ft Kimbra)",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 20,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 2,
        points: 1,

        title: "À la façon de nos ancêtres",
        question: "Titre et Groupe",
        answer: "Dragostea Din Tei de O-Zone",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 21,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 3,
        points: 1,

        title: "Vie et Oeuvre de Carl Nielsen",
        question: "Quel est le nom de ce morceau composé par Carl Nielsen ?",
        answer: "Fantasy for Klarinet and Piano",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 22,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 3,
        points: 1,

        title: "Vie et Oeuvre de Carl Nielsen",
        question: "Quel est le nom de ce morceau composé par Carl Nielsen ?",
        answer: "Tagen Letter (The fog is lifting)",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 23,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 3,
        points: 1,

        title: "Vie et Oeuvre de Carl Nielsen",
        question: "Quel est le nom de ce morceau composé par Carl Nielsen ?",
        answer: "Helios Overture",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 24,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 3,
        points: 1,

        title: "Vie et Oeuvre de Carl Nielsen",
        question: "Quel est le nom de ce morceau composé par Carl Nielsen ?",
        answer: "Maskarade Overture",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 25,
        type: 'Addition',
        speed: true,
        round: 1,
        points: 3,

        title: "Mash up",
        question: "Titre des deux franchises de film",
        answer: "James Bond - Mission Impossible",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 26,
        type: 'Addition',
        speed: true,
        round: 1,
        points: 3,

        title: "Mash up",
        question: "Artistes et Titres des deux morceaux",
        answer: "Eminem Lose - Yourself vs Lou Bega - Mambo n°5",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 27,
        type: 'Addition',
        speed: true,
        round: 1,
        points: 3,

        title: "Mash up",
        question: "Artistes et Titres des deux morceaux",
        answer: "Linkin Park - Numb vs Ariana Grande - Into You",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 28,
        type: 'Addition',
        speed: true,
        round: 1,
        points: 3,

        title: "Mash up",
        question: "Artistes et Titres des deux morceaux",
        answer: "Daft Punk (ft Pharell Williams et Nile Rodgers) - Get Lucky vs Bee Gees - You Should be Dancing",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 29,
        type: 'Addition',
        speed: true,
        round: 1,
        points: 3,

        title: "Mash up",
        question: "Artistes et Titres des deux morceaux",
        answer: "Earth, Wind & Fire - September vs Post Malone - Congratulations",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 30,
        type: 'Addition',
        speed: true,
        round: 1,
        points: 3,

        title: "Mash up",
        question: "Titres des deux morceaux (Bonus compositeur)",
        answer: "Nikolai Rimsky-Korsakov - Flight of the Bumblebee vs John Williams - Imperial March",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 31,
        type: 'Tips',
        speed: true,
        round: 1,
        points: 0,

        question: "Artiste et Titre du morceau à l'envers",
        answer: "Miley Cirus - Flowers",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },








    {
        id: 32,
        type: 'Nugget',
        speed: false,
        round: 2,
        points: 1,

        question: "Quel est l'instrument de musique que vous entendez jouer ?",
        propositionsDetailed: ["Hydrophone", "Pyrophone", "Yaybahar", "Mon cul"],
        propositionsShort: ["A", "B", "C", "D"],
        answer: "C",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 33,
        type: 'Nugget',
        speed: false,
        round: 2,
        points: 1,

        question: "Laquelle de ces chansons a gagnée le MTV Europe Music Award for Best Act Ever en 2008 ?",
        propositionsDetailed: ["Tokyo Hotel avec Schrei", "Thirty Second To Mars avec A Beautiful Lie", "Pink avec So What", "Rick Astley avec Never Gonna Give You Up"],
        propositionsShort: ["A", "B", "C", "D"],
        answer: "D",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 34,
        type: 'Nugget',
        speed: false,
        round: 2,
        points: 1,

        question: "Quel jeu n'est pas présent dans ce medley joué aux Games Award 2023 ?",
        propositionsDetailed: ["Baldur's Gate 3", "Final Fantasy XVI", "Super Mario Bros Wonders", "Alan's Wake 2"],
        propositionsShort: ["A", "B", "C", "D"],
        answer: "B",
        answerComment: "Bien que FF XVI soit absent, il a quand même remporté le prix de la meilleure musique.",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 35,
        type: 'Nugget',
        speed: false,
        round: 2,
        points: 1,

        question: "De quel animé cette chanson est l'opening ?",
        propositionsDetailed: ["One Punch Man", "Bleach", "My Hero Academia", "One Piece"],
        propositionsShort: ["A", "B", "C", "D"],
        answer: "A",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 36,
        type: 'Nugget',
        speed: false,
        round: 2,
        points: 1,

        question: "Quel artiste a remporté l'eurovision en 2023 ?",
        propositionsDetailed: ["Käärijä avec Cha Cha Cha", "La Zarra avec Évidemment", "Loreen avec Tattoo", "Sunstroke Project & Olia Tira avec Run Away, aussi connu pour l'epix Sax Guy"],
        propositionsShort: ["A", "B", "C", "D"],
        answer: "C",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 37,
        type: 'Nugget',
        speed: false,
        round: 2,
        points: 1,

        question: "Quel groupe québécois chante cette chanson ?",
        propositionsDetailed: ["Les Colocs", "Les Cowboys Fringuants", "Les Trois Accords", "K-Maro"],
        propositionsShort: ["A", "B", "C", "D"],
        answer: "A",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 38,
        type: 'SelOuPoivre',
        speed: true,
        round: 2,
        points: 1,

        question: "Pokemon Theme",
        propositionsDetailed: ["Musique Classique", "Musique de Pokemon"],
        propositionsShort: ["Musique Classique", "Musique de Pokemon"],
        answer: "Musique de Pokemon",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 39,
        type: 'SelOuPoivre',
        speed: true,
        round: 2,
        points: 1,

        question: "Pokemon Diamand & Perle - Meeting Cynthia",
        propositionsDetailed: ["Musique Classique", "Musique de Pokemon"],
        propositionsShort: ["Musique Classique", "Musique de Pokemon"],
        answer: "Musique de Pokemon",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 40,
        type: 'SelOuPoivre',
        speed: true,
        round: 2,
        points: 1,

        question: "Piano Sonata de Mozart",
        propositionsDetailed: ["Musique Classique", "Musique de Pokemon"],
        propositionsShort: ["Musique Classique", "Musique de Pokemon"],
        answer: "Musique Classique",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 41,
        type: 'SelOuPoivre',
        speed: true,
        round: 2,
        points: 1,

        question: "Pokemon Diamand & Perle - Eterna Forest",
        propositionsDetailed: ["Musique Classique", "Musique de Pokemon"],
        propositionsShort: ["Musique Classique", "Musique de Pokemon"],
        answer: "Musique de Pokemon",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 42,
        type: 'SelOuPoivre',
        speed: true,
        round: 2,
        points: 1,

        question: "Moonlight Sonata - Beethoven",
        propositionsDetailed: ["Musique Classique", "Musique de Pokemon"],
        propositionsShort: ["Musique Classique", "Musique de Pokemon"],
        answer: "Musique Classique",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 43,
        type: 'SelOuPoivre',
        speed: true,
        round: 2,
        points: 1,

        question: "Pokemon Red & Blue",
        propositionsDetailed: ["Musique Classique", "Musique de Pokemon"],
        propositionsShort: ["Musique Classique", "Musique de Pokemon"],
        answer: "Musique de Pokemon",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 44,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 1,
        points: 1,

        title: "ASMR",
        question: "Titre et Artiste de la chanson",
        answer: "Tove Lo - Glad He's Gone",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 45,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 1,
        points: 1,

        title: "ASMR",
        question: "V ou F, il existe une chanson de Rap ASMR appelée The Quiet Song ?",
        answer: "Vrai",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 46,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 1,
        points: 1,

        title: "ASMR",
        question: "Quelle est al personnalité interviewvé en mode ASMR ?",
        answer: "Arnold Schwarzenegger",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 47,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 1,
        points: 1,

        title: "ASMR",
        question: "Allé une petite dernière, quelle est cette chanson et quel est l'artiste ?",
        answer: "Bohemian Rhapsody de Queen",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 48,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 2,
        points: 1,

        title: "Ah que les génériques",
        question: "Quel est le titre de l'émission dont Johnny reprends le générique ?",
        answer: "Code Lyoko",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 49,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 2,
        points: 1,

        title: "Ah que les génériques",
        question: "Quel est le titre de l'émission dont Johnny reprends le générique ?",
        answer: "Denver le dernier Dinosaure",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 50,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 2,
        points: 1,

        title: "Ah que les génériques",
        question: "Quel est le titre de l'émission dont Johnny reprends le générique ?",
        answer: "One Piece",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 51,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 2,
        points: 1,

        title: "Ah que les génériques",
        question: "Quel est le titre de l'émission dont Johnny reprends le générique ?",
        answer: "Rahan",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 52,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 2,
        points: 1,

        title: "Ah que les génériques",
        question: "Quel est le titre de l'émission dont Johnny reprends le générique ?",
        answer: "Tchoupi",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 53,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 3,
        points: 1,

        title: "Blind test pour les sourds",
        question: "Qui a chanté cette chanson et quel est le titre de la chanson ?",
        answer: "K-Maro - Femme Like U",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 54,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 3,
        points: 1,

        title: "Blind test pour les sourds",
        question: "En 2004, qui a chanté ce morceau extrêmement connu ?",
        answer: "K-Maro - Femme Like You",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 55,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 3,
        points: 1,

        title: "Blind test pour les sourds",
        question: "Quel est le premier titre de cet artiste, et qui est l'artiste en question ?",
        answer: "I am à l'ancienne de K-Maro",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 56,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 3,
        points: 1,

        title: "Blind test pour les sourds",
        question: "Qui a sorti ce titre en 2010 ?",
        answer: "Belle Trentaine de K-Maro",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 57,
        type: 'Addition',
        speed: true,
        round: 2,
        points: 3,

        title: "Otamatone",
        question: "Toutes les réponses ont été reprises à l'Otamatone (Titre et Artiste)",
        answer: "Scatman de Scatman John",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 58,
        type: 'Addition',
        speed: true,
        round: 2,
        points: 3,

        title: "Otamatone",
        question: "Toutes les réponses ont été reprises à l'Otamatone (Titre et Artiste)",
        answer: "Total Eclipse of the Heart de Bonnie Tyler",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 59,
        type: 'Addition',
        speed: true,
        round: 2,
        points: 3,

        title: "Otamatone",
        question: "Toutes les réponses ont été reprises à l'Otamatone (Titre et Artiste)",
        answer: "Fireflies de Owl City",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 60,
        type: 'Addition',
        speed: true,
        round: 2,
        points: 3,

        title: "Otamatone",
        question: "Toutes les réponses ont été reprises à l'Otamatone (Titre et Artiste)",
        answer: "Fly me to the Moon de Frank Sinatra",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 61,
        type: 'Addition',
        speed: true,
        round: 2,
        points: 3,

        title: "Otamatone",
        question: "Toutes les réponses ont été reprises à l'Otamatone (Titre et Artiste)",
        answer: "Look What You Made Me Do de Taylor Swift",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 62,
        type: 'Addition',
        speed: true,
        round: 2,
        points: 3,

        title: "Otamatone",
        question: "Toutes les réponses ont été reprises à l'Otamatone (Titre et Artiste)",
        answer: "The Final CountDown de Europe",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 63,
        type: 'Tips',
        speed: true,
        round: 2,
        points: 0,

        question: "Vitoo: Fatal, assieds-toi faut que j'te parle\nJ'ai passé ma soirée à boire\nFatal, j'la sens pas, je sais pas, elle doute de moi\n\nFatal: Mais Vitoo arrête, tu sais ta meuf t'aime, ta meuf m'a dit\nTu sais avec Vitoo la confiance règne, et c'est mon p'tit choux à la crème\nFaut pas que tu paniques j'te jure\nTa meuf est cool, ta meuf est bonne, Vitoo\nT'en niques des tonnes, elle s'doute de rien, elle est trop conne\n\nVitoo: Non mais qu'est-ce t'en sais toi?\nÇa fait deux mois qu'elle me fait trop peur\n\nFatal: Ah bon?\n\nVitoo: Qu'elle check mes messages tout les quarts d'heure\n\n Fatal: Change ton code PIN\n\nVitoo: Elle a infiltré mon répondeur\nMa meuf est devenue une autre femme, ouais\n\nFatal: Mais t'es sûr de toi? T'en as la preuve par trois?\n\nVitoo: Elle devient zarbi\nToutes les nuits, elle me fait suivre par son frère Denis\nQu'a même prévu de me casser la gueule mardi\nÇa d'vient l'angoisse, un vrai cauchemar\nJ'ai tellement peur d'elle, le soir je dors à l'hôtel\n\nFatal: Elle est à côté de la plaque, tu kiffes de ken des autres nanas toi\nTous les trucs bizarres, les plans à trois, et les pétasses quoi\nTous tes bobards pour tes 5 à 7 pénards\nT'as un python dans slibard, Vitoo, t'es un bon queutard\n\nVitoo: Je t'aime moi\n\nFatal: Et bah voilà, dis-lui ça\n\nVitoo: Excuse-moi\n\nFatal: Voilà, ça c'est bien ça\n\nVitoo: C'est arrivé qu'16 fois\n\nFatal: Euh non ça lui dis pas\n\nVitoo: Mais j'sais pas si j'assume de n'coucher qu'avec elle",
        answer: "Mauvaise Foi Nocturne de Fatal et Vitoo (aka Michael Young et Pascal Obispo",
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 64,
        type: 'PoutineDeLaMort',
        speed: false,
        round: 3,
        points: 0,

        question: "1. Comment s'appelerait la chanson Blue si le héro était rouge ?\n2. V ou F, Edith Piaf devait se prendre de sacré ligne pour voir la vie en rose ?\n3. Dans la chanson je te survivrai, à quoi survivrai Jean-Pierre François ?\n4. Pensez-vous qu'une emission comme la voie mais où les juges jugeraient uniquement sur le physique aurait du succès ?\n 5. Et pensez-vous que j'y ai ma chance ?\n6. Allé vous pouvez nous le dire après tout ce temps, qui a volé l'orange du marchand ?\n7. Comment s'appelerait Arian Grande si elle était très petite ?\n8. V ou F, certaines femmes enceintes diffusent du bon gros son ?\n9. Complétez ces paroles, Tiens voilà du...\n10. Et enfin, si vous demandiez de l'aide à Rick Astley, est-ce qu'il vous laisserait tomber ?",
        answer: 'NA',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    }
  ]
}
