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

        question: 'Quel est le metier d\'Asterix ?',
        propositionsDetailed: ['Chasseur', 'Guerrier', 'Diplomate', 'Petite b**** du village'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'B. Guerrier',
        answerComment: 'Mentionné dans l\'album Astérix le Gaulois',
        
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

        question: 'Quel alcool existe vraiment ?',
        propositionsDetailed: ['Le Gin Panoramix', 'Le Calvados Grosse Baffe', 'La tequila Epidemaïs', 'Le Whiskey Jules César'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'A. Le Gin Panoramix',
        answerComment: 'Doit sa couleur à la fleur de pois bleu, et il change de couleur pour passer au violet à l\'ajout d\'un composé acide comme du citron',
        
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

        question: 'Lequel de ces jeux-videos n\'existe pas ?',
        propositionsDetailed: ['Asterix et Obelix XL', 'Asterix et Obelix XXL', 'Asterix et Obelix XXL 2', 'Asterix et Obelix XXXL'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'A. Asterix et Obelix XL',
        
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

        question: 'Lequel de ces faits sur Asterix n\'est pas vrai ?',
        propositionsDetailed: ['Astérix a déjà fait la couverture de Times', 'Le premier satellite français s\'appelle Astérix', 'La statue de Zeus au parc Astérix porte un slip à fleur', 'Astérix a reçu la légion d\'honneur pour service rendu à la France'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'D. Astérix a reçu la légion d\'honneur pour service rendu à la France',
        answerComment: 'Times en 15 juillet 1991, Premier satellite français lancé le 26 novembre 1965, slip enlevé récemment',
        
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

        question: 'Que dis l\'hypnotiseur egyptien dans les 12 travaux d\'Astérix ?',
        propositionsDetailed: ['Par Osiris et par Apis...', 'Par Anubis et par Isis...', 'Par Osiris et par Isis...', 'Par la Grande Frite et par Fatis...'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'A. Par Osiris et par Apis...',
        
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

        question: 'Dans quel film d\'animation Obélix a pu boire de la potion magique ?',
        propositionsDetailed: ['Le secret de la potion magique', 'Le domaine des dieux', 'Les 12 travaux d\'Astérix', 'La surprise de César'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'B. Le Domaine des dieux',
        answerComment: 'À la fin, après avoir battu les romains, Obélix reçoit une goutte pour détruire les immeubles',
        
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

        question: 'A été joué par le plus d\'acteurs différents',
        propositionsDetailed: ['Asterix', 'Obelix', 'Les deux'],
        propositionsShort: ['Asterix', 'Obelix', 'Les deux'],
        answer: 'Astérix',
        answerComment: 'Asterix: Christian Clavier, Clovis Cornillac, Édouard Baer, Guillaume Canet\nObélix: Gérard Depardieu, Gilles Lelouche',
        
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

        question: 'A fini par se marier et avoir une famille ',
        propositionsDetailed: ['Asterix', 'Obelix', 'Les deux'],
        propositionsShort: ['Asterix', 'Obelix', 'Les deux'],
        answer: 'Astérix',
        answerComment: '5 petits enfants, dans l\'album L\'anniversaire d\'Astérix et Obélix',
        
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

        question: 'Aime se tailler le menhir',
        propositionsDetailed: ['Asterix', 'Obelix', 'Les deux'],
        propositionsShort: ['Asterix', 'Obelix', 'Les deux'],
        answer: 'Obélix',
        
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

        question: 'Ne connait pas la date de la bataille de Gergovie',
        propositionsDetailed: ['Asterix', 'Obelix', 'Les deux'],
        propositionsShort: ['Asterix', 'Obelix', 'Les deux'],
        answer: 'Obélix',
        answerComment: '-52 avant JC, dans la rentrée des classes',
        
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

        question: 'S\'est fait charmé par Latraviata',
        propositionsDetailed: ['Asterix', 'Obelix', 'Les deux'],
        propositionsShort: ['Asterix', 'Obelix', 'Les deux'],
        answer: 'Obélix',
        answerComment: 'Astérix est devenu amnésique, mais n\'est jamais vraiment tombé sous le charme',
        
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

        question: 'S\'astique souvent la moustache',
        propositionsDetailed: ['Asterix', 'Obelix', 'Les deux'],
        propositionsShort: ['Asterix', 'Obelix', 'Les deux'],
        answer: 'Les deux',
        
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

        title: 'La Gastronomie Gauloise',
        question: 'Quel plat belge le cuisinier Mannekenpix a inventé d\'après les 12 travaux d\'Asterix ?',
        answer: 'La frite',
        answerComment: 'On dit même qu\'il est à l\'origine du poutine quiz',
        
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

        title: 'La Gastronomie Gauloise',
        question: 'Citez-moi deux spécialités récupérées par Asterix et Obelix lors de leur tour de Gaule',
        answer: 'Jambon de Lutèce (Paris)\n Bêtises de Camaracum (Cambrai)\nVin pétillant (Champagne) de Durocortorum (Reims)\nSaucisses et Quenelles de Lugdunum (Lyon)\nSalade nicaeoise de Nicae (Nice)\nBouillabaisse de Massilia (Marseille)\nSaucisses de Tolosa (Toulouse)\nPruneaux d\'Aginum (Agen)\nHuitres et Vin blanc de Burdigala (Bordeaux)\nLa Châtaigne gauloise',
        
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

        title: 'La Gastronomie Gauloise',
        question: 'Quel ingredient Tournivis ajoute à la recette du pudding à l\'Arsenic ?',
        answer: 'Un peu de Vitriol',
        answerComment: 'Acide sulfurique concentré, très corrosif',
        
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

        title: 'La Gastronomie Gauloise',
        question: 'Completez les parôles: "Ecoutez ce qui va suivre, le vieux proverbe est change..."',
        answer: 'On ne mange pas pour vivre, il faut vivre pour manger',
        
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

        title: 'Les voyages d\'Asterix',
        question: 'Dans Asterix et les indiens, d\'apres Obelix, combien de banquets peut-on faire avec ce nombre de bison ? (à 1 près)',
        answer: '3 banquets',
        
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

        title: 'Les voyages d\'Asterix',
        question: 'Dans quel album Asterix et Obelix doivent passer une nuit dans un coffre fort ?',
        answer: 'Astérix chez les Herlvètes',
        
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

        title: 'Les voyages d\'Asterix',
        question: 'V ou F, dans Asterix chez les Goths, Asterix, Obelix et Panoramix organisent une guerre civile dopee à la potion magique pour decourager les Goths d\'envahir la Gaule ?',
        answer: 'Vrai',
        
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

        title: 'Les voyages d\'Asterix',
        question: 'Quel celebre personnage de la litterature espagnole apperçoit-on dans Asterix en Hispanie ?',
        answer: 'Don Quichotte',
        
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

        title: 'Ce qu\'il se passe dans la 3eme case de la page 17',
        question: 'Que se passe-t\'il dans la troisième case de la page 17 d\'Asterix chez Rahazade ?',
        answer: 'Le fakir est saoul après avoir un peu trop bu',
        
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

        title: 'Ce qu\'il se passe dans la 3eme case de la page 17',
        question: 'Que se passe-t\'il dans la troisieme case de la page 17 d\'Asterix et Latraviata ?',
        answer: 'Latraviata essaie de prendre le casque que le père d\'Obélix lui a offert',
        
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

        title: 'Ce qu\'il se passe dans la 3eme case de la page 17',
        question: 'Que se passe-t\'il dans la troisieme case de la page 17 de la Grande Traversee ?',
        answer: 'Un indien fait Glouglouglou',
        
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

        title: 'Ce qu\'il se passe dans la 3eme case de la page 17',
        question: 'Que se passe-t\'il dans la troisieme case de la page 17 des Lauriers de Cesar ?',
        answer: 'Gardefréjus goute la soupe d\'Astérix et Obélix',
        
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

        title: 'Cuir, cuir, moustache',
        question: 'Cuir, Cuir, Moustache',
        answer: 'Cylindric le germain',
        
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

        title: 'Cuir, cuir, moustache',
        question: 'Cuir, Cuir, Moustache',
        answer: 'Sulfurix',
        
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

        title: 'Cuir, cuir, moustache',
        question: 'Cuir, Cuir, Moustache',
        answer: 'Idéfix',
        
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

        title: 'Cuir, cuir, moustache',
        question: 'Cuir, Cuir, Moustache',
        answer: 'Cétautomatix',
        
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

        title: 'Cuir, cuir, moustache',
        question: 'Cuir, Cuir, Moustache',
        answer: 'Kiçàh le fakir',
        
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

        title: 'Cuir, cuir, moustache',
        question: 'Cuir, Cuir, Moustache',
        answer: 'Caius Bonus',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 31,
        type: 'Nugget',
        speed: false,
        round: 2,
        points: 1,

        question: 'Lequel de ces articles scientifiques n\'existe pas ?',
        questionComment: 'A. La bouche, l\'anus et le blastopore - questions ouvertes sur les ouvertures questionables\nB. Le rhume des neiges et ses septs souches\nC. Un anneau pour les multiplexer tous\nD. Les levures fantastiques et où les trouver',
        propositionsDetailed: ['The mouth, the anus, and the blastopore - open questions about questionable openings', 'Snow-cold and its seven strains', 'One ring to multiplex them all', 'Fantastic yeasts and where to find them'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'B. Snow-cold and its seven strains',
        
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

        question: 'Dans l\'allemagne médiévale, comment les couples réglaient leurs problèmes ?',
        propositionsDetailed: ['Au pierre, papier, ciseaux (Stein, Papier, Schere)', 'Au tribunal populaire (Volksgericht)', 'Au duel marital (Eheduellen)', 'Avec une petite blitzkrieg (Mit einem kleinen Blitzkrieg)'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'C. Au duel marital (Eheduellen)',
        answerComment: 'Pour équilibrer, les hommes combattait dans un trou avec une seule main, et les femmes pouvaient frapper les hommes avec un sac de pierre',
        
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

        question: 'Lequel de ces faits est faux ?',
        propositionsDetailed: ['Les alligators sont constemment en érection', 'Les serpents ont deux clitoris', 'Les platodes (vers plats) s\'accouplent suite à un combat d\'escrime avec leur pénis', 'Les pigeons sont adeptes de plans à trois'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'D. Les pigeons sont adeptes de plans à trois',
        
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

        question: 'Quel objet va apparaitre sur cette vidéo ?',
        propositionsDetailed: ['Un Schtroumpf', 'Une chaussette', 'Une bite', 'Un Pikachu'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'C. Une bite',
        answerComment: 'Expliquer histoire du cadeau de Noël',
        
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

        question: 'Lequel de ces vins n\'existent pas ?',
        propositionsDetailed: ['Tu vin plus aux soirées', 'Tout bu or not tout bu', 'Le seigneur des bouchons', 'Va te faire boire'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'C. Le seigneur des bouchons',
        
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

        question: 'Quel acteur est mort le plus de fois sur écran ?',
        propositionsDetailed: ['Sean Bean', 'Nicolas Cage', 'Sir Christopher Lee', 'Danny Trejo'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'D. Danny Trejo',
        answerComment: 'Sean Bean: 23 morts, \nNicolas Cage: 32 morts, \nChristopher Lee: 69 morts, \nDanny Trejo: 72 morts',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 37,
        type: 'SelOuPoivre',
        speed: true,
        round: 2,
        points: 1,

        question: 'A été donné par un homme encapuchonné dans une taverne',
        propositionsDetailed: ['Aragorn', 'Aragog', 'Origan'],
        propositionsShort: ['Aragorn', 'Aragog', 'Origan'],
        answer: 'Aragog',
        
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

        question: 'Aime passer du temps encapuchonné dans une taverne',
        propositionsDetailed: ['Aragorn', 'Aragog', 'Origan'],
        propositionsShort: ['Aragorn', 'Aragog', 'Origan'],
        answer: 'Aragorn',
        
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

        question: 'A un nom qui veut dire "Qui se plaie sur la montagne"',
        propositionsDetailed: ['Aragorn', 'Aragog', 'Origan'],
        propositionsShort: ['Aragorn', 'Aragog', 'Origan'],
        answer: 'Origan',
        
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

        question: 'A des propriétés anti-insectes',
        propositionsDetailed: ['Aragorn', 'Aragog', 'Origan'],
        propositionsShort: ['Aragorn', 'Aragog', 'Origan'],
        answer: 'Origan',
        answerComment: 'Aussi anti-oxidant, sédatif et anti-tussif\nAragorn, lui, a des propriétés anti-orc, anti-nazguls et pro-rohan',
        
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

        question: 'A vécu plus de 200 ans',
        propositionsDetailed: ['Aragorn', 'Aragog', 'Origan'],
        propositionsShort: ['Aragorn', 'Aragog', 'Origan'],
        answer: 'Aragorn',
        answerComment: 'La race des hauts humains peut vivre jusqu\'à 300 ans, mais Aragorn aurait choisi d\'accepter la mort plus tôt',
        
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

        question: 'A repeuplé une colonie avec sa femme',
        propositionsDetailed: ['Aragorn', 'Aragog', 'Origan'],
        propositionsShort: ['Aragorn', 'Aragog', 'Origan'],
        answer: 'Aragog',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 43,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 1,
        points: 1,

        title: 'C\'est moi ou il fait chaud',
        question: 'V ou F, durant les élections présidentielles de 2020, P***hub n\'était accessible qu\'aux américains ayant voté ?',
        answer: 'Vrai',
        answerComment: 'Give a F***, Get a F***',
        
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

        title: 'C\'est moi ou il fait chaud',
        question: 'Quel était le but du "Wank Band", bracelet créé par P***Hub (mais malheureusement jamais commercialisé) ?',
        answer: 'Convertir l\'énergie cinétique de la branlette en électricité',
        
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

        title: 'C\'est moi ou il fait chaud',
        question: 'En 2022, à quelle place se situe le canada en terme de trafic ?',
        answer: '8ème place',
        answerComment: 'Traffic total',
        
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

        title: 'C\'est moi ou il fait chaud',
        question: 'V ou F, P***Hub a une chaîne pour les aveugles ?',
        answer: 'Vrai',
        answerComment: 'La réponse en image',
        
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
        group: 2,
        points: 1,

        title: 'Ca jette un froid',
        question: 'V ou F, la terre est au plus proche du soleil en hivers ?',
        answer: 'Vrai',
        answerComment: 'C\'est assez contrintuitif, mais c\'est l\'angle d\'arrivé des rayons du soleil qui détermine l\'énergie délivrée',
        
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

        title: 'Ca jette un froid',
        question: 'Quelle est la température extérieure la plus froide enregistrée sur Terre ? (À 20 degrés près)',
        answer: '-98°C en antarctique',
        
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

        title: 'Ca jette un froid',
        question: 'Combien de pays de l\'hémisphère sud ont accueillis les jeux olympique d\'hivers ? (À 2 près)',
        answer: 'Aucun',
        answerComment: 'Il n\'y a même aucun pays qui a candidaté (histoire de climat, et surtout de calendrier)',
        
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

        title: 'Ca jette un froid',
        question: 'V ou F, la Terre a attendue presque 20 ans avant d\'envoyer de la neige au Sahara juste pour faire chier Anggun ?',
        answer: 'Vrai',
        answerComment: 'La chanson est sortie en 1997, la première neige enregistrée après ça est en 1979, 2016, 2018, 2021 et 2022',
        
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
        group: 3,
        points: 1,

        title: 'Temperatures et Theories',
        question: 'Posons les bases, quel est la température du zéro absolue en Fahrenheit ? (Avec deux décimales)',
        answer: '-459.67°F',
        
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
        group: 3,
        points: 1,

        title: 'Temperatures et Theories',
        question: 'D\'après quelle constante est dérivée l\'amplitude du Kelvin défini par la théorie cinétique ?',
        answer: 'La constante de Boltsmann',
        
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

        title: 'Temperatures et Theories',
        question: 'Quelle est la loi zéro de la thermodynamique ?',
        answer: 'Si deux systèmes sont tous deux en équilibre thermique avec un troisième système, alors ils sont en équilibre thermique l\'un avec l\'autre.',
        
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

        title: 'Temperatures et Theories',
        question: 'Que fait l\'entropie d\'un système quand sa température approche le zéro absolu ?',
        answer: 'L\'entropie approche une constante (4ème loi de la thermodynamique)',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 55,
        type: 'Addition',
        speed: true,
        round: 2,
        points: 3,

        title: 'Insultes au cinema',
        question: 'Yippie-ki-yay, pauvre con ! (Yippie-ki-yay, motherfucker)',
        answer: 'Piège de Cristal (Die Hard)',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 56,
        type: 'Addition',
        speed: true,
        round: 2,
        points: 3,

        title: 'Insultes au cinema',
        question: 'Stupide hobbit joufflu !',
        answer: 'Le seigneur des anneaux, les deux tours',
        
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

        title: 'Insultes au cinema',
        question: 'Mais tu sais c\'que t\'es ? T\'es le roi des cons au pays des emmerdeurs ! Un pt… un p\'tit con casse couille qui prend la tête d\'accord ?! Hein espèce de petit enculé, de merdeux, qui chiale sa race toute la journée, voilà c\'que t\'es ! Connard, connard, connard… Casse-toi putain, connard, connard, connard ! Petit enculé de merde !',
        answer: 'Nos jours heureux',
        
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

        title: 'Insultes au cinema',
        question: 'Vous êtes le fils d\'une femelle hamster et d\'un homme puant le sureau ! (Your mother was a hamster, and your father smelt of eldeberries)',
        answer: 'Monthy Python, Sacré Graal',
        
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

        title: 'Insultes au cinema',
        question: 'Nom de Dieu de putain de bordel de merde de saloperie de connard d\'enculé de ta mère. Vous voyez, c\'est aussi jouissif que de se torcher le cul avec de la soie, j\'adore ça.',
        answer: 'Matrix Reloaded',
        
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

        title: 'Insultes au cinema',
        question: 'Mon hostie de câlice de pourri sale',
        answer: 'Bon cop, bad cop',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 61,
        type: 'PoutineDeLaMort',
        speed: true,
        round: 3,
        points: 0,

        question: '1. V ou F, D\'après Astérix et les indiens, les romains pensent que la terre est plate ?\n\n2. Diriez-vous qu\'Astérix a un problème de dépendance à la potion magique ?\n\n3. Alors, il est frais ou non ce poisson ?\n\n4. V ou F, Panoramix utilise des cubes de bouillon pour donner du gout à sa potion magique ?\n\n5. En quelle année a eu lieu de bataille de Gergovie ? En chiffre romain bien sur, si vous ne savez pas dites LII av JC\n\n6. Vous êtes plus Choucroutgarnix ou Tartifletix ?\n\n7. Si la Grande Frite était gauloise, combien de sanglier mangerait-elle à chaque buffet ?\n\n8. V ou F, dans les années 80 on pouvait suivre les aventures d\'un autre héro gaulois, le célèbre Agencetourix ?\n\n9. Pensez-vous que Scribe soit une bonne situation ?\n\n10. Pensez vous voir Astérix et Obélix l\'empire du milieu au cinéma quand il sera sorti ?',
        answer: '',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    }
  ]
}
