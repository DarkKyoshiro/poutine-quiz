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

        question: 'Quelle chanson Seth McFarlane a chanté lors de la cérémonie des Oscars de 2013 ?',
        propositionsDetailed: ['Get off the stage (Dégage de la scène)', 'Why not me ? (Pourquoi pas moi ?)', 'We saw your boobs (On a vu vos seins)', 'It used to be better (C\'était mieux avant)'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'C. We saw your boobs',
        
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

        question: 'Quel est la longueur du Tapis Rouge ?',
        propositionsDetailed: ['500 mètres', '500 pieds', '500 mains', '500 verges'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'B. 500 pieds',
        answerComment: '500 pieds = 152.4 mètres (1 pied = 0.3048m)\n500 mains = 50.8 mètres (1 main = 0.1016m)\n500 verges = 457.2 mètres (1 verge = 0.9144m)',
        
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

        question: 'Quel réalisateur a juste dit "Thank you" pour accepter son Oscar ?',
        propositionsDetailed: ['Alfred Hitchcock', 'Clint Eastwood', 'Roman Polanski', 'Woody Allen'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'A. Alfred Hitchcock',
        answerComment: 'Prix Irving G. Thalberg Memorial reçu en 1968 pour l\'ensemble de sa carrière après avoir été nominé pour Rebecca (1940), Lifeboat (1944), Spellbound (1945), Rear window (1954) et Psycho (1960) pour Meilleur directeur',
        
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

        question: 'Comment Roberto Benigni s\'est rendu sur scène pour recevoir son Oscar du meilleur film en langue étrangère en 1999 (Life is Beautiful) ?',
        propositionsDetailed: ['En marchant, ça serait normal', 'En moto, ça serait classe', 'En sautant sur les dossiers des sièges, ça serait accrobatique', 'En parachute, ça serait un peu con vu que la cérémonie est en intérieur'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'C. En sautant sur les dossiers des sièges, ça serait accrobatique',
        answerComment: 'Le film Life is Beautiful a remporté les Oscars du Mailleur acteur, du Meilleur film en langue étrangère, et de la Meilleure musique originale, et a été nommé pour Meilleur film, Meilleur réalisateur, Meilleur scénario original, et Meilleur montage',
        
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

        question: 'Qui a gagné un Oscar et un Razzie dans le même week-end ?',
        propositionsDetailed: ['Halle Berry', 'Marlon Brando', 'Eddie Redmayne', 'Sandra Bullock'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'D. Sandra Bullock',
        answerComment: 'Eddie Redmayne: Oscar du meilleur acteur en 2015 pour The theory of Everything (Stephen Hawking), Razzie du pire acteur secondaire en 2016 pour Jupiter Ascending\nMarlon Brando: Oscar du meilleur acteur en 1955 et 1973 pour On the waterfront et The Godfather, Razzie du pire acteur en 1996 pour The Island of Dr. Moreau\nHalle Berry: Oscar de la meilleure actrice en 2002 pour Monster\'s ball, Razzie de la pire actrice pour Catwoman en 2004\nSandra Bullock: Oscar de la meilleure actrice en 2010 dans The Blind Side, Razzie de la pire actrice et pire couple sur écran dans All about steve en 2010',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 6,
        type: 'SelOuPoivre',
        speed: true,
        round: 1,
        points: 1,

        question: 'Peterson',
        propositionsDetailed: ['Oscar', 'Oscars', 'Les deux'],
        propositionsShort: ['Oscar', 'Oscars', 'Les deux'],
        answer: 'Oscar',
        answerComment: 'Pianiste de jazz lauréat de huit Grammy Awards, Oscar Peterson a continué à maîtriser son art et à jouer sa musique en public jusqu\'en 2006, un an avant sa mort. Bien qu\'il ait été avant tout un artiste solo, le "Maharaja du clavier" a joué avec d\'innombrables autres musiciens tout au long de sa carrière de plus de 60 ans dans le jazz, et il est considéré comme l\'un des plus grands pianistes de jazz de tous les temps',
        
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

        question: 'Cuaron',
        propositionsDetailed: ['Oscar', 'Oscars', 'Les deux'],
        propositionsShort: ['Oscar', 'Oscars', 'Les deux'],
        answer: 'Oscars',
        answerComment: 'Alfonso Cuarón. En 2013, il a remporté l\'Oscar du meilleur réalisateur pour "Gravity", un film de science-fiction acclamé par la critique. Il a également écrit et réalisé "Roma" en 2018, un drame semi-autobiographique qui a remporté trois Oscars, dont celui du meilleur réalisateur, du meilleur film étranger et de la meilleure photographie. Alfonso Cuarón est reconnu pour son style visuel distinctif, sa narration captivante et son engagement en faveur de l\'inclusion et de la diversité dans l\'industrie cinématographique',
        
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

        question: 'Wilde',
        propositionsDetailed: ['Oscar', 'Oscars', 'Les deux'],
        propositionsShort: ['Oscar', 'Oscars', 'Les deux'],
        answer: 'Oscar',
        answerComment: 'Cet écrivain et poète irlandais du 19e siècle continue d\'avoir une influence dans le monde littéraire d\'aujourd\'hui. Quand on pense aux classiques de la littérature, il est difficile d\'ignorer son roman Le portrait de Dorian Gray ou son chef-d\'œuvre L\'importance d\'être constant, qui sont tous deux des lectures obligatoires dans de nombreux cours d\'anglais',
        
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

        question: 'Isaac',
        propositionsDetailed: ['Oscar', 'Oscars', 'Les deux'],
        propositionsShort: ['Oscar', 'Oscars', 'Les deux'],
        answer: 'Oscar',
        answerComment: 'Óscar Isaac Hernández Estrada. Il a tenu des rôles principaux au cinéma dans la tragicomédie Inside Llewyn Davis (2013), pour laquelle il a été nommé aux Golden Globe Awards, et dans le film australien Balibo, pour lequel il a remporté le prix AACTA du meilleur acteur dans un second rôle. Il est apparu dans la trilogie des suites de Star Wars dans le rôle du pilote de X-wing Poe Dameron, et dans X-Men : Apocalypse (2016) dans le rôle du super-méchant mutant titulaire Apocalypse. Il a également été la tête d\'affiche de la mini-série Show Me a Hero (2015) de HBO dans le rôle du politicien Nick Wasicsko, qui lui a valu le Golden Globe Award du meilleur acteur - mini-série ou téléfilm. En 2016, Time a désigné Isaac comme l\'une des 100 personnes les plus influentes du monde dans sa liste annuelle Time 100.',
        
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

        question: 'Dujardin',
        propositionsDetailed: ['Oscar', 'Oscars', 'Les deux'],
        propositionsShort: ['Oscar', 'Oscars', 'Les deux'],
        answer: 'Oscars',
        answerComment: 'Jean Dujardin. Acteur français connu pour ses rôles comiques. Il a commencé sa carrière dans des séries télévisées et des publicités avant de devenir célèbre avec la série télévisée "Un gars, une fille". Il est devenu une star du cinéma français avec les films OSS 117 et The Artist, qui lui a valu l\'Oscar du meilleur acteur en 2012. Depuis, il a continué à jouer dans des films à succès en France et à l\'étranger, y compris dans des films hollywoodiens tels que The Monuments Men et The Wolf of Wall Street',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 11,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 1,
        points: 1,

        title: 'Mais c\'est un scandale',
        question: 'Pour quelle raison Will Smith a giflé Chris Rock durant la cérémonie de remise des oscars en 2022 ?',
        answer: 'Car il s\'est moqué de Jada Smith, la femme de Will, et de son alopecia',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 12,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 1,
        points: 1,

        title: 'Mais c\'est un scandale',
        question: 'Lors de la cérémonie de remise des oscars de 2017, l\'oscar de la meilleure photographie a été remis à La La Land par erreur. À quel film devait revenir ce prix ?',
        answer: 'Moonlight',
        answerComment: 'La mauvaise enveloppe a été remise aux présentateur',
        
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

        title: 'Mais c\'est un scandale',
        question: 'Lors de la cérémonie des oscars de 2014, quelle chanteuse a été annoncée comme s\'appelant Adele Dazeem ? ',
        answer: 'Indila Menzel',
        answerComment: 'John Travolta s\'est planté (le nom était écrit phonétiquement, et il a été prévenu au dernier moment)',
        
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

        title: 'Mais c\'est un scandale',
        question: 'Combien de statuette des oscars ont été volées en 2000 ? (À 10 près)',
        answer: '55',
        answerComment: '52 statuettes furent retrouvées dans une poubelle à l\'arrière d\'un supermarché par un clochard, qui est donc devenu l\'homme le plus récompensé de l\'histoire des oscars. Deux statuettes n\'ont jamais été retrouvées.',
        
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
        group: 2,
        points: 1,

        title: 'Ces premières fois dont on se souvient',
        question: 'Lors de quelle cérémonie le prix du meilleur long métrage international a été remis pour la première fois ? (À 10 ans près)',
        answer: '29ème',
        answerComment: 'prix remis à La Strada de Federico Fellini (Gervaise de René Clément était nominé)',
        
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
        group: 2,
        points: 1,

        title: 'Ces premières fois dont on se souvient',
        question: 'En quelle année a été diffusée la cérémonie pour la première fois en couleur ? (À 5 ans près)',
        answer: '1966 pour la 38ème édition',
        
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

        title: 'Ces premières fois dont on se souvient',
        question: 'Pour quel film Rihanna a-t\'elle été nominée pour la première fois pour meilleure chanson originale en 2023 ?',
        answer: 'Black Panther 2: Wakanda Forever',
        answerComment: 'Pour le titre Lift me up',
        
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

        title: 'Ces premières fois dont on se souvient',
        question: 'Pour quel film l\'actrice Hattie McDaniel fut la première afro-américaine à gagner un Oscar ?',
        answer: 'Gone with the Wind',
        answerComment: 'Hattie McDaniel joua Mammy et remporta l\'oscar du meilleure rôle secondaire féminin en 1939. Elle dû cependant s\'assoir à part des autres invités car c\'était encore la ségrégation',
        
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
        group: 3,
        points: 1,

        title: 'La cérémonie de remise des oscars de 1929',
        question: 'Dans quel hôtel s\'est tenu cette première cérémonie ?',
        answer: 'The Hollywood Roosevelt Hotel',
        
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
        group: 3,
        points: 1,

        title: 'La cérémonie de remise des oscars de 1929',
        question: 'Quel était le prix du ticket pour assister à cette cérémonie ? ',
        answer: '5$ de l\'époque, 79$ avec les prix de 2021',
        
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

        title: 'La cérémonie de remise des oscars de 1929',
        question: 'D\'ailleurs, combien y avait-il de personne lors de cette soirée ? ',
        answer: 'Autour de 270',
        answerComment: 'Hattie McDaniel joua Mammy et remporta l\'oscar du meilleure rôle secondaire féminin en 1939. Elle dû cependant s\'assoir à part des autres invités car c\'était encore la ségrégation',
        
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

        title: 'La cérémonie de remise des oscars de 1929',
        question: 'Combien de temps à l\'avance les noms des gagnants ont été dévoilé aux médias ?',
        answer: '3 mois',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 23,
        type: 'Addition',
        speed: true,
        round: 1,
        points: 3,

        title: 'Quel honneur',
        question: 'Je voudrais remercier le jury des oscars pour m\'avoir nominé non pas une fois, pas deux fois, pas trois fois, pas quatre fois mais bien cinq fois sans m\'accorder l\'oscar avant de m\'offrir l\'honneur de recevoir ce trophée ! Il aura fallu que je me fasse massacrer par un grizzli, que je dorme dans une carcasse de cheval et pire que tout, que je me laisse pousser la barbe bien trop longtemps, mais on l\'a eu! Merci',
        answer: 'Leonardo DiCaprio dans the revenant',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 24,
        type: 'Addition',
        speed: true,
        round: 1,
        points: 3,

        title: 'Quel honneur',
        question: 'Je voudrais féliciter les autres nominés, Antonio Banderas dans Douleur et Gloire, Leonardo DiCaprio dans Once upon a time… in Hollywood, Adam Driver dans Marriage Story et Jonathan Pryce dans Les deux papes pour leur incroyable performance, pas aussi bonne que la mienne lorsque je me maquille, mais incroyable. Merci aux escaliers que j\'ai pu dévaler avec autant de grâce, et à mon rire incontrôlable qui a pourri la vie déjà pas fun de mon personnage. Merci',
        answer: 'Joaquin Phoenixdans Joker',
        
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

        title: 'Quel honneur',
        question: 'Merci, merci, merci beaucoup! Tellement d\'émotions, mon dieu, merci. Quel honneur, interpréter un tel monument de la culture française et recevoir un oscar pour ça, merci. Lorsqu\'on m\'a proposé le rôle, j\'ai tout de suite su que ça allait le rôle d\'une vie, non, je ne regrette rien, si vous saviez comme je vois la vie en rose sous le ciel de Paris, j\'en aurais presque envie de vous chanter un hymne, un hymne à l\'amour',
        answer: 'Marion Cotillard dans La mome',
        
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

        title: 'Quel honneur',
        question: 'Si on m\'avait dit un jour que je gagnerais un oscar pour avoir dansé, chanté et joué des claquettes avec le ténébreux Ryan, j\'y aurais jamais cru ',
        answer: 'Emma Stone dans La La Land',
        
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

        title: 'Quel honneur',
        question: 'Après Million Dollar Baby, Chariots of Fire, Rocky ou encore The Fighter, il était temps que l\'on s\'intéresse au Tennis, et quel meilleur rôle que ce rôle de père et de coach. Un script de 78 pages pour un plan de 78 pages',
        answer: 'Will Smith dans King Richard',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 28,
        type: 'Nugget',
        speed: false,
        round: 2,
        points: 1,

        question: 'Ou est le coeur des crevettes ?',
        propositionsDetailed: ['Dans sa tête, ça serait malin', 'Dans sa poitrine, ça serait normal', 'Dans son ventre, ça serait peu appétissant', 'Dans son cul, et là j\'ai pas de vannes'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'A. Dans sa tête',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 29,
        type: 'Nugget',
        speed: false,
        round: 2,
        points: 1,

        question: 'Lequel de ces Kit-Kat n\'existe pas ?',
        propositionsDetailed: ['Le Kit-Kat Patate Douce', 'Le Kit-Kat Wasabi', 'Le Kit-Kat Orange et Brandy', 'Le Kit-Kat Pesto'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'D. Le Kit-Kat Pesto',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 30,
        type: 'Nugget',
        speed: false,
        round: 2,
        points: 1,

        question: 'Combien de calories brulerait-on si on se frappait la tete contre un mur pendant 1h ?',
        propositionsDetailed: ['100 calories, ou autant que d\'avoir un fou rire pendant 30-40 min', '150 calories ou autant que de se brosser les dents pendant 45 min', '200 calories ou autant qu\'un baisé de 1h30', '0 calories, ou autant que d\'écouter un discours de Donald Trump pendant trop longtemps'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'B. 150 calories',
        
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

        question: 'Qui est Nick Carter ?',
        propositionsDetailed: ['Un chien détective qui a rattrapé plus de 600 fugitifs dans sa carrière', 'Un gorille qui parle le langage des signes', 'Un chat qui a survécu au naufrage de 5 navires militaires allemands', 'Un pigeon qui a chié sur plus de 100 parisiens en une journée'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'A. Un chien détective qui a rattrapé plus de 600 fugitifs dans sa carrière',
        answerComment: 'C\'était un Kentucky hound, né en 1899 et son maitre était Captain G.V. Mullikin. Il était célèbre pour pouvoir traquer des pistes vieilles, il a par exemple suivi une piste sur 55 miles, ou a retrouver la trace d\'un arsoniste 100 heures après le feu. Bref c\'était un bon chien.\nLe gorille s\'appelait Koko, a discuté avec Robin Williams, et le chat s\'appelait Sam l\'insubmersible et à survécu au Bismarck, HMS Cossack et HMS Ark Royal. Il est mort tranquillement à 14 ans sur terre',
        
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

        question: 'Comment s\'appelle le dieu egyptien de l\'infini, et de l\'eternite ?',
        propositionsDetailed: ['Meh', 'Heh', 'Beh', 'Pascal'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'B. Heh',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 33,
        type: 'SelOuPoivre',
        speed: true,
        round: 2,
        points: 1,

        question: 'Le phare du petit Minou',
        propositionsDetailed: ['Finistère', 'Fistinière'],
        propositionsShort: ['Finistère', 'Fistinière'],
        answer: 'Finistère',
        answerComment: 'Le phare du Petit Minou indique aux bateaux désirant se rendre à Brest, la route à suivre pour entrer dans la rade. Il forme un alignement avec le phare du Portzic. La plage du Minou2, située à proximité, a été le lieu d\'aboutissement, en 1869, de l\'un des premiers câbles télégraphiques reliant l\'Europe aux États-Unis (provenant de Brest, le câble était enterré le long de la route de Brest au Conquet).',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 34,
        type: 'SelOuPoivre',
        speed: true,
        round: 2,
        points: 1,

        question: 'Le parc d\'attrape-fion',
        propositionsDetailed: ['Finistère', 'Fistinière'],
        propositionsShort: ['Finistère', 'Fistinière'],
        answer: 'Fistinière',
        answerComment: 'Le parc "d\'Attrap\'Fion", un lieu aménagé, où tu peux t\'adonner au plaisir de t\'amuser en plein air',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 35,
        type: 'SelOuPoivre',
        speed: true,
        round: 2,
        points: 1,

        question: 'La Chappelle Sainte-Barbe du Faouët',
        propositionsDetailed: ['Finistère', 'Fistinière'],
        propositionsShort: ['Finistère', 'Fistinière'],
        answer: 'Finistère',
        answerComment: 'La chapelle Sainte-Barbe est située sur la commune du Faouët dans le Morbihan1, à un kilomètre et demi au nord-est du bourg. Étape sur un des chemins bretons du pèlerinage vers Saint-Jacques-de-Compostelle et sanctuaire attirant de nombreux fidèles lors du pardon de sainte Barbe.',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 36,
        type: 'SelOuPoivre',
        speed: true,
        round: 2,
        points: 1,

        question: 'Saint-Jean du doigt',
        propositionsDetailed: ['Finistère', 'Fistinière'],
        propositionsShort: ['Finistère', 'Fistinière'],
        answer: 'Finistère',
        answerComment: 'Saint-Jean-du-Doigt est une commune littorale de la Manche située dans le département du Finistère, dans la région Bretagne, en France. Le nom vient d\'une relique supposée être l\'index de saint Jean-Baptiste.',
        
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

        question: 'La Chappelle Fistine',
        propositionsDetailed: ['Finistère', 'Fistinière'],
        propositionsShort: ['Finistère', 'Fistinière'],
        answer: 'Fistinière',
        answerComment: 'Pour citer des commentaires: "Formidable moment, mais un peu mal au cul quand même..."\n"Excellent ! La meilleure après-midi de toute ma vie, je ne me suis jamais senti aussi détendu et plein à la fois :)"\n"Si jamais vous retrouver ma montre ça serait sympa de me la renvoyer par la poste..."',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 38,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 1,
        points: 1,

        title: 'C\'est normal au Japon!',
        question: 'Quel célèbre jeu tv japonais voyais des candidats affronter une série d\'épreuves humoristique pour tenter de gagner 1 million de yen ?',
        answer: 'Takeshi\'s Castle',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 39,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 1,
        points: 1,

        title: 'C\'est normal au Japon!',
        question: 'D\'ailleurs, combien de candidat ont réussi vaincre le fameux compte Takeshi durant toute la durée de l\'émission ? (À 3 près)',
        answer: '8',
        answerComment: 'Sur plus de 130 épisodes',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 40,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 1,
        points: 1,

        title: 'C\'est normal au Japon!',
        question: 'V ou F, les toilettes japonaises peuvent avoir une option pour jouer un bruit de fond vous permettant de vous lâcher sans craindre d\'être entendu ? ',
        answer: 'Vrai',
        answerComment: 'On y retrouve aussi une fonction siège chauffant, massage par jet d\'eau pulsé, séchage par ventilation, et bien d\'autres',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 41,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 1,
        points: 1,

        title: 'C\'est normal au Japon!',
        question: 'V ou F, Godzilla a la citoyenneté japonaise ?',
        answer: 'Vrai',
        answerComment: 'Âgé de 61 ans, ses papiers lui ont été remis en grande pompe par la mairie de Shinjuku en avril 2015. Ainsi, le lézard géant devient également l\'ambassadeur du tourisme de la municipalité de quelques 310.000 habitants.',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 42,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 1,
        points: 0,

        title: 'C\'est normal au Japon!',
        question: 'V ou F, Les japonais célèbre la fin de la période de la gastro en vénérant une statue géante de crotte doré ?',
        answer: 'Faux',
        answerComment: 'mais ils vénèrent une statue de penis rose pour célébrer la fertilité',
        
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
        group: 2,
        points: 1,

        title: 'America, F*** Yeah!!',
        question: 'V ou F, un homme a tenté de braquer une banque en utilisant un avocat comme arme ?',
        answer: 'Vrai',
        
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
        group: 2,
        points: 1,

        title: 'America, F*** Yeah!!',
        question: 'Quel est le budget de l\'armée américaine pour 2023 ? (À 50 milliards près)',
        answer: '797.7 milliards de dollars',
        
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
        group: 2,
        points: 1,

        title: 'America, F*** Yeah!!',
        question: 'Comment a réagi Buzz Aldrin lorsqu\'un conspirationniste insista que l\'alunissage est un coup monté ? ',
        answer: 'Il lui a mis un poing dans la face',
        
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
        group: 2,
        points: 1,

        title: 'America, F*** Yeah!!',
        question: 'Pourquoi Joshua James a tiré plusieurs fois sur une voiture en marche ? (Heureusement sans faire de victimes)',
        answer: 'Parce qu\'il pensait que les conducteurs était des Aliens',
        
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
        group: 3,
        points: 1,

        title: 'L\'autruche d\'Afrique du Nord',
        question: 'Sur combien de mois s\'étends la période de reproduction ?',
        answer: '7 mois',
        
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
        group: 3,
        points: 1,

        title: 'L\'autruche d\'Afrique du Nord',
        question: 'Quels sont ces mois ?',
        answer: 'Mars à Octobre',
        
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
        group: 3,
        points: 1,

        title: 'L\'autruche d\'Afrique du Nord',
        question: 'Pouvez-vous me décrire en quelques mots la danse nuptiale de l\'Autruche d\'Afrique du Nord mâle ?',
        answer: 'Il bat des ailes dans un mouvement rotatif en se mettant à genoux. Il plie son cou en forme de S et il balance la tête de droite à gauche.',
        
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
        group: 3,
        points: 1,

        title: 'L\'autruche d\'Afrique du Nord',
        question: 'Combien d\'œufs pond la femelle au cours de la 1ère saison de ponte ?',
        answer: '3 mois',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 51,
        type: 'Addition',
        speed: true,
        round: 2,
        points: 3,

        title: 'Personnalité multiple',
        question: 'Alors lui il joue le rôle d\'un animateur radio pendant la guerre du Vietnam qui raconte l\'histoire d\'un professeur de littérature aux méthodes pédagogiques plutôt originales. Ce professeur est ami avec le psychologue Sean Maguire qui suit un jeune homme brillant mais en difficulté. Ce jeune homme est aidé par un Génie au pouvoirs cosmiques phénoménaux dans un vrai mouchoir de poche.',
        answer: 'Robin Williams',
        answerComment: '(Good Morning Vietnam, Le cercle des poètes disparus, good will hunting, Aladdin)',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 52,
        type: 'Addition',
        speed: true,
        round: 2,
        points: 3,

        title: 'Personnalité multiple',
        question: 'Après avoir quitté son mari et son fils pour poursuivre sa carrière avant de le regretter et revenir réclamer la garde du fils qu\'elle avait pourtant abandonné. Ce que personne ne savait, c\'est que cette femme est une survivante de l\'holocauste qui doit faire un choix déchirant pour sauver la vie d\'un de ses enfants. Soit devenir une éditrice tyrannique d\'un magasine de mode, ou devenir mère célibataire propriétaire d\'un hôtel sur une ile grecque et qui doit faire face à l\'arrivée soudaine de son ancien amant et père de sa fille. ',
        answer: 'Meryl Streep',
        answerComment: '(Kramer vs Kramer, Sophie\'s choice, The devil wears prada, Mamma Mia)',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 53,
        type: 'Addition',
        speed: true,
        round: 2,
        points: 3,

        title: 'Personnalité multiple',
        question: 'C\'est un inspecteur de police de Hong Kong qui est envoyé à Los Angeles pour apprendre à un jeune garçon la discipline et la maitrise de soi grâce aux arts martiaux. Au cours d\'un de ses voyages, il fait l\'acquisition d\'un costume high-tech qui le transforme en espion quand il le porte, et il s\'en est servi pour voyager dans l\'ouest américain pour sauver une princesse d\'une guerre des gangs de New York',
        answer: 'Jackie Chan',
        answerComment: '(Rush Hour, Karaté Kid, The Tuxedo, Shanghai Noon, Rumble in the Bronx)',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 54,
        type: 'Addition',
        speed: true,
        round: 2,
        points: 3,

        title: 'Personnalité multiple',
        question: 'Lorelei Lee, une chanteuse de cabaret blonde et espiègle cherche à épouser un millionnaire. Pour ça elle devient chanteuse de Jazz, mais tombe amoureuse d\'un musicien déguisé en femme. Malheureusement pour lui, elle était tout autant séduisante que manipulatrice et après l\'avoir épousé décida de le tuer à l\'aide d\'un cow-boy qui l\'avait enlevé dans le passé car il pensait que c\'était la femme de sa vie',
        answer: 'Marilyn Monroe',
        answerComment: '(Gentlemen prefers blondes, Some like it hot, Niagara, Bus Stop)',
        
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

        title: 'Personnalité multiple',
        question: 'C\'est l\'histoire d\'une femme forte et indépendante ayant survécu à des extraterrestres mortels, s\'étant battu pour la sauvegarde des gorilles du Rwanda qu\'elle étudie, et ayant affronté le sexisme et la concurrence pour réussir dans le monde de la finance. Les gorilles ne sont pas les seules espèces qu\'elle étudie, elle étudia aussi une espèces humanoïde bleue vivant sur une autre planète tout en ayant un fantôme hantant son appartement, la forçant à appeler une équipe d\'exorcistes modernes',
        answer: 'Sigourney Weavers',
        answerComment: '(Alien, Gorilles dans la brume, Working Girl, Avatar, Ghostbusters)',
        
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

        title: 'Personnalité multiple',
        question: 'Alors c\'est un alcoolique suicidaire qui part à Las Vegas pour boire jusqu\'à la mort car il n\'arrive pas à adapter un livre difficile en film. Dans son état d\'alcoolémie avancé, il vola la déclaration d\'indépendance des états-unis, a vendu son ame au diable pour sauver son père adoptif, s\'est retrouvé pris dans un avion avec pleins de criminels dangereux, a aidé un ancien prisonnier à s\'échapper d\'Alcatraz, a volé 50 voitures en une nuit pour sauver son frère, à trafiqué des armes pendant un conflit en Afrique, et à découvert une prophétie terrifiante sur la fin du monde dans une capsule temporelle d\'une jeune enfant. Bref on peut dire qu\'il n\'a pas l\'alcool facile',
        answer: 'Nicolas Cage',
        answerComment: '(Leaving Las Vegas, Adaptation, National Treasure, Ghost Rider, Con air, The Rock, Gone in 60 seconds, Lord of War, Knowing)',

        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 57,
        type: 'PoutineDeLaMort',
        speed: true,
        round: 3,
        points: 0,

        question: '1. V ou F, D\'après Astérix et les indiens, les romains pensent que la terre est plate ?\n\n2. Diriez-vous qu\'Astérix a un problème de dépendance à la potion magique ?\n\n3. Alors, il est frais ou non ce poisson ?\n\n4. V ou F, Panoramix utilise des cubes de bouillon pour donner du gout à sa potion magique ?\n\n5. En quelle année a eu lieu de bataille de Gergovie ? En chiffre romain bien sur, si vous ne savez pas dites LII av JC\n\n6. Vous êtes plus Choucroutgarnix ou Tartifletix ?\n\n7. Si la Grande Frite était gauloise, combien de sanglier mangerait-elle à chaque buffet ?\n\n8. V ou F, dans les années 80 on pouvait suivre les aventures d\'un autre héro gaulois, le célèbre Agencetourix ?\n\n9. Pensez-vous que Scribe soit une bonne situation ?\n\n10. Pensez vous voir Astérix et Obélix l\'empire du milieu au cinéma quand il sera sorti ?',
        answer: 'NA',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    }
  ]
}
