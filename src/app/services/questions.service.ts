import { Injectable } from "@angular/core"
import { Question } from "../models/question.model"

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

            question: "Laquelle de ces descriptions de vin ne veut rien dire ?",
            propositionsDetailed: [
                "Ce vin présente une belle structure tannique, avec des tanins fermes sans être rugueux",
                "C'est un vin élégant, qui a de l'énergie, de la profondeur et de la complexité. Voilà un vin racisé",
                "On reconnait un grand vin a sa persistance aromatique qui dure environ une dizaine de caudalie",
                "Ce vin c’est de la piquette ouais, un petit pinard de chez nous qui réchauffe bien quand y fait froid",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "B",

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

            question: "Quels furent les premiers jeux olympiques non sexistes ?",
            questionComment:
                "On entend par là que c'est les premiers jeux où les femmes sont présentes dans toutes les délégations et dans tous les sports.",
            propositionsDetailed: ["Berlin 1936", "Rome 1960", "Londres 2012", "Olympie -776"],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "C",

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

            question: "Qui annonce quoi ?",
            questionComment: "Improvisation: Conférence de presse",
            propositionsDetailed: [
                "Justin Bieber annonce un changement de carrière et se lance dans l’élevage de flamant roses",
                "Ed Sheran annonce qu’il n’est pas vraiment roux et que c’était juste pour faire le buzz",
                "Taylor Swift annonce que sa prochaine tournée mondiale sera sponsorisée par Swiffer",
                "La grande frite annonce un partenariat avec la Russie pour importer ses petites frites",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "Choix des improvisateurs",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 4,
            type: "SelOuPoivre",
            speed: true,
            round: 1,
            points: 1,

            question:
                "Captain super-colans noire se balandant dans les rues de nuit et distribuant des pains ",
            questionComment:
                "Improvisation - Super-heros improbables\nCrise demandée au public (ex: Invasion de moustique).\nPremier super héro: Captain tension sexuelle",
            propositionsDetailed: ["Super Hero", "Super Zero"],
            propositionsShort: ["Super Hero", "Super Zero"],
            answer: "Super Hero (Batman)",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 5,
            type: "SelOuPoivre",
            speed: true,
            round: 1,
            points: 1,

            question:
                "Lady a qu’on est bien quand on fait qu’un avec les plantes, d’ailleurs faudrait que tout le monde ne fasse qu’un avec les plantes",
            propositionsDetailed: ["Super Hero", "Super Zero"],
            propositionsShort: ["Super Hero", "Super Zero"],
            answer: "Super Zero (Poison Ivy)",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 6,
            type: "SelOuPoivre",
            speed: true,
            round: 1,
            points: 1,

            question:
                "Super soit t’es patriotique soit t’es patriotique, mais t’es surtout pas sudiste ",
            propositionsDetailed: ["Super Hero", "Super Zero"],
            propositionsShort: ["Super Hero", "Super Zero"],
            answer: "Super Zero (Kim Jong-Un)",

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

            question: "Miss c’est pas avec moi que tu vas réussir tes exams",
            propositionsDetailed: ["Super Hero", "Super Zero"],
            propositionsShort: ["Super Hero", "Super Zero"],
            answer: "Super Zero (La note 0)",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 8,
            type: "Menu",
            speed: false,
            round: 1,
            group: 1,
            points: 1,

            title: "L'olympic des buzz 2024",
            question: "Comment s’appelle les mascottes des JO de Paris 2024?",
            questionComment: "Improvisation - Pendant ce temps là",
            answer: "Les deux Phryges, Oly pour la première, Para pour la seconde",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 9,
            type: "Menu",
            speed: false,
            round: 1,
            group: 1,
            points: 1,

            title: "L'olympic des buzz 2024",
            question:
                "Quel plat servi aux athlètes a fait un buzz et s’est retrouvé importé et vendu à NY après une attente de 2h ?",
            answer: "Les muffins au chocolat du CROUS",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 10,
            type: "Menu",
            speed: false,
            round: 1,
            group: 1,
            points: 1,

            title: "L'olympic des buzz 2024",
            question:
                "Quel score le surfeur brésilien Gabriel Medina a obtenu pour sa performance finissant comme ceci ?",
            questionComment: "(Sur 10, à 0.5 près)",
            answer: "9.90",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 11,
            type: "Menu",
            speed: false,
            round: 1,
            group: 1,
            points: 1,

            title: "L'olympic des buzz 2024",
            question:
                "Pour quelle raison l’athlète Anthony Ammirati a fait le buzz pendant ces JO ?",
            answer: "Pour sa grosse perche... Qui est la cause de sa défaite... Ou l'offre prétendue d'un studio de film pour adulte...",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 12,
            type: "Menu",
            speed: false,
            round: 1,
            group: 2,
            points: 1,

            title: "Nos amis à 8 bras",
            question:
                "Si on était au XVIIème, pourrait-on dire que les pieuvres sont de sang royal ?",
            questionComment: "Improvisation - Les bras experts",
            answer: "Oui car ils ont le sang bleu",
            answerComment:
                "Dû au cuivre impliqué dans le transport de l'oxygène (fer chez l'homme)",

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
            group: 2,
            points: 1,

            title: "Nos amis à 8 bras",
            question:
                "Combien de fois une pieuvre peut lamentablement se faire larguer avant d’avoir tous ses cœurs brisés ?",
            answer: "3 fois car elle a 3 coeurs",

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
            group: 2,
            points: 1,

            title: "Nos amis à 8 bras",
            question: "V ou F, les pieuvres peuvent respirer par l’anus ?",
            answer: "Faux",

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
            group: 2,
            points: 1,

            title: "Nos amis à 8 bras",
            question:
                "Comment s’appelle la pieuvre qui, lors du mondial de foot 2010, a su prédire l’équipe gagnante 8 fois sur 8 avec succès ?",
            answer: "Paul",

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
            group: 3,
            points: 1,

            title: "Points vitaux au karate",
            question: "Combien y a-t-il de points vitaux ?",
            questionComment: "Improvisation - Bruitage",
            answer: "32",

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
            group: 3,
            points: 1,

            title: "Points vitaux au karate",
            question:
                "Quel est le terme japonais pour désigner l’art de frapper les points vitaux ?",
            answer: "Kyusho",

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
            group: 3,
            points: 1,

            title: "Points vitaux au karate",
            question: "Quel est le terme japonais pour désigner le point Naso-Frontal ?",
            answer: "Choto",

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
            group: 3,
            points: 1,

            title: "Points vitaux au karate",
            question:
                "V ou F, il existe des points Vitaa qui à chaque pression vous fait chanter du R’n’B ?",
            answer: "Faux",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 20,
            type: "Addition",
            speed: true,
            round: 1,
            points: 3,

            title: "Trous de mémoire...",
            question:
                "Ah, alors... c'est ce poisson, là... tu sais, celui tout bleu... un peu rondouillet, avec des nageoires jaunes. Elle a tendance à... euh... oublier tout, mais genre tout, tout le temps ! Mais elle est super gentille et toujours optimiste, même quand elle est un peu... perdue. Ah, elle parle aussi baleine ! Tu vois de qui je parle, non ?",
            questionComment: "Improvisation - Trou de mémoire",
            answer: "Dory dans Némo (ou dans Dory)",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 21,
            type: "Addition",
            speed: true,
            round: 1,
            points: 3,

            title: "Trous de mémoire...",
            question:
                "Alors... c'est ce film, là... où y’a un gars... il oublie tout super rapidement, comme un poisson rouge, mais en beaucoup plus sombre. Il essaie de résoudre un mystère ou une enquête, je crois, mais... attends... tout est un peu à l'envers ou raconté dans le désordre, un truc du genre. Il se fait des tatouages pour se souvenir des trucs importants, mais, euh... tu sens bien qu’il est un peu perdu. C'est un film un peu casse-tête, mais fascinant... Tu vois lequel ?",
            answer: "Memento",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 22,
            type: "Addition",
            speed: true,
            round: 1,
            points: 3,

            title: "Trous de mémoire...",
            question:
                "OK... alors c’est un livre avec un jeune gars, un magicien je crois... il a une cicatrice, je crois ? Bref, il est dans une école, et là, des trucs bizarres commencent à se passer... des gens deviennent tout rigides, pétrifiés ou un truc comme ça. Il y a un endroit secret, caché depuis longtemps, avec une créature... plutôt énorme, je dirais. Ah, et il y a un message cryptique sur un mur à un moment... ça te parle ?",
            answer: "Harry Potter et la chambre des secrets",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 23,
            type: "Addition",
            speed: true,
            round: 1,
            points: 3,

            title: "Trous de mémoire...",
            question: "Là je sais plus, je vais demander à un des improvisateurs...",
            answer: "Réponse de l'improvisateur",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 24,
            type: "Tips",
            speed: true,
            round: 1,
            points: 0,

            question: "À la façon de quoi donc ?",
            questionComment: "Improvisation - À la façon de",
            answer: "Hitchcock ou Disney",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },

        {
            id: 25,
            type: "Nugget",
            speed: false,
            round: 2,
            points: 1,

            question: "Lequel de ces records n’existe pas dans le Guinness world record ?",
            propositionsDetailed: [
                "Le plus de boule à barbe dans la barbe",
                "Le plus de LEGO dans la barbe",
                "Le plus de canne à sucre dans la barbe",
                "Le plus de cure-dent dans la barbe",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "B",
            answerComment: "Canne à sucre: 187, Cure-dent: 3500, Boule à barbe 710",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 26,
            type: "Nugget",
            speed: false,
            round: 2,
            points: 1,

            question: "Lequel de ces médicaments n’a PAS ete trouve par hasard ?",
            questionComment: "Minoxil sert à faire pousser les cheveux",
            propositionsDetailed: ["La pénicilline", "L'aspirine", "Le viagra", "Le Minoxil"],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "D",
            answerComment:
                "Pénicilline: petite erreur de culture de champignon et de staphylocoques, viagra a d'abord été développé pour soigner l'angine, et le minoxidil traitait à la base l'hypertension artérielle",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 27,
            type: "Nugget",
            speed: false,
            round: 2,
            points: 1,

            question: "De quoi discutent ces deux jeunes femmes ?",
            questionComment: "Improvisation - Doublage",
            propositionsDetailed: [
                "Du braquage d’une banque pour effacer leurs dettes d’étude",
                "Du braquage d’une S.P.A. pour libéré tous les petits chiens enfermés",
                "Du braquage d’un dépanneur pour payer les frais de soins de leur chien",
                "Du braquage d’une SQDC pour pouvoir être high et écrire les prochaines questions du poutine quiz",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "C",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 28,
            type: "SelOuPoivre",
            speed: true,
            round: 2,
            points: 1,

            question: "Le penseur de Rodin",
            propositionsDetailed: ["Debout", "Assis", "Allongé"],
            propositionsShort: ["Debout", "Assis", "Allongé"],
            answer: "Assis",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 29,
            type: "SelOuPoivre",
            speed: true,
            round: 2,
            points: 1,

            question: "La Grande Frite",
            propositionsDetailed: ["Debout", "Assis", "Allongé"],
            propositionsShort: ["Debout", "Assis", "Allongé"],
            answer: "En ce moment, plutôt debout",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 30,
            type: "SelOuPoivre",
            speed: true,
            round: 2,
            points: 1,

            question: "Stephen Hawkin",
            propositionsDetailed: ["Debout", "Assis", "Allongé"],
            propositionsShort: ["Debout", "Assis", "Allongé"],
            answer: "Assis",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 31,
            type: "SelOuPoivre",
            speed: true,
            round: 2,
            points: 1,

            question: "Un café",
            propositionsDetailed: ["Debout", "Assis", "Allongé"],
            propositionsShort: ["Debout", "Assis", "Allongé"],
            answer: "Allongé",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 32,
            type: "SelOuPoivre",
            speed: true,
            round: 2,
            points: 1,

            question: "Rocco Siffredi",
            propositionsDetailed: ["Debout", "Assis", "Allongé"],
            propositionsShort: ["Debout", "Assis", "Allongé"],
            answer: "Debout",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 33,
            type: "Menu",
            speed: false,
            round: 2,
            group: 1,
            points: 1,

            title: "Pardon, vous faites quoi ?",
            question: "Que fait un verbicruciste",
            answer: "Il créé des mots-croisés",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 34,
            type: "Menu",
            speed: false,
            round: 2,
            group: 1,
            points: 1,

            title: "Pardon, vous faites quoi ?",
            question:
                "Devrais-je engager un rudologue pour gérer toutes les petites frites que je jette à la fin d’un Poutine Quiz ?",
            answer: "Oui, un rudologue est un spécialiste de la gestion des déchets industriels ou ménagers",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 35,
            type: "Menu",
            speed: false,
            round: 2,
            group: 1,
            points: 1,

            title: "Pardon, vous faites quoi ?",
            question:
                "Alors on pourrait croire que oui, mais non, un conchyculteur ne cultive pas l’art d’envoyer chier des cons, il cultive autre chose, quoi donc ?",
            answer: "Les coquillages",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 36,
            type: "Menu",
            speed: false,
            round: 2,
            group: 1,
            points: 1,

            title: "Pardon, vous faites quoi ?",
            question:
                "On sait tous qu’il existe des baby-sitters pour chiens ou chats, mais à votre avis, existe-t’il des baby-sitters pour autruche ?",
            questionComment: "Improvisation - Libre",
            answer: "Vrai, leur principale tâche est de s’assurer qu’elles ne se battent pas entre elles",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 37,
            type: "Menu",
            speed: false,
            round: 2,
            group: 2,
            points: 1,

            title: "Mais pourquoi on dit ca ",
            question:
                "Pouvez-vous me donner une expression peu commune (ou assez imagée) qui veut dire « se faire plaisir tout seul » ?",
            questionComment: "Bonus pour la plus originale",
            answer: "Se dégorger le poireau, Effeuiller le baobab...",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 38,
            type: "Menu",
            speed: false,
            round: 2,
            group: 2,
            points: 1,

            title: "Mais pourquoi on dit ca ",
            question:
                "Pourquoi peut-on dire d’une relation où l’intérêt principal est de se tâter les miches et la baguette est une relation qui ne mange pas de pain ?",
            answer: "Parce que c'est un plan Q, donc pas de gamin, plus de pains",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 39,
            type: "Menu",
            speed: false,
            round: 2,
            group: 2,
            points: 1,

            title: "Mais pourquoi on dit ca ",
            question: "Que veut dire l’expression « aller faire téter les puces » ?",
            answer: "Aller dormir",
            answerComment:
                "À une époque où on avait une moins bonne hygiène, les lits étaient remplis de puces",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 40,
            type: "Menu",
            speed: false,
            round: 2,
            group: 2,
            points: 1,

            title: "Mais pourquoi on dit ca ",
            question: "Que fait quelqu’un qui nous chie une pendule ? (à part avoir mal)",
            questionComment: "Improvisation - Libre",
            answer: "Elle nous fait chier pour quelque chose sans importance",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 41,
            type: "Menu",
            speed: false,
            round: 2,
            group: 3,
            points: 1,

            title: "Le bidet a travers les âges",
            question:
                "De quand date la première apparition écrite du bidet dans le dictionnaire Trésor de la langue française ?",
            answer: "1739",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 42,
            type: "Menu",
            speed: false,
            round: 2,
            group: 3,
            points: 1,

            title: "Le bidet a travers les âges",
            question: "Quel animal a pour nom le bidet ?",
            answer: "Un petit cheval trapu. D’où la chanson « à dada sur mon bidet »",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 43,
            type: "Menu",
            speed: false,
            round: 2,
            group: 3,
            points: 1,

            title: "Le bidet a travers les âges",
            question:
                "Quel empereur français a déclaré dans son testament qu’il possédait plusieurs spécimens de bidet ?",
            answer: "Napoléon",

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
            group: 3,
            points: 1,

            title: "Le bidet a travers les âges",
            question: "V ou F, Philippe Starck a déjà designé de super bidets revisités ?",
            questionComment: "Improvisation - Libre",
            answer: "Vrai",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 45,
            type: "Addition",
            speed: true,
            round: 2,
            points: 3,

            title: "La réponse commence par M",
            question: "A gagné l'oscar de la meilleure actrice",
            questionComment: "Improvisation - ABCDaire",
            answer: "2023 Michelle Yeoh\n1997/2018/2021 Frances McDormand\n2015 Julianne Moore\n2012/1983 Meryl Streep\n2008 Marion Cotillard\n2007 Helen Mirren\n1987 Marlee Matlin\n1984 Shirley MacLaine\n1970 Maggie Smith\n1956 Anna Magnani\n1931 Marie Dressler\n1930 Mary Pickford",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 46,
            type: "Addition",
            speed: true,
            round: 2,
            points: 3,

            title: "La réponse commence par D",
            question: "Vous n'aimeriez pas vous battre contre lui",
            answer: "David Douillet\nDark Vador\nDepardieu\nUn dragon\nLe diable",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 47,
            type: "Addition",
            speed: true,
            round: 2,
            points: 3,

            title: "La réponse commence par C",
            question: "Une insulte en trois mots",
            answer: "Connard bleu marine, Canard pas laqué, Cuistot de paquotille...",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 48,
            type: "Addition",
            speed: true,
            round: 2,
            points: 3,

            title: "La réponse commence par S",
            question: "Un adjectif qui me qualifie bien",
            answer: "Séduisant, Sincère, souriant, singulier, sympa, soupe-au-lait",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 49,
            type: "Addition",
            speed: true,
            round: 2,
            points: 3,

            title: "La réponse commence par Par",
            question: "Une chanson des années 80 qui est aussi le nom du groupe",
            answer: "Partenaire Particulier",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 50,
            type: "Tips",
            speed: true,
            round: 2,
            points: 0,

            question: "Le mime",
            questionComment:
                "Improvisation - Fin imposée\n\nPoints moyens:\n1-2: 3 propositions\n3: 4 propositions\n4: 5 propositions\n5: 6 propositions",
            answer: "A. Et ils vécurent heureux jusqu'à la fin de leurs jours, sauf Kevin\nB. Et le plan du traitre fut un succès, lui permettant de prendre le trône\nC. Et Papy n’était finalement pas mort\nD. Et les carottes sont cuites\nE. Et là, t’as le pape qui débarque et fait du breakdance\nF. Et il n’en resta plus qu’un",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 51,
            type: "Nugget",
            speed: false,
            round: 2,
            points: 0,

            question: "Quel a été votre impro préférée ?",
            propositionsDetailed: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
            propositionsShort: [
                "Pierre Papier Ciseaux",
                "Conférence de presse",
                "Super-Hero improbable",
                "Pendant ce temps là",
                "Les bras experts",
                "Bruitage",
                "Trou de mémoire",
                "À la façon de",
                "Faites entrer l'accusé",
                "Doublage",
                "Debout, assis, allongé",
                "Métier atypique",
                "La chienne à jacques",
                "Le bidet Royal",
                "ABCDaire",
                "Fin imposée",
            ],
            answer: "C",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 52,
            type: "PoutineDeLaMort",
            speed: false,
            round: 3,
            points: 0,

            question: "1. ",
            answer: "NA",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
    ]
}
