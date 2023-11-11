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

        question: 'Quelle est la particularité du village de Suloszowa en Pologne ?',
        propositionsDetailed: ['Personne ne parle le Polonais', 'Le maire est un chien', 'Elle n\'a qu\'une rue', 'Il n\'y a qu\'une femme dans le village'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'C.',
        
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

        question: 'Pourquoi la nouvelle-zelandaise Chloe Phillips-Harris s’est fait refuse l’entree au Kazakhstan ?',
        propositionsDetailed: ['Parce qu’elle avait oublié son passeport', 'Parce que la carte dans le bureau des douaniers n’avait pas la Nouvelle-Zélande dessus', 'Parce qu’elle essayait d’importer illégalement des araignées de collection', 'Parce que les douaniers pensaient que la Nouvelle-Zélande était une pure invention de J.R.R. Tolkien'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'B.',
        
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

        question: 'Quel est le plus proche parent relatif du T-Rex ?',
        propositionsDetailed: ['Roger la poule', 'Herbert le lézard', 'Barnabé le crocodile', 'Jacques le dragon'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'A.',
        
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

        question: 'Comment appelle-t’on un groupe de panda ?',
        propositionsDetailed: ['Un embarras', 'Un échec', 'Une honte', 'Une école de dragon guerrier'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'A.',
        
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

        question: 'Quelle Barbie est mentionnee dans le film recemment sorti ?',
        propositionsDetailed: ['Barbie en fauteuil roulant', 'Barbie ramasseuse de caca', 'Barbie Proust', 'Barbie Chauve'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'C.',
        
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

        question: 'Avec quelle manette insolite le joueur gbbearzly a fini Dark Souls ?',
        propositionsDetailed: ['Une guitare de Rock Band', 'Les Bongos de Donkey Kong Jungle Beat', 'Le Power Glove de la NES', 'Sa bite'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'A.',
        
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

        question: 'Kallax',
        propositionsDetailed: ['IKEA', 'Lieu Suédois', 'Les deux'],
        propositionsShort: ['IKEA', 'Lieu Suédois', 'Les deux'],
        answer: 'IKEA',
        
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

        question: 'Utby',
        propositionsDetailed: ['IKEA', 'Lieu Suédois', 'Les deux'],
        propositionsShort: ['IKEA', 'Lieu Suédois', 'Les deux'],
        answer: 'Les deux',
        
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

        question: 'Bolmen',
        propositionsDetailed: ['IKEA', 'Lieu Suédois', 'Les deux'],
        propositionsShort: ['IKEA', 'Lieu Suédois', 'Les deux'],
        answer: 'Les deux',
        
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

        question: 'Göteborg',
        propositionsDetailed: ['IKEA', 'Lieu Suédois', 'Les deux'],
        propositionsShort: ['IKEA', 'Lieu Suédois', 'Les deux'],
        answer: 'Lieu Suédois',
        
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

        question: 'Billy',
        propositionsDetailed: ['IKEA', 'Lieu Suédois', 'Les deux'],
        propositionsShort: ['IKEA', 'Lieu Suédois', 'Les deux'],
        answer: 'IKEA',
        
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

        question: 'Smabit',
        propositionsDetailed: ['IKEA', 'Lieu Suédois', 'Les deux'],
        propositionsShort: ['IKEA', 'Lieu Suédois', 'Les deux'],
        answer: 'IKEA',
        
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

        title: 'Stupide mais fonctionnel',
        question: 'Durant la première guerre mondiale, les Allemands ont déguisé un de leur navire pour le faire passer pour le RMS Carmania, un navire anglais.\n C’était un plan malin, mais qui n’a pas marché.\n Pourquoi ?',
        answer: 'Parce qu\'ils ont croisé le vrai RMS Carmania',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    // {
    //     id: 14,
    //     type: 'Menu',
    //     speed: false,
    //     round: 1,
    //     group: 1,
    //     points: 1,

    //     title: 'Stupide mais fonctionnel',
    //     question: 'V ou F\n Un général en mauvaise position a décidé d’envoyer des danseuses et des musiciens vers le campement ennemi pour faire diversion ?',
    //     answer: 'Vrai',
        
    //     showQuestion: false,
    //     propositionsStep: 0,
    //     locked: false,
    //     showAnswer: false
    // },
    {
        id: 14,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 1,
        points: 1,

        title: 'Stupide mais fonctionnel',
        question: 'V ou F\n Les Égyptiens ont déjà perdus une guerre à cause de chats ?',
        answer: 'Vrai',
        answerComment: 'En 525 BC, lors de la bataille de Pélusium, le roi perse Cambyse II ordonne à ses guerriers de peindre des chats sur leurs boucliers pour dissuader les Égyptiens d\'attaquer. Lorsque les Perses se sont lancés dans la bataille, ils l\'ont fait derrière un grand groupe de chats.\n\n Les forces égyptiennes ne voulaient pas risquer d\'attirer la colère de leurs dieux et se sont rapidement rendues aux Perses. La victoire s\'est avérée décisive et, peu de temps après, les Perses sont devenus les nouveaux maîtres de l\'Égypte. Cette bataille est souvent décrite comme l\'un des premiers exemples de guerre psychologique.',
        
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

        title: 'Stupide mais fonctionnel',
        question: 'Qu’apprenaient les brochures écrites par Sefton Delmer aux soldats Allemands pendant la seconde guerre mondiale afin d’Aider les alliés ?',
        answer: 'À faker des maladies pour ne pas aller au combat',
        
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

        title: 'Stupide mais fonctionnel',
        question: 'Le 23 Janvier 1795, la France a remporté une bataille navale contre la flotte néerlandaise, avec une unité assez inattendue.\nQuel type d’unités la France a utilisée pour gagner cette guerre ?',
        answer: 'La cavalerie',
        answerComment: "Le 23 janvier 1795, pendant les guerres de la Révolution française, un grand nombre de navires de guerre néerlandais étaient amarrés à Den Helder, une ville portuaire des Pays-Bas. Au cours d'un hiver particulièrement froid, le quai gèle soudainement et les navires sont pris au piège. Un régiment de cavalerie français s'en aperçut et décida de charger les navires. Ils ont enroulé du tissu autour des sabots des chevaux afin d'adoucir leur coup contre la glace et ont chargé les Néerlandais pendant qu'ils dormaient. Ils s'emparèrent de tous les navires sans aucune perte.\nC'est le seul cas dans l'histoire d'une charge de cavalerie contre une flotte navale.",
        
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

        title: 'Internet est magnifique, ou pas',
        question: 'En 2010, un sondage en ligne a demandé aux internautes dans quel pays Justin Bieber devrait faire sa prochaine tournée.\nQuel pays est arrivé en tête du sondage ?',
        answer: 'Corée du Nord',
        
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

        title: 'Internet est magnifique, ou pas',
        question: 'Combien de temps a-t’il fallu à internet pour transformé « Tay », l’IA de Google, en gros Nazi voulant exterminé l’humanité ? à 3h près',
        answer: '16h',
        
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

        title: 'Internet est magnifique, ou pas',
        question: 'V ou F\nQuand Mountain Dew a demandé à internet de choisir le nom de sa nouvelle saveur, l\'un des noms les plus populaires était « Zelda\'s juice » ?',
        answer: 'F',
        answerComment: 'Il y avait Hitler did nothing wrong par contre',
        
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

        title: 'Internet est magnifique, ou pas',
        question: 'Finissons sur une touche de gaieté, pourquoi ce Fat-Shaming a fait le buzz ?',
        answer: 'En le retrouvant sur internet pour l\'inviter à un party organiser pour lui avec des stars comme Moby ou Pharell Williams',
        
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

        title: 'Sura Kees ou pas Kees',
        question: 'Par quels autres charmant sobriquets est connu ce doux fromage ?',
        answer: 'Vorarlberger Sauerkäse, Montafoner Sauerkäse',
        
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

        title: 'Sura Kees ou pas Kees',
        question: 'Pouvez-vous me décrire rapidement le processus de préparation du Sura Kees ?',
        answer: 'Pour la production du Montafoner Sura Kees traditionnel, le lait filtré est versé dans des "Brenten" (récipients en bois typiques) pour séparer le lait en crème et en lait écrémé, suivi d\'une période d\'affinage d\'un à deux jours. La crème est utilisée pour la production de beurre, le lait écrémé est la matière première pour la production de fromage aigre.\nLe lait écrémé est acidifié dans la "Zuber" (cuve en bois), puis versé dans la "Kessi" (bouilloire en cuivre) et chauffé à 40°C maximum. 40°C. Le "Bolma" (fromage en grains) est retourné et versé à l\'aide de la "Bolmakelle" (louche) dans le "Käsker" (forme spéciale), pressé par son propre poids. Il y reste jusqu\'à ce qu\'une masse solide se forme (environ 24 heures). Ensuite, il est généralement retourné deux fois pour que le petit-lait excédentaire puisse s\'écouler. La masse est démoulée, frottée avec du sel (parfois avec du paprika) et affinée dans la cave. Après environ 3 semaines, la croûte du fromage est lavée, les pains de fromage sont placés sur des claies en bois et affinés pendant 4 à 6 semaines supplémentaires dans la salle d\'affinage à une température de 18 à 20°C. Pendant cette période, la "Muffna", l\'écorce vitreuse et grasse du fromage aigre, s\'épaissit avec l\'âge et donne au fromage son arôme typique. Les pains de fromage au lait acidulé s\'affinent de l\'extérieur vers l\'intérieur.',
        
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

        title: 'Sura Kees ou pas Kees',
        question: 'À quel peuple associe-t’on les origines de ce fromage, et de quand ça date ?',
        answer: 'Les Sumériens, il y a environ 7 000 ans',
        
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

        title: 'Sura Kees ou pas Kees',
        question: 'Pour finir, avec quoi sert-on traditionnellement le Sura Kees ?',
        answer: 'Le Sura Kees est généralement servi avec du vinaigre, de l\'huile et des oignons, pur sur du pain noir ou mangé avec des pommes de terre.',
        
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

        title: 'Les réponses ont un gros pif',
        question: 'Ah ! non ! c’est un peu court, jeune homme !\n On pouvait dire… Oh ! Dieu ! … bien des choses en somme…\nEn variant le ton, – par exemple, tenez :\n Agressif : « Moi, monsieur, si j’avais un tel nez, Il faudrait sur-le-champ que je me l’amputasse ! »\nAmical : « Mais il doit tremper dans votre tasse pour boire, faites-vous fabriquer un hanap ! »\nDescriptif : « C’est un roc ! … c’est un pic ! … c’est un cap ! Que dis-je, c’est un cap ? … C’est une péninsule ! »\nCurieux : « De quoi sert cette oblongue capsule ? D’écritoire, monsieur, ou de boîte à ciseaux ? »\nGracieux : « Aimez-vous à ce point les oiseaux que paternellement vous vous préoccupâtes de tendre ce perchoir à leurs petites pattes ? »\nTruculent : « Ça, monsieur, lorsque vous pétunez, la vapeur du tabac vous sort-elle du nez sans qu’un voisin ne crie au feu de cheminée ? »\nPrévenant : « Gardez-vous, votre tête entraînée Par ce poids, de tomber en avant sur le sol ! »\nTendre : « Faites-lui faire un petit parasol De peur que sa couleur au soleil ne se fane ! »\n Pédant : « L’animal seul, monsieur, qu’Aristophane Appelle Hippocampéléphantocamélos Dut avoir sous le front tant de chair sur tant d’os ! »\nCavalier : « Quoi, l’ami, ce croc est à la mode ? Pour pendre son chapeau, c’est vraiment très commode ! »\nEmphatique : « Aucun vent ne peut, nez magistral, T’enrhumer tout entier, excepté le mistral ! »\nDramatique : « C’est la Mer Rouge quand il saigne ! »\nAdmiratif : « Pour un parfumeur, quelle enseigne ! »\nLyrique : « Est-ce une conque, êtes-vous un triton ? »\nNaïf : « Ce monument, quand le visite-t-on ? »\nRespectueux : « Souffrez, monsieur, qu’on vous salue, C’est là ce qui s’appelle avoir pignon sur rue ! »\nCampagnard : « Hé, ardé ! C’est-y un nez ? Nanain ! C’est queuqu’navet géant ou ben queuqu’melon nain ! »\n Militaire : « Pointez contre cavalerie ! »\nPratique : « Voulez-vous le mettre en loterie ? Assurément, monsieur, ce sera le gros lot ! »\nEnfin parodiant Pyrame en un sanglot : « Le voilà donc ce nez qui des traits de son maître A détruit l’harmonie ! Il en rougit, le traître ! »\n Voilà ce qu’à peu près, mon cher, vous m’auriez dit Si vous aviez un peu de lettres et d’esprit Mais d’esprit, ô le plus lamentable des êtres, Vous n’en eûtes jamais un atome, et de lettres Vous n’avez que les trois qui forment le mot : sot !\nEussiez-vous eu, d’ailleurs, l’invention qu’il faut Pour pouvoir là, devant ces nobles galeries, me servir toutes ces folles plaisanteries, Que vous n’en eussiez pas articulé le quart De la moitié du commencement d’une, car Je me les sers moi-même, avec assez de verve, Mais je ne permets pas qu’un autre me les serve.',
        answer: 'Cyrano de Bergerac',
        
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

        title: 'Les réponses ont un gros pif',
        question: 'C\'est un peu un cousin de Ronald McDonald mais au lieu d\'engraisser les gamins, celui là se nourrit de leur peur. Ah et les deux ont un beau ballon rouge.',
        answer: 'Pennywise de IT',
        
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

        title: 'Les réponses ont un gros pif',
        question: 'Son fils s’appelle Max, il est ami avec Mickey, et c\'est pas toujours le plus allumé de la bande',
        answer: 'Dingo/Goofy',
        
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

        title: 'Les réponses ont un gros pif',
        question: 'A un pif de compète vu les lignes qu’il s’est enfilé',
        answer: 'Charlie Sheen',
        
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

        title: 'Les réponses ont un gros pif',
        question: 'Fleuron de l’aviation française, ce modèle vient par ailleurs de ressortir en version LEGO. Malgré une fin tumultueuse, cet avion pas tout à fait supersonique restera dans les légendes',
        answer: 'Concorde',
        
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

        title: 'Les réponses ont un gros pif',
        question: 'Bon ok lui c\'est l\'exception à la règle, il a pas de pif. C\'est peut-être pour ça d\'ailleurs qu\'il est aussi méchant. Mais c\'est quand même bizarre qu\'il ne s\'en soit jamais remis un par magie, quel manque de flair',
        answer: 'Voldemort',
        
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

        question: 'Combien de chevaux peut exercer un cheval à sa puissance maximale ? à 3 près',
        answer: 'en moyenne 14.9 chevaux',
        answerComment: 'Le cheval-vapeur est une unité de puissance ne faisant pas partie du Système international d\'unités, qui exprime une équivalence entre la puissance fournie par un cheval tirant une charge et celle fournie par une machine de propulsion à vapeur ou un moteur à combustion. Le cheval était, du fait de son utilisation massive, la référence de puissance des attelages avant l\'avènement de la propulsion mécanique. Ainsi, en 1879, les 38 lignes d\'omnibus de Paris requéraient l\'entretien de 16 500 chevaux',
        
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

        question: 'Lequel de ces animaux peu survivre le plus longtemps sans manger?',
        propositionsDetailed: ['Grenouille des terriers', 'Tarantule', 'Porc', 'Baleine'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'A',
        answerComment: 'Grenouille des terriers => 11 ans\nTarantule => 2 ans\nPorc => 48 heures\nBaleine => 6 mois',
        
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

        question: 'À quels évènements tragiques a survécue Violet Jessop ?',
        propositionsDetailed: ['A 3 épidémies, le SRAS, le MERS et le COVID', 'A 3 coups de foudre, l’électricité pas l’émotion', 'Au naufrage des 3 beateaux Olympic, Titanic et Britannic', 'A 3 shows d’humour de Gilbert Rozon'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'C',
        answerComment: 'Elle était infirmière sur chacun des trois bateaux. L\'Olympic est entré en collision avec un navire militaire, le Titanic, bon on sait tous pour celui là, et le Britanic a été coulé par une torpille. Et elle a survécue',
        
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

        question: 'Qu’est-ce que la Pogonophobie ?',
        propositionsDetailed: ['La peur des barbes', 'La peur des honnes à lunettes', 'La peur des grandes frites', 'La peur des chauves'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'A',
        answerComment: 'Apollophobie: peur des beaux hommes, Alopophobie: peur des chauves, Maxifritophobie: peur des grandes frites, mais je viens de l\'inventer...',
        
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

        question: 'Comment dit-on « Remonte-moi le moral » en italien ?',
        propositionsDetailed: ['Panacotta', 'Bruschetta', 'Tiramisu', 'Choucroute garnie'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'C',
        answerComment: 'Le mot italien d\'origine est « tirami sù » qui veut dire « remonte-moi le moral » ou « tire-moi vers le haut »',
        
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

        question: '11 mois sur 12, Patrick Dancoisne est un croque-mort comme les autres. Que fait-il le 12eme mois ?',
        propositionsDetailed: ['Il tue des gens', 'Il fabrique des cercueils', 'Il campe au cimetière', 'Il transforme les bites peintes sur les routes du Tour de France en hiboux'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'D',
        
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

        question: 'Mais que dit exactement Boromir dans cette scene ?',
        propositionsDetailed: ['Vous avez notre destin à tous entre les mains petit homme', 'La cité d\'Osgiliath a été reprise par le Gondor, pour le Gondor, et un peu pour papa', 'En ces lieux il y a un mal qui ne dors jamais et le grand oeil est toujours attentif', 'La nuit dernière j\'ai dormi avec Aragorn, j\'ai le trou du cul comme ça ce matin'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'C',
        
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

        question: 'Hitman Le Cobra',
        propositionsDetailed: ['Film Nanar', 'Film pour adulte'],
        propositionsShort: ['Film Nanar', 'Film pour adulte'],
        answer: 'Film Nanar',
        answerComment: 'Hitman le Cobra (Hitman the Cobra, aussi connu en tant que Le Terroriste) est un film hongkongais de série Z réalisé par Godfrey Ho, sorti en 1987. Il a peu à peu atteint un statut de film culte grâce au site nanarland.',
        
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

        question: 'Maitresse très particulière',
        propositionsDetailed: ['Film Nanar', 'Film pour adulte'],
        propositionsShort: ['Film Nanar', 'Film pour adulte'],
        answer: 'Film pour adulte',
        answerComment: 'Maîtresses très particulières est un film pornographique français, sorti dans les salles françaises en 1980 sous la signature de Burd Tranbaree (pseudonyme de Claude Bernard-Aubert). Il est composé de scènes d\'un film américain réalisé par Chuck Vincent et de scènes additionnelles tournées en France.',
        
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

        question: 'Midnight',
        propositionsDetailed: ['Film Nanar', 'Film pour adulte'],
        propositionsShort: ['Film Nanar', 'Film pour adulte'],
        answer: 'Film Nanar',
        answerComment: '(1989) Midnight Sensuel, hôtesse de films d\'horreur, a l\'émission la mieux notée à la télévision. M. B envisage de voler les droits de la série. Le bras de fer commence et se transforme rapidement en un conflit meurtrier...',
        
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

        question: 'Airstrike',
        propositionsDetailed: ['Film Nanar', 'Film pour adulte'],
        propositionsShort: ['Film Nanar', 'Film pour adulte'],
        answer: 'Film Nanar',
        answerComment: '(2003) Une petite force d\'attaque américaine est envoyée dans un pays d\'Europe de l\'Est pour aider le gouvernement à neutraliser un puissant syndicat de la drogue.',
        
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

        question: 'Eaux sauvages',
        propositionsDetailed: ['Film Nanar', 'Film pour adulte'],
        propositionsShort: ['Film Nanar', 'Film pour adulte'],
        answer: 'Film Nanar',
        answerComment: 'Eaux sauvages (titre original : Savage Water) est un film américain réalisé par Paul W. Kener sorti en 1979.',
        
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

        question: 'Les nobles de la poche percée',
        propositionsDetailed: ['Film Nanar', 'Film pour adulte'],
        propositionsShort: ['Film Nanar', 'Film pour adulte'],
        answer: 'Film pour adulte',
        answerComment: 'Apprenant que leur fils a décidé de se marier, un couple se rend ;a la campagne pour rencontrer la famille de la promise. C\'est le choc de deux mondes (',
        
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

        title: 'Twit, Twit, Twitter fait Elon',
        question: 'Qu\'est-ce qu\'un Octothorpe ?',
        answer: 'Le Hashtag',
        
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

        title: 'Twit, Twit, Twitter fait Elon',
        question: 'Comment a été renommé Twitter suite au rachat par le célèbre Elon Musk ?',
        answer: 'X',
        
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

        title: 'Twit, Twit, Twitter fait Elon',
        question: 'Vrai ou Faux\nLe nom du fils d’Elon Musk et de la chanteuse Grimes respecte les conditions de sécurité des mots de passe de comptes Twitter ?',
        answer: 'Faux',
        answerComment: 'X Æ A-12\n- au moins 10 caractères\n- majuscules\n- minuscules\n- nombre\n- symbole',
        
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

        title: 'Twit, Twit, Twitter fait Elon',
        question: 'Comment s’appelle la Tequila qu’Elon Musk a commercialisé en 2022 après l’avoir annoncé en 2021 comme une blague ?',
        answer: 'TeslaQuila',
        
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

        title: 'Le point Godwin, vous connaissez ?',
        question: 'Comment dit-on noix de coco en swahili ?',
        answer: 'Nazi',
        
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

        title: 'Le point Godwin, vous connaissez ?',
        question: 'Dans le film « Le prénom » adapté de la pièce éponyme, une grosse dispute éclate suite au nom qu’un futur père veut donner à son enfant.\n Quel est ce prénom ?',
        answer: 'Adolf',
        
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

        title: 'Le point Godwin, vous connaissez ?',
        question: 'Quelle boisson fut inventée pour nos amis allemands par Coca-Cola durant la 2nde guerre mondiale ?',
        answer: 'Fanta',
        
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

        title: 'Le point Godwin, vous connaissez ?',
        question: 'Diriez-vous que ce signe est plutôt signe de fortune à venir, d\'un BBQ à venir, ou d’un ninja qui n’a pas de gout pour se trouver un logo ?',
        answer: 'Fortune à venir',
        
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

        title: 'Chateauneuf-sur-loire, ville de patate frites',
        question: 'Dans quel collège de Chateuneuf sur Loire la Grande Frite a obtenu son brevet ?',
        answer: 'Le Collège Public Jean-Joudiou',
        
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

        title: 'Chateauneuf-sur-loire, ville de patate frites',
        question: 'Dans quelle commune proche de Chateauneuf sur Loire, la Grande Frite a appris le tir à l’arc ?',
        answer: 'Sigloy',
        
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

        title: 'Chateauneuf-sur-loire, ville de patate frites',
        question: 'D’ailleurs, comment appelle-t’on les habitants de Chateauneuf sur Loire ?',
        answer: 'Castleneuviens',
        
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

        title: 'Chateauneuf-sur-loire, ville de patate frites',
        question: 'Quelle manifestation culturelle est fêtée tous les ans dans le parc du château la fin de la semaine de la Pentecôte ?',
        answer: 'La fête des Rhododendrons',
        
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

        title: 'Toutes les réponses sont des duos',
        question: 'Se baladent en collant de nuit dans les rues malfamées',
        answer: 'Batman et Robin',
        
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

        title: 'Toutes les réponses sont des duos',
        question: 'Enqueteurs très spéciaux, ils parcourent le pays à la recherche de réponses, mais trouvent souvent davantage de mystères.',
        answer: 'Mulder et Scully',
        
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

        title: 'Toutes les réponses sont des duos',
        question: 'Duo moustachus qui aiment les champignons',
        answer: 'Mario et Luigi',
        
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

        title: 'Toutes les réponses sont des duos',
        question: 'Duo moustachus à la rivalité légendaire, l\'un veut chasser l\'autre, mais se retrouve souvant la victime des tours du second.',
        answer: 'Tom et Jerry',
        
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

        title: 'Toutes les réponses sont des duos',
        question: 'Probablement les boites de conserve les plus célèbres de la galaxie, bien qu\'on ne comprenne pas l\'un des deux.',
        answer: 'R2D2 et C3P0',
        
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

        title: 'Toutes les réponses sont des duos',
        question: 'Les Roméo et Juliette des gangsters, et leurs histoires finissent pareil en plus...',
        answer: 'Bonny et Clyde',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 62,
        type: 'Tips',
        speed: true,
        round: 2,
        points: 0,

        title: 'Pictionary ou presque',
        question: 'Dessin du public, En moyenne, 60sec - 10sec / point',
        answer: '1. Pâté Chinois\n2. Pikachu\n3. Excalibur',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 63,
        type: 'PoutineDeLaMort',
        speed: false,
        round: 3,
        points: 0,

        question: '1. Combien y-a-t\'il de jours dans la semaine si on enlève ceux où vous êtes déprimés ?\n\n2. V ou F, les Myopes ont les yeux brouillés ?\n\n3. Pensez-vous que Gilbert Montagné ait ses chances au championnat du monde de Cache-Cache ?\n\n4. Comment s\'appellerait Cécile de France si elle était Canadienne ?\n\n5. Honnêtement, on est d\'accord, le gars qui met la charrue avant les boeufs c\'est le même que celui qui cherche midi à quatorze heure ?\n\n6. Combien de lettres faudrait-il changer à votre prénom pour que vous vous appeliez "bite" ?\n\n7. Si vous demandez un autographe à Simone, signoret-elle ou signerait-elle pas ?\n\n8. Préférrez-vous que les gens savent quand vous vous masturbez en pensant à eux, ou savoir quand quelqu\'un se masturbe en pensant à vous ?\n\n9. Faites un signe de main qui ne soutiens pas le troisième Reich\n\n10. V ou F, les acteurs porno à leur compte s\'appellent les indébandants ?',
        answer: 'NA',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    }
  ]
}
