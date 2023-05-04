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

        question: 'Quel est le nom de la méchante reine dans Blanche-Neige et les Sept Nains ?',
        propositionsDetailed: ['Morgause', 'Grimhilde', 'Amara', 'Valérie'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'B. Grimhilde',
        
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

        question: 'Dans quel film apparait Scar ?',
        propositionsDetailed: ['Aladdin', 'Hercules', 'La Petite Sirène', 'Avengers: End Game'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'B. Hercules',
        
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

        question: 'Mais que fume la chenille dans Alice au pays des merveilles ?',
        propositionsDetailed: ['De la Weed', 'Un Narguilé', 'La Pipe', 'Du Vermifuge'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'B. Un Narguilé',
        
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

        question: 'Dans merlin l\'enchanteur, en quoi se transforme Merlin pour vaincre MIM ?',
        propositionsDetailed: ['En Bouc', 'En Morse', 'En Souris', 'En Virus'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'D. En Virus',
        answerComment: 'Mim en Crocodile -> Merlin en tortue -> Merlin en lièvre -> Mim en renard -> Merlin en chenille -> Mim en poule -> Merlin en morse -> Mim en elephant -> Merlin en souris -> Mim en chat -> Mim en serpent -> Merlin en crabe -> Mim en rhinocéros -> Merlin en bouc -> Mim en dragon -> Merlin en virus -> KO technique, merlin l\'emporte',
         
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

        question: 'Quelle est la meilleure chanson de méchant de Disney ?',
        propositionsDetailed: ['Soyez prêtes, du Roi Lion', 'Pauvres âmes infortunées, de La Petite Sirène', 'Mes amis de l\'au-delà, de la Princesse et la Grenouille', 'Infernale, du Bossu de Notre-Dame'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'En fonction des réponses des équipes, en cas d\'égalité, A.',
        
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

        question: 'Syndrome',
        propositionsDetailed: ['Disney', 'Pixar', 'Les deux'],
        propositionsShort: ['Disney', 'Pixar', 'Les deux'],
        answer: 'Pixar (Les indestructibles, 2004)',
        answerComment: 'Rachat de Pixar par Disney en 2006',
        
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

        question: 'Edgar Balthazar',
        propositionsDetailed: ['Disney', 'Pixar', 'Les deux'],
        propositionsShort: ['Disney', 'Pixar', 'Les deux'],
        answer: 'Disney (Les aristochats)',
        
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

        question: 'Capitaine Rourke',
        propositionsDetailed: ['Disney', 'Pixar', 'Les deux'],
        propositionsShort: ['Disney', 'Pixar', 'Les deux'],
        answer: 'Disney (Atlantis)',
        
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

        question: 'Mor\'Du',
        propositionsDetailed: ['Disney', 'Pixar', 'Les deux'],
        propositionsShort: ['Disney', 'Pixar', 'Les deux'],
        answer: 'Les deux (Rebelle, 2012)',
        answerComment: 'Rachat de Pixar par Disney en 2006',
        
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

        question: 'Randall Boggs',
        propositionsDetailed: ['Disney', 'Pixar', 'Les deux'],
        propositionsShort: ['Disney', 'Pixar', 'Les deux'],
        answer: 'Pixar (Monstres et Companie, 2001)',
        answerComment: 'Rachat de Pixar par Disney en 2006',
        
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

        question: 'Ercole Visconti',
        propositionsDetailed: ['Disney', 'Pixar', 'Les deux'],
        propositionsShort: ['Disney', 'Pixar', 'Les deux'],
        answer: 'Les deux (Luca, 2021)',
        answerComment: 'Rachat de Pixar par Disney en 2006',
        
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

        title: 'Bye bye notre enfance',
        question: 'V ou F, dans le livre Peter Pan et Wendy de James Matthew Barrie, Peter tue les enfants perdus dès qu\'ils grandissent trop ?',
        answer: 'Vrai',
        answerComment: 'Peter Pan est né de la plume de James Matthew Barrie, écrivain né en 1860 en Écosse. Lorsqu\'il a 7 ans, il perd son grand frère David, chouchou de la famille. À sa mort J.M Barrie prend la place de ce frère disparu, il porte ses vêtements, imite sa voix, réécrit son histoire. On raconte même qu\'il s\'était tellement mis dans son personnage, que des médecins constatent un arrêt de croissance. Comme s\'il était bloqué dans la vie qu\'il inventait pour David. Cette histoire hante tous ses textes.\n\nL\'histoire est celle d\'un enfant qui ne veut pas grandir et qui récupère les enfants morts, tombés du berceau ou abandonnés pour les envoyer au pays de “Neverland”. Ce personnage, loin d\'être un enfant de chœur, est habité par une haine profonde des adultes. Un adage de l\'île raconte qu\'à chaque respiration, un adulte meurt. Alors Peter Pan s\'amuse à respirer fort et haleter le plus possible pour tuer le maximum d\'adultes. Il tue aussi les enfants perdus. Dès qu\'ils grandissent, il ne veut plus d\'eux sur cette île. Profondément égoïste, le héros a aussi perdu la notion de temps en étant bloqué depuis des années sur cette île.',
        
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

        title: 'Bye bye notre enfance',
        question: 'Quelle œuvre classique de la littérature britanique a inspiré le Roi Lion ? ',
        answer: 'Hamlet',
        answerComment: 'Les deux intrigues ont un méchant assoiffé de pouvoir qui assassine son frère pour prendre le trône. Il exile ensuite son neveu et essaye de le détruire. Il appartient alors au prince, en proie à des conflits intérieurs émotifs et intellectuels, de récupérer ce qui lui est légitime.',
        
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

        title: 'Bye bye notre enfance',
        question: 'À quel âge la vraie Pocahontas est morte après avoir été faite prisonnière, convertie au catholicisme, et mariée à un producteur de tabac en Angleterre ? (À deux ans près)',
        answer: '22 ans',
        
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

        title: 'Bye bye notre enfance',
        question: 'Comment se fini l\'histoire du Bossu de Notre-Dame dans le livre ?',
        answer: 'Frollo tue Phoebus, Frollo fait tuer Esmeralda, Quasimodo tue Frollo, et il se laisse mourir avec le cadavre d\'Esmeralda',
        
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

        title: 'Hommes de main ambidextres',
        question: 'Qui fut le premier bras droit de méchants à changer de camps dans un film d\'animation Disney ?',
        answer: 'Le chasseur Humbert dans Blanche-Neige et les Sept nains',
        answerComment: 'En même temps, c\'est pas mal le premier film d\'animation de Disney',
        
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

        title: 'Hommes de main ambidextres',
        question: 'Dans quel film Aladdin, Iago laisse définitivement tomber Jafar ?',
        answer: 'Aladdin II, Le retour de Jafar',
        answerComment: 'Il se sacrifie pour arrêter Jafar, mais survit et devient un bon ami d\'Aladdin (et part avec son père dans le 3, le prince des voleurs)',
        
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

        title: 'Hommes de main ambidextres',
        question: 'Pour quelle raison Kronk décide de trahir Yzma dans Kuzco ?',
        answer: 'Parce qu\'elle n\'aime pas les gougères aux épinards de Kronk',
        
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

        title: 'Hommes de main ambidextres',
        question: 'V ou F, à la base, Kaa était sensé trahir Shere Khan dans le Livre de la jungle en sauvant Mowgli ?',
        answer: 'Faux',
        answerComment: 'Dans le livre originel de Rudyard Kipling, Le Livre de la jungle, Kaa est un ami de Mowgli. En effet, il vient en aide à Baloo et Bagheera pour récupérer Mowgli enlevé par les Bandar-Log et plus tard se lie d\'amitié avec le petit homme.',
        
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

        title: 'Les mechants des films Disney n\'ayant pas reussi',
        question: 'Qui est la méchante dans Cendrillon 3, Le sortilège de Cendrillon ?',
        answer: 'Anastasie',
        answerComment: 'La sœur de Cendrillon, qui vole la baguette de la Fée pour remonter dans le temps',
        
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

        title: 'Les mechants des films Disney n\'ayant pas reussi',
        question: 'De quel livre est adapté Taram et le chaudron magique, film où le seigneur des ténèbres cherche une truie divinatoire ?',
        answer: 'Le deuxième tome des Chroniques de Prydain de Lloyd Chudley Alexander',
        
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

        title: 'Les mechants des films Disney n\'ayant pas reussi',
        question: 'Pourquoi la mère de Milo a été enlevée dans Milo sur Mars ?',
        answer: 'Pour élever des petits Martiens',
        
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

        title: 'Les mechants des films Disney n\'ayant pas reussi',
        question: 'Quelle est la véritable identité de l’homme au chapeau melon dans Bienvenue chez les Robinson ?',
        answer: 'Michael "Goob" Yagoobian',
        
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
        question: 'Je voudrais remercier le jury des oscars pour m\'avoir nominé non pas une fois, pas deux fois, pas trois fois, pas quatre fois mais bien cinq fois sans m\'accorder l\'oscar avant de m\'offrir l\'honneur de recevoir ce trophée ! Il aura fallu que je me fasse massacrer par un grizzli, que je dorme dans une carcasse de cheval et pire que tout, que je me laisse pousser la barbe bien trop longtemps, mais on l\'a eu! Merci',
        answer: 'Leonardo DiCaprio dans the revenant',
        
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
        question: 'Je voudrais féliciter les autres nominés, Antonio Banderas dans Douleur et Gloire, Leonardo DiCaprio dans Once upon a time… in Hollywood, Adam Driver dans Marriage Story et Jonathan Pryce dans Les deux papes pour leur incroyable performance, pas aussi bonne que la mienne lorsque je me maquille, mais incroyable. Merci aux escaliers que j\'ai pu dévaler avec autant de grâce, et à mon rire incontrôlable qui a pourri la vie déjà pas fun de mon personnage. Merci',
        answer: 'Joaquin Phoenixdans Joker',
        
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
        question: 'Merci, merci, merci beaucoup! Tellement d\'émotions, mon dieu, merci. Quel honneur, interpréter un tel monument de la culture française et recevoir un oscar pour ça, merci. Lorsqu\'on m\'a proposé le rôle, j\'ai tout de suite su que ça allait le rôle d\'une vie, non, je ne regrette rien, si vous saviez comme je vois la vie en rose sous le ciel de Paris, j\'en aurais presque envie de vous chanter un hymne, un hymne à l\'amour',
        answer: 'Marion Cotillard dans La mome',
        
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
        question: 'Si on m\'avait dit un jour que je gagnerais un oscar pour avoir dansé, chanté et joué des claquettes avec le ténébreux Ryan, j\'y aurais jamais cru ',
        answer: 'Emma Stone dans La La Land',
        
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

        title: 'Quel honneur',
        question: 'Après Million Dollar Baby, Chariots of Fire, Rocky ou encore The Fighter, il était temps que l\'on s\'intéresse au Tennis, et quel meilleur rôle que ce rôle de père et de coach de ce duo de tenniswomen légendaire. Un script de 78 pages pour un plan de 78 pages',
        answer: 'Will Smith dans King Richard',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 29,
        type: 'Tips',
        speed: false,
        round: 1,
        points: 0,

        question: 'Pour quel méchant Disney la chanson Snuff Out the Light a été créée ?',
        answer: 'Yzma (Kuzco l\'empereur mégalo)',
        
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

        question: 'Dans les Simpsons, un Esquilax est:',
        propositionsDetailed: ['Un chien qui a une tête de chat et une queue de requin', 'Un cochon qui peut tisser des toiles et marcher au plafond', 'Un cheval qui a une tête de lapin et un corps de lapin', 'Un furet avec des cornes de cerf et une langue de serpent'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'C.',
        
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

        question: 'Quelle sentence le Juge Michael Cicconetti a deja rendu ?',
        propositionsDetailed: ['Condamné une ado qui n\'a pas payé son taxi à marcher 30 miles à pied', 'Condamné un homme cherchant à se payer une prostitué à défiler en ville déguisé en poulet', 'Condamné une femme qui a abandonné 35 chattons dans une forêt, à passer une nuit dans les bois (il neigeait cette nuit)', 'Tous les châtiments au dessus, et tellement d\'autres'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'D.',
        
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

        question: 'Que peut-on trouver au musee phallologique national d\'Islande ?',
        propositionsDetailed: ['Une collection de godemichet', 'Un moulage du pénis de Jimi Hendrix', 'Une poivrière en forme de pénis', 'La prothèse de pénis de Justin Bieber'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'B.',
        
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

        question: 'Qu\'est-ce que le Grolar ?',
        propositionsDetailed: ['Le résultat d\'un croisement entre un Grizzli et un Ours Polaire', 'Un fromage corse', 'Un champion de concours de mangeurs de l\'extrême', 'Mon état après une raclette'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'A.',
        answerComment: 'Dû au réchauffement climatique, ces deux animaux ont commencés à se croiser, et voilà le résultat',
        
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

        question: 'Combien de Litres d\'eau economiserait-on si on pissait sous la douche tout les jours ?',
        propositionsDetailed: ['1000 L', '1500 L', '2000 L', '2500 L'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'C.',
        
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

        question: 'Harry, t\'es vivant... Et tu tires comme un gland !',
        propositionsDetailed: ['Dumb & Dumber', 'Dumbledore'],
        propositionsShort: ['Dumb & Dumber', 'Dumbledore'],
        answer: 'Dumb & Dumber',
        
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

        question: 'J\'ai cependant la conviction que la vérité est généralement préférable au mensonge',
        propositionsDetailed: ['Dumb & Dumber', 'Dumbledore'],
        propositionsShort: ['Dumb & Dumber', 'Dumbledore'],
        answer: 'Dumbledore (La coupe de feu)',
        
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

        question: 'À présent, Harry, sortons dans la nuit noire à la poursuite de cette fantasque tentatrice, l\'aventure. ',
        propositionsDetailed: ['Dumb & Dumber', 'Dumbledore'],
        propositionsShort: ['Dumb & Dumber', 'Dumbledore'],
        answer: 'Dumbledore (Prince de Sang-mêlé)',
        
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

        question: 'Dites... mais c\'est vrai ! Ouais, ce qu\'on raconte à la télé, qu\'il faut toujours être gentil avec les ptites vieilles. C\'est vrai qu\'elles sont pas complètement nulles',
        propositionsDetailed: ['Dumb & Dumber', 'Dumbledore'],
        propositionsShort: ['Dumb & Dumber', 'Dumbledore'],
        answer: 'Dumb & Dumber',
        
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

        question: 'Une fois de plus, je vais t\'en demander trop Harry',
        propositionsDetailed: ['Dumb & Dumber', 'Dumbledore'],
        propositionsShort: ['Dumb & Dumber', 'Dumbledore'],
        answer: 'Dumbledore (Le prince de Sang-mêlé)',
        
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

        question: 'Je rêve désespérément de faire l\'amour à un petit écolier',
        propositionsDetailed: ['Dumb & Dumber', 'Dumbledore'],
        propositionsShort: ['Dumb & Dumber', 'Dumbledore'],
        answer: 'Dumb & Dumber',
        
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

        title: 'Mots en F- dans les films',
        question: 'D\'après vous, comment s\'appelle le documentaire où le mot F*** est dit le plus ?',
        answer: 'Fuck',
        answerComment: 'C\'est un documentaire sur le mot F***, où il est dit 9.21 fois par minutes',
        
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
        points: 1,

        title: 'Mots en F- dans les films',
        question: 'À votre avis, combien de films utilisent plus de fois le mot F*** que le film The Wolf of Wall Street ? (À 5 près)',
        answer: '2',
        
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

        title: 'Mots en F- dans les films',
        question: 'D\'ailleurs combien de fois le mot F*** est dit dans ce film (The Wolf of Wall street) ? Plus ou moins que 200 ?',
        answer: 'Plus',
        answerComment: '569 fois, ou environ 3.16 fois par minute',
        
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

        title: 'Mots en F- dans les films',
        question: 'De quel pays vient le film le plus vulgaire, le film aux 935 F*** pour 112 minutes: Swearnet: The Movie ?',
        answer: 'Du Canada',
        
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

        title: 'Mots en F- dans la langue française',
        question: 'V ou F, un foutriquet est un homme qui n\'aspire pas confiance, soit par manque de sérieux, soit par manque d\'intelligence ?',
        answer: 'Faux',
        answerComment: 'c\'est un homme chétif, de petite taille, ou une personne insignifiante',
        
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

        title: 'Mots en F- dans la langue française',
        question: 'Est-ce bien avisé de demander de l\'argent à un Fesse-Mathieu ?',
        answer: 'Non',
        answerComment: 'Car c\'est quelqu\'un d\'avare, de radin',
        
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

        title: 'Mots en F- dans la langue française',
        question: 'Que veut dire flagorner dans la phrase «Autant j\'aime qu\'on me flagorne, autant je méprise ceux qui s\'y adonnent» ?',
        answer: 'complimente',
        answerComment: 'Autant j\'apprécie me faire complimenter, autant je méprise les lèche-culs',
        
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

        title: 'Mots en F- dans la langue française',
        question: 'Que recevait-on quand on se prenait un coup de férule à l\'école ?',
        answer: 'Un coup de baton sur les doigts',
        
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

        title: 'Mots en F- qu\'on a inventé',
        question: 'Qu\'est-ce qu\'un Flibou-chauve ?',
        answer: 'Un Flibou-Chauve',
        
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

        title: 'Mots en F- qu\'on a inventé',
        question: 'À combien est vendu un Fjällkuback à IKEA ?',
        answer: 'Pour Felycka $',
        
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

        title: 'Mots en F- qu\'on a inventé',
        question: 'Que peut-on dire d\'un homme qui est Funivare ?',
        answer: 'C\'est un homme qui a 2 couilles et demi',
        
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

        title: 'Mots en F- qu\'on a inventé',
        question: 'Combien d\'œufs est une ferviche ?',
        answer: 'Entre 10 et 30 oeufs',
        
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
        question: 'Alors lui il joue le rôle d\'un animateur radio pendant la guerre du Vietnam qui raconte l\'histoire d\'un professeur de littérature aux méthodes pédagogiques plutôt originales. Ce professeur est ami avec le psychologue Sean Maguire qui suit un jeune homme brillant mais en difficulté. Ce jeune homme est aidé par un Génie au pouvoirs cosmiques phénoménaux dans un vrai mouchoir de poche qui l\'aide a surmonté son traumatisme d\'enfance et à trouver le bonheur.',
        answer: 'Robin Williams',
        answerComment: '(Good Morning Vietnam, Le cercle des poètes disparus, good will hunting, Aladdin)',
        
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
        question: 'Après avoir quitté son mari et son fils pour poursuivre sa carrière, cette femme le regrette rapidement et revient réclamer la garde du fils qu\'elle avait pourtant abandonné. Ce que personne ne savait, c\'est que cette femme est une survivante de l\'holocauste qui a dû faire un choix déchirant pour sauver la vie d\'un de ses enfants. Soit devenir une éditrice tyrannique d\'un magasine de mode, ou devenir mère célibataire propriétaire d\'un hôtel sur une ile grecque et qui doit faire face à l\'arrivée soudaine de son ancien amant et père de sa fille. ',
        answer: 'Meryl Streep',
        answerComment: '(Kramer vs Kramer, Sophie\'s choice, The devil wears prada, Mamma Mia)',
        
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
        question: 'C\'est un inspecteur de police de Hong Kong qui est envoyé à Los Angeles pour apprendre à un jeune garçon la discipline et la maitrise de soi grâce aux arts martiaux. Au cours d\'un de ses voyages, il fait l\'acquisition d\'un costume high-tech qui le transforme en espion quand il le porte, et il s\'en est servi pour voyager dans l\'ouest américain pour sauver une princesse d\'une guerre des gangs de New York',
        answer: 'Jackie Chan',
        answerComment: '(Rush Hour, Karaté Kid, The Tuxedo, Shanghai Noon, Rumble in the Bronx)',
        
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
        question: 'Lorelei Lee, une chanteuse de cabaret blonde et espiègle cherche à épouser un millionnaire. Pour ça elle devient chanteuse de Jazz, mais tombe amoureuse d\'un musicien déguisé en femme. Malheureusement pour lui, elle était tout autant séduisante que manipulatrice et après l\'avoir épousé, elle décida de le tuer avec l\'aide d\'un cow-boy qui l\'avait enlevé dans le passé car il pensait que c\'était la femme de sa vie',
        answer: 'Marilyn Monroe',
        answerComment: '(Gentlemen prefers blondes, Some like it hot, Niagara, Bus Stop)',
        
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

        title: 'Personnalité multiple',
        question: 'C\'est l\'histoire d\'une femme forte et indépendante ayant survécu à des extraterrestres mortels, s\'étant battu pour la sauvegarde des gorilles du Rwanda qu\'elle étudie, et ayant affronté le sexisme et la concurrence pour réussir dans le monde de la finance. D\'ailleurs, les gorilles ne sont pas les seules espèces qu\'elle étudie, elle étudia aussi une espèces humanoïde bleue vivant sur une autre planète tout en ayant un fantôme hantant son appartement, la forçant à appeler une équipe d\'exorcistes modernes.',
        answer: 'Sigourney Weavers',
        answerComment: '(Alien, Gorilles dans la brume, Working Girl, Avatar, Ghostbusters)',
        
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
        id: 59,
        type: 'Tips',
        speed: false,
        round: 2,
        points: 0,

        question: 'Dessin de Guillaume: En moyenne, 10sec par point parié',
        answer: 'Avoir du pain sur la planche',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 60,
        type: 'PoutineDeLaMort',
        speed: false,
        round: 3,
        points: 0,

        question: '1. Avez-vous déjà vu un cycliste respecter un feu rouge ?\n\n2. À qui donneriez vous l\'Oscar de la meilleure patate frite ?\n\n3. D\'après le film, À l\'ouest rien de nouveau. Mais qu\'en est-il de l\'Est ?\n\n4. En terme d\'ambiance, vous préférez la gilfe de Will Smith ou le coup de boule de Zizou ?\n\n5. V ou F, tous les ans, des centaines de noeud papillons migrent vers la cérémonie des oscars afin de se reproduire ?\n\n6. Vous préférez siffler une chanson ou un fut de bière ?\n\n7. V ou F, le film nominé en 2022 "Don\'t look up" raconte l\'histoire surréaliste d\'un homme qui refuse de regarde le film Up ?\n\n8. À votre avis, est-ce que la nommination du film Dune a eu un impact sur le nombre de visite de la dune du pilat près de Bordeaux ?\n\n9. Dans le film Spider-Man No way Home, combien d\'arraignées faisaient partis des figurants ?\n\n10. V ou F, après avatar dans la forêt et avatar 2 dans l\'eau, avatar 3 verra la nation du feu passer à l\'attaque et Jack Sully qui va disparaitre pendant 100 ans avant d\'être retrouvé par deux gamins ?',
        answer: 'NA',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    }
  ]
}
