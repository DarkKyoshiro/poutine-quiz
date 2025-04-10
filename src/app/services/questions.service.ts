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

            question: "À quel age ai-je décidé d'assumer la calvitie ?",
            propositionsDetailed: [
                "22 ans",
                "29 ans",
                "32 ans",
                "Mais non c’est pas une calvitie, juste une petite carence en vitamine, ça va repousser",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "B",
            answerComment: "C'était la pandémie, ça commence à dater ça",

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

            question: "Où suis-je ?",
            propositionsDetailed: ["A", "B", "C", "D"],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "C",
            answerComment: "J'ai été un peu batard, les deux autres sont mon frère et ma soeur",

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

            question: "Quel poste avais-je dans la liste BDE ASSO’LD UP ?",
            propositionsDetailed: [
                "Tréz, parce que l’argent c’est cool",
                "Prez Kfet, parce que la bouffe c’est mieux",
                "Tréz Kfet, parce pourquoi pas les deux ?",
                "Respo Gras, parce que soyons réalistes…",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "C, mais on a perdu",

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

            question: "Mais ou est la carte ?",
            questionComment:
                "Faire un tour de magie avant la question. Donner une enveloppe fermée avec une prédiction à quelqu'un, et demander à une autre main innocente de piocher une carte",
            propositionsDetailed: [
                "Dans ton cul ! Voilà, ça c’est fait",
                "Au dessus du paquet !",
                "Dans l’enveloppe donné au début de la question !",
                "Quelque part perdue dans le paquet parce que je suis nul en magie…",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "D",

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

            question: "Dans quelle Escape game ai-je travaille ?",
            propositionsDetailed: [
                "A-Maze",
                "Échappe-toi",
                "Immersia",
                "Charles River, et ça fait 7 ans que je cherche la sortie...",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "A",
            answerComment: "J'y suis resté pour faire les salles gratos et après je suis parti",

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

            question: "Quel scenario ne s’est jamais produit aux Megagames ?",
            propositionsDetailed: [
                "Le Japon a construit une cité sous-marine et a mis en place de l’immigration sélective",
                "McDonald est devenu une superpuissance mondiale, prenant le contrôle des USA et a convaincu les aliens d’exporter les Big Macs sur leur planète",
                "Les humains ont nuked les aliens qui essayaient de les aider",
                "Les joueurs ont décidé de la jouer Meta et que la seule façon de gagner était de physiquement quitter les lieux, forçant le jeu à s’arrêter",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "B",

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

            question: "Photo du gros tas",
            propositionsDetailed: ["Mon Chat", "Pas mon chat"],
            propositionsShort: ["Mon Chat", "Pas mon chat"],
            answer: "Mon chat",

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

            question: "Photo du poster de film",
            propositionsDetailed: ["Mon Chat", "Pas mon chat"],
            propositionsShort: ["Mon Chat", "Pas mon chat"],
            answer: "Mon chat",

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

            question: "Bruits de miaulements",
            propositionsDetailed: ["Mon Chat", "Pas mon chat"],
            propositionsShort: ["Mon Chat", "Pas mon chat"],
            answer: "Pas mon chat",

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

            question: "Photo de cul de chat",
            propositionsDetailed: ["Mon Chat", "Pas mon chat"],
            propositionsShort: ["Mon Chat", "Pas mon chat"],
            answer: "Pas mon chat",

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

            question: "Vidéo du gros tas",
            propositionsDetailed: ["Mon Chat", "Pas mon chat"],
            propositionsShort: ["Mon Chat", "Pas mon chat"],
            answer: "Mon chat",

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

            question: "Image GPT d'un chat",
            propositionsDetailed: ["Mon Chat", "Pas mon chat"],
            propositionsShort: ["Mon Chat", "Pas mon chat"],
            answer: "Pas mon chat",

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

            title: "Thème Mystère du Nom de l'Équipe",
            question: "Question",
            answer: "Réponse",

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

            title: "Thème Mystère du Nom de l'Équipe",
            question: "Question",
            answer: "Réponse",

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

            title: "Thème Mystère du Nom de l'Équipe",
            question: "Question",
            answer: "Réponse",

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

            title: "Thème Mystère du Nom de l'Équipe",
            question: "Question",
            answer: "Réponse",

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

            title: "Thème Mystère de Romain",
            question: "Question",
            answer: "Réponse",

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

            title: "Thème Mystère de Romain",
            question: "Question",
            answer: "Réponse",

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

            title: "Thème Mystère de Romain",
            question: "Question",
            answer: "Réponse",

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

            title: "Thème Mystère de Romain",
            question: "Question",
            answer: "Réponse",

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

            title: "Theme mystere que vous voulez pas prendre mais que je vous laisserais totalement prendre parce que qui suis-je pour bloquer votre curiosite…",
            question: "Question",
            answer: "Réponse",

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

            title: "Theme mystere que vous voulez pas prendre mais que je vous laisserais totalement prendre parce que qui suis-je pour bloquer votre curiosite…",
            question: "Question",
            answer: "Réponse",

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

            title: "Theme mystere que vous voulez pas prendre mais que je vous laisserais totalement prendre parce que qui suis-je pour bloquer votre curiosite…",
            question: "Question",
            answer: "Réponse",

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

            title: "Theme mystere que vous voulez pas prendre mais que je vous laisserais totalement prendre parce que qui suis-je pour bloquer votre curiosite…",
            question: "Question",
            answer: "Réponse",

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

            title: "Ça a ken en juillet",
            question:
                '🟢 Facile : \nSon prénom, je le connais, il est ultra courant, mais là… ça bloque. Je sais juste qu’il y en a un qui fait de la musique, un gars un peu perché, qui se fait appeler par une lettre. Il saute partout sur scène avec sa guitare, et son père est un grand chanteur aussi. Un autre est plus sombre, plus nerveux — réalisateur, acteur aussi, il a signé un film très fort en noir et blanc, avec des jeunes en colère dans une cité. Tu sais, ce film où l’un dit "jusqu’ici tout va bien…" ? Et puis y’a aussi une chanteuse avec une coupe au bol légendaire, la voix toute vibrante, qui chante la France avec un grand F. Chez elle, c’est son nom de famille, mais ça colle quand même. Toutes ces personnalités ont ce prénom si familier, un peu rétro, mais toujours dans les parages. C’est pas Michel, ni Maxime… mais je sens qu’on y est presque. Allez, ça commence par un M, ça se finit dans tous les albums de famille.\n\n🟡 Moyen :\nC’est marrant, ce prénom revient souvent dans des univers très différents. Un chanteur-éclair, avec une lettre pour nom de scène, et des mélodies pleines de poésie électrique. Un réalisateur qui a frappé fort avec un film dur et cru dans les années 90, et qui joue parfois lui-même des rôles intenses. Et une voix, très connue en France, qui a traversé les décennies avec sa coupe figée et ses chansons d’un autre temps. Chez l’une, c’est un nom de famille ; chez les deux autres, un prénom bien ancré. C’est un nom passe-partout et pourtant toujours attaché à des personnalités marquantes. On l’entend souvent, mais on y pense rarement. Peut-être parce qu’il semble évident, ou justement parce qu’il l’est trop. Moi, en tout cas, il m’échappe… Il est là, juste derrière la mémoire.\n\n🔴 Difficile :\nIl revient sans cesse, ce prénom — discret, solide, presque banal, et pourtant… Trois figures me le rappellent. L’un se cache sous une lettre, mais sa musique déborde d’inventivité. Il sautille sur scène avec une grâce étrange, comme une onde colorée. L’autre a capté la rage sociale dans un film en noir et blanc devenu culte, et sa présence à l’écran est toujours tendue, prête à éclater. Et puis cette femme, figée dans le souvenir collectif avec sa voix vibrante et sa coupe d’un autre temps. Leurs trajectoires n’ont rien en commun, et pourtant elles se rejoignent sur ce prénom. Un prénom presque invisible dans sa banalité, mais porteur d’art, de lutte, de tradition. Il a traversé les chansons, les caméras et les générations. Et moi, je tourne autour sans parvenir à le dire.',
            answer: "Mathieu",
            answerComment:
                "Mathieu Chedid, Mathieu Kassovitz, Mireille Mathieu, et Mathieu Grisard dont l'anniversaire est le 16!\nPROMO POUR SON QUIZ",

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

            title: "Ça a ken en juillet",
            question:
                "🟢 Facile :\nAlors là, j’ai un bug. Ce prénom est si joli, si doux, je le connais… mais impossible de le retrouver. Y’en a une qui vient de Belgique, elle joue dans plein de films français, elle a un sourire incroyable et un naturel qui marque. Une autre joue de la harpe — ouais, un vrai instrument de fée. Elle a même bossé pour un dessin animé japonais, un de ceux de Ghibli, tout en finesse et en magie. Et la troisième, elle dessine. Des gens ronds, des scènes de vie pleines de couleurs et de bonne humeur. Elle est québécoise, et son style, tu le reconnais tout de suite, dans les pubs, dans les livres. Elles ont un prénom qui flotte comme une mélodie douce, avec une petite touche rétro. C’est pas Camille… pas Chloé… c’est… mince, ça va me revenir.\n\n🟡 Moyen :\nC’est un prénom féminin qui semble flotter entre les arts. L’une vient du plat pays, lumineuse, présente dans les films européens avec une authenticité rare. L’autre façonne des atmosphères féeriques avec sa harpe et sa voix fragile, entre la Bretagne et le Japon. Et la dernière donne vie au quotidien avec des personnages tout en rondeur, des scènes tendres, dessinées comme des sourires. Trois femmes, trois univers — le cinéma, la musique, l’illustration. Et pourtant, un seul prénom, plein de douceur. Il n’est pas bruyant, pas clinquant, mais il s’impose doucement, sûrement. Il évoque l’élégance tranquille, la tendresse, la lumière. Et moi je bute dessus comme si c’était la première fois que je le croisais. Tu le vois, toi ?\n\n🔴 Difficile :\nC’est un prénom discret, presque effacé, et pourtant… Je le vois se répéter dans des visages très différents. Une actrice belge qui ne joue jamais faux, ancrée dans des rôles à fleur de peau. Une harpiste au souffle aérien, choisie par un studio japonais pour chanter des bruissements de feuilles et des silences. Une illustratrice venue du Québec, qui dessine comme on célèbre les instants simples. Leurs mondes ne se croisent pas, mais leurs prénoms s’accordent. Un prénom doux, presque murmuré, aux accents anciens. On le croirait sorti d’un poème oublié. Et pourtant, il est encore là, vivant, porté par la voix, par le trait, par l’image. Ce prénom… il m’échappe dans sa simplicité même.",
            answer: "Cécile",
            answerComment:
                "Cécile de France, Cécile Corbel, Cécile Gariépy et Cécile Charles dont c'était l'anniversaire le 2 avril",

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

            title: "Ça a ken en juillet",
            question:
                "🟢 Facile :\nAttends, c’est un prénom super simple, super connu… mais là, j’ai un bug. Y’en a une qui l’a porté au journal télé pendant des années, avec cette voix douce et sérieuse, tu vois ? Une vraie figure de l’info à la française. Une autre a incarné la reine d’Angleterre dans The Crown — jeune Élisabeth II, regard froid, port droit, un jeu royal, quoi. Et puis la troisième, je la vois dans des séries fantastiques : des sirènes, des vampires, des ados beaux et tristes… l’ambiance quoi. Elles ont toutes ce prénom limpide, féminin, presque transparent. Ça se glisse partout, comme une évidence. Pas Carine, pas Chloé… mais c’est dans ce style. Tu l’as, hein ?\n\n🟡 Moyen :\nCe prénom m’échappe alors qu’il est partout. Dans les journaux télévisés du dimanche soir, dans les robes royales sur Netflix, et dans les séries surnaturelles que les ados binge-watchaient. L’une parlait aux Français comme une grande sœur calme. L’autre régnait sur l’écran avec un calme impressionnant. Et la dernière nageait entre deux mondes, mi-humaine mi-légende, dans des histoires d’eau salée et de sentiments flous. Trois femmes, trois univers, mais un seul prénom. Un prénom doux mais tranchant, discret mais présent. Je sens qu’il est là, presque sorti, et pourtant, rien.\n\n🔴 Difficile :\nCe prénom se faufile comme une évidence oubliée. Il est porté par une figure rassurante de la télévision, par une actrice au port royal et par une créature de fiction venue des abysses. Il traverse le réel, l’Histoire, et les récits fantastiques. Il est clair, presque trop, au point qu’on le voit à peine. Ce prénom s’inscrit dans les mémoires comme une lumière douce, sans jamais s’imposer. Il est fluide, familier, et pourtant insaisissable quand on cherche à le dire. Trois femmes, trois époques, trois mondes. Et ce prénom unique qui les relie sans bruit. Mais moi, je bute dessus comme sur un mot trop évident pour qu’on le remarque. Tu l’as deviné ?",
            answer: "Claire",
            answerComment:
                "Claire Chazal, Claire Foy, Claire Holt et Claire Pilssonneau dont l'anniversaire est le 17 avril",

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

            title: "Ça a ken en juillet",
            question:
                "🟢 Facile :\nC’est un prénom un peu magique, non ? Je suis sûr qu’il y avait une sorcière ou une magicienne avec… Dans les légendes, là, autour du roi Arthur — une femme puissante, un peu inquiétante parfois. Ensuite y’a une actrice, fille d’un réalisateur célèbre, qui joue dans des séries d’époque, genre Vikings. Et puis bien sûr, y’a celle avec les cheveux rouges, l’héroïne complètement barrée de HPI. Hyper intelligente, hyper bordélique, hyper tout, quoi. Ces trois femmes ont ce prénom entre fable et folie douce. C’est pas Marine, ni Marion… Mais je l’ai presque ! Un prénom qui pourrait être un sort.\n\n🟡 Moyen :\nJe tourne autour de ce prénom sans l’attraper. Il évoque une femme mythique, sorcière ou sœur selon les histoires, capable d’enchanter ou de détruire. Une autre, bien réelle, actrice au regard franc, s’impose doucement dans les séries sombres. Et la dernière traverse les écrans dans un feu d’artifice de QI et de chaos. Trois femmes, trois formes d’intelligence, trois types de pouvoir. Un prénom ancien, étrange, mais bien vivant aujourd’hui. Il est fort sans être dur, mystérieux sans être obscur. Je le sens presque sur ma langue. Mais dès que je veux le dire, il s’efface.\n\n🔴 Difficile :\nCe prénom habite les frontières. Il résonne dans les contes, flotte dans les légendes, éclate dans la fiction moderne. On le chuchotait dans les grottes de Brocéliande, et maintenant on le crie dans les commissariats télévisés. Une magicienne, une actrice de sang noble, et une tornade à paillettes. Trois femmes, trois visages d’un même mot. Ce prénom, ancien et actuel à la fois, résiste à la banalité. Il tourbillonne, s’insinue, se dérobe. Il pourrait être un lieu, un personnage, un charme. Et là, il se cache dans un coin de mon esprit, comme un mystère qu’on croit élucidé… mais pas tout à fait.",
            answer: "Morgane",
            answerComment:
                "Fée Morgane, Morgane Polanski, Morgane Alvaro et Morgane Baxter dont l'anniversaire est le 21 avril\nPROMO DU LUNDI DES PATATES",

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

            title: "Ça a ken en juillet",
            question:
                "🟢 Facile :\nBon, c’est un prénom très connu… mais ça m’échappe. Je pense à une reine, ou plutôt une régente, dans l’Histoire de France. Une femme de pouvoir, de stratégie, de poison aussi peut-être. Une autre est actrice, une icône du cinéma français, très élégante, très mystérieuse, presque glaciale. Et puis il y a celle qui dansait dans Chicago, l’Américaine avec le regard de feu. Trois femmes très différentes, mais un même prénom, fort, presque royal. C’est pas Carole, ni Christine… mais ça y ressemble. Allez, aide-moi, c’est évident pourtant !\n\n🟡 Moyen :\nC’est un prénom lourd d’histoire. Il a traversé les siècles sur les épaules de femmes qui ne se laissent pas oublier. L’une régnait depuis l’ombre, mariée à un roi, mère de trois autres. Une autre faisait frissonner les salles obscures, dans des rôles de femmes froides et fières. Et la dernière transformait les cabarets en champs de bataille chorégraphiés. Elles ne se ressemblent pas, et pourtant, elles partagent quelque chose. Ce prénom, solide, tranchant, presque sculpté dans la pierre. Il ne se donne pas, il s’impose. Et moi, je l’ai en bouche, mais il refuse de sortir.\n\n🔴 Difficile :\nCe prénom s’écrit dans les marges du pouvoir. Une femme aux origines italiennes, plongée dans les guerres de religion, dont les décisions ont pesé plus lourd que celles des rois. Une actrice, souveraine d’un cinéma distant, au regard de porcelaine blindée. Une autre, flamboyante, entre claquements de talons et sourires assassins. Trois reines de leur domaine, unies par un prénom qui rime avec destin. Il n’a rien de discret. Il est ancien, ancré, presque architectural. Mais même lui peut se faire oublier… une seconde. Jusqu’à ce qu’on s’en souvienne comme d’un coup de sceptre.",
            answer: "Catherine",
            answerComment:
                "Catherine de Médicis, Catherine Deneuve, Catherine Zeta-Jones et Catherine Gauthier dont l'anniversaire est le 28 avril",

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

            title: "Ça a ken en juillet",
            question:
                '🟢 Facile :\nCe prénom, franchement, je le connais. Mais mon cerveau fait grève. Y’en a un qui joue dans des films français et qui adore monter à cheval, même dans la vraie vie. Il a réalisé aussi, parfois avec des chanteurs célèbres dedans. Un autre, je crois qu’il était suisse, il a tiré une flèche dans une pomme posée sur la tête de son propre fils. Et le dernier a carrément envahi l’Angleterre au XIe siècle. On l’appelait "le Conquérant", c’est dire. Trois mecs, un prénom simple, solide, un vrai classique. C’est pas Gérard, pas Gaspard… mais on y est. Allez, tu vois de qui je parle ?\n\n🟡 Moyen :\nC’est un prénom qui traverse les siècles. D’abord un acteur-réalisateur, passionné de chevaux, qui oscille entre drames contemporains et fresques épiques. Puis un héros légendaire de l’indépendance suisse, qui vise juste, très juste, même sous pression. Enfin, un stratège médiéval, dont la traversée de la Manche a changé la face du trône anglais. Ces trois hommes ne partagent rien, sinon ce prénom, stable et sérieux. Il a quelque chose de martial, mais sans brutalité. Un prénom d’hommes décidés. Moi, il me file entre les neurones. Tu l’as ?\n\n🔴 Difficile :\nCe prénom a foulé les planches, les montagnes et les champs de bataille. Il s’est glissé dans les scripts de cinéma, dans les légendes nationales, et dans les livres d’Histoire. L’un l’a porté au sommet des palmarès du box-office. L’autre en a fait un symbole de résistance et de précision. Le dernier l’a inscrit à jamais dans la monarchie britannique, armé d’ambition et d’un sens aigu de la conquête. Trois figures, trois mythes, une seule sonorité. Ce prénom n’est pas rare, mais il sait se rendre remarquable. Je le connais par cœur… mais là, il se dérobe. Peut-être parce qu’il est trop évident pour être vu.',
            answer: "Guillaume",
            answerComment:
                "Guillaume Canet, Guillaume Tell, Guillaume Le Conquérant et Guillaume Dubois",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 31,
            type: "Tips",
            speed: false,
            round: 1,
            points: 0,

            question:
                "Sur les 3400 dernieres annees, combien en ai-je passe sur terre ? (arrondi à l'inférieur)",
            answer: "Je suis né le 12 avril à 15:16, donc à 09:16 ici, donc 33 ans",

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

            question: "Comment s’appelait le cheval gris truite de Napoleon ?",
            propositionsDetailed: ["Reblochon", "Emmental", "Cantal", "Georges"],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "C",

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

            question: "Qui a fonde la brasserie Tsingtao ?",
            propositionsDetailed: [
                "Un groupe chinois, ça ferait du sens",
                "Un groupe allemand, pourquoi pas, ils ont l’expertise",
                "Un groupe japonais, bizarre quand on connait la relation chine-japon… ",
                "Un groupe de Nazis, parce que bon, on parlait allemand juste avant et qui dit allemand dans un Poutine quiz dit point Godwin…",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "B",

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

            question: "Quel est le nom du titre et du groupe que vous venez d’entendre ?",
            propositionsDetailed: [
                "Banana Hammock of Doom de Barbecue Apocalypse",
                "Death Metal de Ninja Sex Party",
                "Slam Dunk your Grandma de Napalm Cupcake",
                "Cuddlepocalypse Now de Symphony of Flatulence and Fire",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "B",

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

            question:
                "La liberte guidant le peuple est un celebre tableau francais expose au Louvre. Mais que represente t'il ?",
            propositionsDetailed: [
                "La prise de la bastille",
                "La prise des tuileries",
                "La révolution des 3 glorieuses",
                "L’arrivée au McDo à 3h du mat un samedi de cuite",
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

            question:
                "Quel championnat officiel n’existe pas mais devrait mis en place tres vite parce qu’il est cool ?",
            propositionsDetailed: [
                "Le championnat allemand de repassage de vêtements extrême",
                "Le championnat français d’insultes au volant",
                "Le championnat américain de lutte libre contre alligators",
                "Le championnat chinois de portage d’abeilles",
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

            question:
                "Quel est le numero qui a valu a Roland le Peteur d’obtenir les faveurs du roi Henri II ?",
            propositionsDetailed: [
                "Saltatio Flatus Magistralis = La Danse Magistrale des Flatuosités, Une chorégraphie alliant mouvements de danse et émissions sonores contrôlées.",
                "Sonitus Ventorum Variabilis = Le son des vents changeants, Une performance explorant une gamme variée de sons produits par des techniques maîtrisées de flatulences.​",
                "Unum saltum et siffletum et unum bumbulum = un saut, un sifflet et un pet, Une prestation physique et artistique où le saut, le sifflet et le pet sont effectué en même temps",
                "Saltatio Carioca Flatulens = La danse Carioca Flatulente",
            ],
            propositionsShort: ["A", "B", "C", "D"],
            answer: "C",

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

            question: "Philipe Etchebest",
            propositionsDetailed: ["Cordon bleu", "Ceinture noire", "Les deux"],
            propositionsShort: ["Cordon bleu", "Ceinture noire", "Les deux"],
            answer: "Cordon bleu",

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

            question: "Teddy Riner",
            propositionsDetailed: ["Cordon bleu", "Ceinture noire", "Les deux"],
            propositionsShort: ["Cordon bleu", "Ceinture noire", "Les deux"],
            answer: "Ceinture noire",

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

            question: "Thomas Keller",
            propositionsDetailed: ["Cordon bleu", "Ceinture noire", "Les deux"],
            propositionsShort: ["Cordon bleu", "Ceinture noire", "Les deux"],
            answer: "Cordon bleu",

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

            question: "Maitre Gims",
            propositionsDetailed: ["Cordon bleu", "Ceinture noire", "Les deux"],
            propositionsShort: ["Cordon bleu", "Ceinture noire", "Les deux"],
            answer: "Ceinture noire",

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

            question: "Bob l'éponge",
            propositionsDetailed: ["Cordon bleu", "Ceinture noire", "Les deux"],
            propositionsShort: ["Cordon bleu", "Ceinture noire", "Les deux"],
            answer: "Les deux",

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

            question: "Père dodu",
            propositionsDetailed: ["Cordon bleu", "Ceinture noire", "Les deux"],
            propositionsShort: ["Cordon bleu", "Ceinture noire", "Les deux"],
            answer: "Cordon bleu",

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

            title: "Les dessous de la 24eme lettre",
            question:
                "Combien a couté la production du film « Pirates II, la revanche de Stagnetti » ?",
            answer: "Environ 10 000 000 à 10% près",

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

            title: "Les dessous de la 24eme lettre",
            question: "Comment s’appelle le plus ancien cinéma X de Montréal ?",
            answer: "Le Cinéma l'amour",
            answerComment: "depuis 1981 (appelé d’abord Le Globe, puis Hollywood, puis Pussycat)",

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

            title: "Les dessous de la 24eme lettre",
            question:
                "V ou F, le documentaire sur la Fistinière s’appelle « Là où bat le Poing » ?",
            answer: "Faux",
            answerComment: "c’était « le cœur au centre »",

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

            title: "Les dessous de la 24eme lettre",
            question: "Que veut dire le mot grec Pornographos dont découle le terme Pornographie ?",
            answer: "Écrire ou peindre à propos des prostituée",

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

            title: "Le spoil, y a prescription",
            question:
                "Après 10 saisons et 236 épisodes, qui demande où est-ce que le groupe irait prendre un dernier café avant de se séparer ?",
            answer: "Chandler",

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

            title: "Le spoil, y a prescription",
            question: "Comment se finissent les aventures de Dr. House ?",
            answer: "House se fait passer pour mort et part avec Wilson en moto pour être avec lui pour ses derniers jours",

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

            title: "Le spoil, y a prescription",
            question: "Comment se termine Tom & Jerry ?",
            answer: "Déprimé d’avoir perdu leur amour, Tom et Jerry s’assoient sur les rails d’un train et attendent la mort… Glauque",

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

            title: "Le spoil, y a prescription",
            question: "V ou F, à la fin de Marcelino, il meurt !",
            answer: "Vrai, le jour du sixième anniversaire de Marcelino. Le gamin a l’air un peu déprimé, alors il va voir la statue du Christ qui est posée dans le grenier du monastère. Le Christ se met à parler (normal) et propose à Marcelino d’exaucer un de ses souhaits et l’enfant demande à retrouver sa mère. Le Christ accepte sans préciser qu’il rejoindra sa mère au Paradis, causant ainsi la mort de l’enfant.",

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

            title: "La megafaune de l'Artinskien",
            question:
                "Quelles sont les dimensions exactes du plus grand insecte connu qui n'ait jamais vécu, le Meganeuropsis permiana ?",
            answer: "une longueur de l'aile reconstruite de 33 centimètres, une envergure d'environ jusqu'à 71 centimètres, et une longueur de corps de la tête à la queue de près de 43 centimètres",

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

            title: "La megafaune de l'Artinskien",
            question: "Quel est le plus gros mammifère terrestre connu ?",
            answer: "Le Paraceratherium",

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

            title: "La megafaune de l'Artinskien",
            question:
                "Mesurant jusqu’à 3.5 mètres de long, et possédant un voile dorsal, probablement utilisée pour la thermorégulation ou l’intimidation, il était l’un des prédateurs dominant de cette époque. Quel est le nom de ce mégaprédateur ?",
            answer: "Le dimetrodong",

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

            title: "La megafaune de l'Artinskien",
            question:
                "Quel pourcentage des espèces marines et terrestres fut éradiqué à la fin du permien ?",
            answer: "95 % des espèces marines et 70 % des espèces terrestres, donc 82.5 % au total",

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

            title: "Titre cochon",
            question:
                "Deux puissances s’affrontent dans une guerre où l’acier claque autant que les reins. D’un côté, des créatures féroces et lubriques, menées par un chef bien raide. De l’autre, une poignée de résistants, sales, fatigués… mais avec de grandes ambitions et de très longs bâtons. Au milieu, une forteresse imprenable, qui va pourtant bien se faire exploser le trou. Dans cette bataille moite, chacun cherche à pénétrer les lignes ennemies. Des cris, des larmes, et beaucoup de choses qui coulent. L’un d’eux commence à sentir un étrange appel, comme un frisson interdit. Et dans les ténèbres… certains liens deviennent très, très serrés.",
            answer: "Le seigneur des anneaux, les deux tours -> Le seigneur des anus, les deux trous",

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

            title: "Titre cochon",
            question:
                "Un garçon découvre qu’il est spécial, différent, doté d’un pouvoir qu’il ne comprend pas encore. Il est envoyé dans un lieu étrange, immense, rempli de secrets et de tentations. Les couloirs sont sombres, les escaliers mouvants, et les chambres communes très mal isolées. Il apprend à manier des baguettes, à dire des formules, et à s’ouvrir à de nouveaux plaisirs... mentaux et physiques. L’ambiance est électrique, les potions excitantes, les professeurs... troublants. Très vite, il sent que quelque chose se réveille en lui, quelque chose de magique et de très intime. Et dans ce monde de sortilèges, il faudra bien plus qu’un sort de désarmement pour contenir ses pulsions. Car parfois, la magie... c’est juste une bonne excuse pour tout tester.",
            answer: "Harry Potter à l’école des sorciers -> Hardy Pineur à l’école des suceurs",

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

            title: "Titre cochon",
            question:
                "Elle vit seule, discrète, dans son univers à elle, fait de couleurs douces et de fantasmes silencieux. Elle touche les choses du bout des doigts, avec une délicatesse presque sensuelle. Autour d’elle, le monde s’éveille à son contact : un fruit devient un objet de désir, un inconnu une obsession à explorer. Elle regarde sans se montrer, elle désire sans se livrer. Mais plus le jeu avance, plus le feu grandit. Les murs de sa chambre ne suffisent plus à contenir ses élans. Elle veut sentir, goûter, vibrer. Et parfois, un petit coup de pouce du destin suffit à transformer une caresse imaginaire en vraie explosion charnelle",
            answer: "Le fabuleux destin d’Amélie Poulain -> Le plantureux fessier d’Amélie Plus qu’un",

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

            title: "Titre cochon",
            question: "Edward aux mains d’argent -> Edward aux bites d’argent",
            answer: "Il vit dans un coin perdu, isolé, avec des mains peu communes. Mais malgré ses gestes maladroits, il attire, fascine, excite sans le vouloir. Chacune de ses caresses coupe le souffle, chacune de ses erreurs fait gémir. On l’approche, on le teste, on veut tout connaître de lui, même ses lames. Il devient l’objet de toutes les convoitises. Et même s’il blesse parfois, on revient toujours vers lui. Car certaines sensations ne s’oublient jamais, même quand elles laissent des marques",

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

            title: "Titre cochon",
            question:
                "Il se cache dans l’ombre des cloches, solitaire, musclé, et bien trop discret. Son regard doux contraste avec la bête qui sommeille en lui. Elle, jeune et vive, pénètre dans son univers de pierres froides et d’arcs tendus. Il l’observe, il tremble, il lutte contre ses instincts… mais ils sont trop puissants. Les autres la veulent, la convoitent, l’enferment. Lui, il la protège, mais rêve aussi de la dévorer. Les cloches sonnent, le désir monte, et le clocher tremble sous les coups. Parfois, l’amour ne se chante pas… il se hurle",
            answer: "Le bossu de notre dame -> Le pineux de notre dame",

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

            title: "Titre cochon",
            question:
                "Ils sont amis, ou du moins ils le croyaient. Un événement dramatique les réunit, puis les déborde. Les tensions s’accumulent, les couples s’échauffent, les corps se frôlent sous les draps d’amitié. L’alcool coule, les vérités éclatent, et les pulsions refont surface. Chacun cherche du réconfort là où il peut, et souvent là où il ne devrait pas. Les frontières se brouillent, les sentiments se mêlent aux sensations. Et quand les mouchoirs sont tous utilisés, il ne reste que les soupirs. Ce qui devait apaiser… finit par tout embraser.",
            answer: "Les petits mouchoirs -> Les mouchoirs souillés",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
        {
            id: 62,
            type: "Tips",
            speed: false,
            round: 2,
            points: 0,

            question:
                "Sachant que la moyenne de la taille du pénis en érection est de 13.12 cm, combien ici en ont une plus petite ?",
            answer: "En fonction des joueurs",

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
                '1. Quel est le meilleur prénom ? Un indice, ça commence par G\n2. À votre avis, combien y-a-t’il de petites frites dans un Poutine Quiz ?\n3. Vous me voyez plus bois de noyer, de cerisier ou de pin ?\n4. V ou F, Si vous étiez né demain, vous ne pourriez pas être ici en ce moment ?\n5. Complète la phrase : "Une bonne poutine, c’est comme un bon quiz : ça commence par des questions et ça finit par..." \n6. Quel est le nom de l’équipe qui a remporté 4 fois le Poutine Quiz ? Cherchez pas trop loin, la réponse est dans la question.\n7. Selon la légende, combien de souhaits exauce mon magnifique crâne lisse s’il est caressé en silence un soir de pleine lune ?\n8. Complétez ce groupe de 4 potes: Guillaume, Guillaume, Guilhem et…\n9. Sur quel thème voudriez-vous que je fasse le prochain Poutine Quiz ?\n10. Si vous gagnez tous les chocolats, vous partagez avec tout le monde ou vous faites votre gros chacal ?',
            answer: "NA",

            showQuestion: false,
            propositionsStep: 0,
            locked: false,
            showAnswer: false,
        },
    ]
}
