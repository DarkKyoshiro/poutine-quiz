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

        title: 'Sorti de son contexte',
        question: 'Un peu gluant, mais appétissant',
        answer: 'Le Roi Lion, Simba',
        
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

        title: 'Sorti de son contexte',
        question: 'Patati, Patata, toute la journée ça n\'arrête pas',
        answer: 'Cendrillon, Jaq',
        
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

        title: 'Sorti de son contexte',
        question: 'Tu connais les hommes. Ils croient que "non" veut dire "oui" et "laisse tomber" veut dire "je t\'aimerais toujours"',
        answer: 'Hercule, Mégara',
        
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

        title: 'Sorti de son contexte',
        question: 'Maintenant tais-toi et finis ton crouton',
        answer: 'Ratatouille, Django (le père)',
        
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

        title: 'Sorti de son contexte',
        question: 'Mieux vaut demander pardon que la permission',
        answer: 'Le Bossu de Notre dame, La Muraille',
        answerComment: 'Les deux autres sont La Rocaille et La Volière',
        
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
        propositionsDetailed: ['Condamné un homme cherchant à se payer une prostitué à défiler en ville déguisé en poulet', 'Condamné une femme qui a abandonné 35 chattons dans une forêt, à passer une nuit dans les bois (il neigeait cette nuit)', 'Tous les châtiments au dessus, et tellement d\'autres', 'Condamné à de la prison... Oui la justice c\'est pas toujours drôle'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'C.',
        answerComment: 'Un homme ayant commis des abus sur des enfants a été envoyé dans une école en tenue de chien et a dû parler de la sécurité des enfants.\n\nLors de fortes tempêtes de neige, il a ordonné aux prévenus de déneiger une maison de retraite.\n\nLes adolescents qui ont crevé les pneus des bus scolaires ont été forcés d\'organiser un pique-nique pour les enfants de l\'école primaire dont la sortie a été annulée à cause de la farce.',
        
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
        propositionsDetailed: ['1000 L', '1500 L', '2000 L', 'Pas assez pour justifier les engueulades par sa blonde'],
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

        question: 'Oh oui Harry, il a le droit, et il l\'a fait... Alors dorénavent, on viendra jouer à Donkey Kong',
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

        title: 'Toutes les reponses sont des titres de films X',
        question: 'film d\'espionnage de 1995 qui suit les aventures d\'un agent secret britannique. Le film commence par l\'attaque du complexe de surveillance de la Russie par des criminels inconnus, qui volent un satellite contrôlé par un système appelé comme le film d\'ailleurs. Le personnage principal est chargé de récupérer le satellite volé et d\'empêcher son utilisation pour des attaques terroristes. Au cours de sa mission, il rencontre une programmatrice informatique russe et découvre qu\'un ancien agent du MI6 est impliqué dans le vol du satellite. Il doit alors affronter l\'ancien agent du MI6 dans un combat final épique pour empêcher le satellite de détruire Londres.',
        answer: 'Golden Eye (Golden Ass 007)',
        
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

        title: 'Toutes les reponses sont des titres de films X',
        question: 'Roman publié en 1870, qui suit les aventures du professeur Aronnax, de son fidèle serviteur Conseil et du harponneur Ned Land alors qu\'ils sont capturés par le mystérieux capitaine Nemo à bord du sous-marin futuriste "Nautilus". Au cours de leur voyage sous les mers, le capitaine Nemo leur fait découvrir les merveilles et les dangers des fonds marins, mais aussi sa propre histoire douloureuse et sa quête de vengeance contre les impérialistes qui ont tué sa famille. Malgré les efforts d\'Aronnax pour convaincre Nemo de renoncer à sa vengeance, les trois captifs finissent par s\'échapper du Nautilus après une série d\'aventures et de rebondissements.',
        answer: '20 000 lieux sous les mères (20 000 vieux sous mémère)',
        
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

        title: 'Toutes les reponses sont des titres de films X',
        question: 'Film de science-fiction de 1982. Le film suit l\'histoire d\'un jeune garçon nommé Elliott qui rencontre un extraterrestre égaré et décide de l\'aider à rentrer chez lui. Elliott et ses amis le cachent dans leur maison, le nourrissent et l\'aident à construire une balise pour appeler son vaisseau spatial. Pendant ce temps, les autorités cherchent l\'Extra-terrestre et les enfants doivent travailler ensemble pour le protéger et le ramener chez lui avant qu\'il ne soit trop tard.',
        answer: 'ET l\'Extra-terrestre (ET l\'Extra-testicule)',
        
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

        title: 'Toutes les reponses sont des titres de films X',
        question: 'Film de guerre de 1998. Le film suit un groupe de soldats américains pendant la Seconde Guerre mondiale qui sont chargés de retrouver et de ramener sain et sauf un soldat, dont les trois frères ont été tués au combat. Le groupe de soldats traverse les lignes ennemies pour trouver le soldat et doit faire face à de nombreux obstacles et pertes en cours de route. Finalement, ils le trouvent, mais sont attaqués par les forces allemandes, ce qui entraîne une bataille épique et coûteuse pour défendre leur position et protéger le soldat.',
        answer: 'Il faut sauver le soldat Ryan (Il faut sauter la sœur de Ryan)',
        
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

        title: 'Toutes les reponses sont des titres de films X',
        question: 'Western spaghetti de 1966. Le film suit trois hommes, un chasseur de primes, un tueur à gages et un voleur, alors qu\'ils poursuivent une fortune en pièces d\'or pendant la guerre civile américaine. Les trois hommes, qui se méprisent mutuellement, font face à de nombreux obstacles et ennemis en cours de route, notamment l\'armée et les bandits. Cependant, leur quête les mène finalement à un cimetière, où les pièces d\'or sont enterrées. Les trois hommes se battent alors à mort pour s\'emparer de la fortune, mais seul l\'un d\'entre eux réussit à s\'en sortir.',
        answer: 'Le bon, la brute et le truand (Le bon, la brute et le trou béant)',
        
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

        title: 'Toutes les reponses sont des titres de films X',
        question: 'film de 1990. L\'histoire suit le lieutenant John Dunbar de l\'armée américaine pendant la Guerre de Sécession, qui est envoyé dans un poste de traite isolé dans les Grandes Plaines. Là-bas, il rencontre une tribu de Sioux et se lie d\'amitié avec eux, apprenant leur langue et leur culture. Dunbar est ensuite confronté aux tensions entre l\'armée américaine et les tribus indigènes, et doit choisir de quel côté il se tiendra. Au fil du temps, Dunbar devient de plus en plus intégré à la tribu Sioux et s\'éloigne de son ancienne vie d\'homme blanc. Cependant, la guerre et le racisme persistent, entraînant des conflits violents entre les différentes factions.',
        answer: 'Danse avec les loups (Danse avec mes burnes)',

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

        question: '1. Pensez-vous que Georges soit un bon choix de prénom pour le 8ème nain ?\n\n2. V ou F, la bonne fée avait d\'autres intentions en faisant grandir le nez de Pinocchio à chaque mensonge ?\n\n3. Citez une personne qui n\'a jamais couché avec Zeus\n\n4. Alors certes à notre époque Lady Tremaine (la belle mère de Cendrillon) serait qualifiée de grosse pute, mais à leur époque, grosse pute ou pas grosse pute ?\n\n5. Nommez-moi une émission de télé-réalité à laquelle Gaston pourrait participer\n\n6. Quel est votre méchant de Disney préféré ? Si vous ne savez pas ou que vous n\'avez pas de gout, répondez Scar.\n\n7. Dans Alice au pays des merveilles, une Reine de cœur vaut plus ou moins qu\'un flush royal ?\n\n8. Avec l\'augmentation du coût de la vie, combien de jambes pouvez-vous maintenant avoir en échange de votre voix auprès d\'Ursula ?\n\n9. Que pensez-vous que le Capitaine Crochet fait réellement quand il dit qu\'il part s\'astiquer le crochet ?\n\n10. Si vous n\'aviez plus qu\'un vœu à demander au génie, le libéreriez-vous, ou demanderiez-vous à gagner la Poutine de la mort ?',
        answer: 'NA',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    }
  ]
}
