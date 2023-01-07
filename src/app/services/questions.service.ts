import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Question[] = [
    {
        id: 1,
        question: 'Quel est le métier d\'Astérix ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'B (Mentionné dans l\'album Astérix le Gaulois)',
        points: 1
    },
    {
        id: 2,
        question: 'Quel alcool existe vraiment ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'A (Doit sa couleur à la fleur de pois bleu, et il change de couleur pour passer au violet à l\'ajout d\'un composé acide comme du citron)',
        points: 1
    },
    {
        id: 3,
        question: 'Quelle citation n\'est jamais dite par les Pirates dans le salbums ?\nA. Heureux celui qui a pu pénétrer les causes secrètes des choses\nB. Il n\'est pas donné à tout le monde d\'aller à Brest\nC. C\'est maintenant qu\'il faut boire\nD. Bienheureux les pauvres d\'esprits)',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'D',
        points: 1
    },
    {
        id: 4,
        question: 'Qui a dessiné ce magnifique portrait robot du duo gaulois ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'C',
        points: 1
    },
    {
        id: 5,
        question: 'Lequel de ces jeux-vidéos n\'existe pas ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'A',
        points: 1
    },
    {
        id: 6,
        question: 'Lequel de ces personnages n\'existe pas ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'C (Keskonrix est dans Asterix Gladiateur, Choucroutgarnix dans Obélix et Companie, Adictoserix dans la fille de vercingétorix)',
        points: 1
    },
    {
        id: 7,
        question: 'Que dis l\'hypnotiseur egyptien dans les 12 travaux d\'Astérix ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'A',
        points: 1
    },
    {
        id: 8,
        question: 'Lequel de ces faits sur Astérix n\'est pas vrai ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'C (Times en 15 juillet 1991, Premier satellite français lancé le 26 novembre 1965, slip enlevé récemment)',
        points: 1
    },
    {
        id: 9,
        question: 'Dans quel film d\'animation Obélix a pu boire de la potion magique ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'B, pour détruire les immeubles construits par les romains et laisser la forêt pousser',
        points: 1
    },
    {
        id: 10,
        question: 'A été joué par le plus d\'acteurs différents',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Astérix',
        proposition2: 'Obélix',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Astérix (Asterix: Christian Clavier, Clovis Cornillac, Édouard Baer, Guillaume Canet - Obélix: Gérard Depardieu, Gilles Lelouche)',
        points: 1
    },
    {
        id: 11,
        question: 'A fini par se marier et avoir une famille',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Astérix',
        proposition2: 'Obélix',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Astérix (5 petits enfants, dans l\'album L\'anniversaire d\'Astérix et Obélix)',
        points: 1
    },
    {
        id: 12,
        question: 'Aime se tailler le menhir',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Astérix',
        proposition2: 'Obélix',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Obélix',
        points: 1
    },
    {
        id: 13,
        question: 'D\'après lui, les bébés sont apportés par des cigognes',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Astérix',
        proposition2: 'Obélix',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Obélix',
        points: 1
    },
    {
        id: 14,
        question: 'Se prends souvent la tête avec l\'autre',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Astérix',
        proposition2: 'Obélix',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Les deux',
        points: 1
    },
    {
        id: 15,
        question: 'Ne connait pas la date de la bataille de Gercovie',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Astérix',
        proposition2: 'Obélix',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Obélix (-52 avant JC, dans la rentrée des classes)',
        points: 1
    },
    {
        id: 16,
        question: 'S\'est fait charmé par Latraviata',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Astérix',
        proposition2: 'Obélix',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Obélix (Astérix est devenu amnésique, mais n\'est jamais vraiment tombé sous le charme)',
        points: 1
    },
    {
        id: 17,
        question: 'Signe un Z de la pointe de son épée',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Astérix',
        proposition2: 'Obélix',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Astérix (Dans le cadeau de César)',
        points: 1
    },
    {
        id: 18,
        question: 'Quel plat belge le cuisinier Mannekenpix a inventé d\'après les 12 travaux d\'Astérix',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'La frite, on dit même qu\'il est à l\'origine du poutine quiz',
        points: 1
    },
    {
        id: 19,
        question: 'Dans quel album Cétautomatix fini ligauté au lieu d\'Assurancetourix lors du banquet final ?',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Astérix et les Normands, car c\'est Assurancetourix qui a vaincu les normands en leur faisant peur avec sa voix',
        points: 1
    },
    {
        id: 20,
        question: 'Citez-moi deux spécialités récupérées par Astérix et Obélix lors de leur tour de Gaule',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Jambon de Lutèce (Paris)\n Bêtises de Camaracum (Cambrai)\nVin pétillant (Champagne) de Durocortorum (Reims)\nSaucisses et Quenelles de Lugdunum (Lyon)\nSalade nicaeoise de Nicae (Nice)\nBouillabaisse de Massilia (Marseille)\nSaucisses de Tolosa (Toulouse)\nPruneaux d\'Aginum (Agen)\nHuitres et Vin blanc de Burdigala (Bordeaux)\nLa Châtaigne gauloise\n',
        points: 1
    },
    {
        id: 21,
        question: 'Quel ingrédient Tournivis ajoute à la recette du pudding à l\'Arsenic ?',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Un peu de Vitriol',
        points: 1
    },
    {
        id: 22,
        question: 'Complétez les parôles: "Écoutez ce qui va suivre, le vieux proverbe est changé..."',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'On ne mange pas pour vivre, il faut vivre pour manger',
        points: 1
    },
    {
        id: 23,
        question: 'Citez-moi quatres pays où Astérix et Obélix sont allés au cours de leur aventures',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Allemagne (Chez les Goths)\nItalie (Gladiateur)\nEgypte (Et Cléopâtre)\nAngleterre (Chez les bretons)\nTunisie (Légionnaire)\nGrèce (Jeux olympiques)\nEspagne (En hispanie)\nSuisse (Chez les helvetes)\nDanemark et États-Unis (La grande traversée)\nBelgique (Chez les belges)\nIran et Inde (Chez Rahazade)\nAtlantide (LA Galère d\'Obélix)\nEcosse (Les pictes)\n',
        points: 1
    },
    {
        id: 24,
        question: 'Dans Astérix et les indiens, d\'après Obélix, combien de banquets peut-on faire avec ce nombre de bison ?',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: '3 banquets',
        points: 1
    },
    {
        id: 25,
        question: 'Dans quel album Astérix et Obélix doivent passer une nuit dans un coffre fort ?',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Astérix chez les Herlvètes',
        points: 1
    },
    {
        id: 26,
        question: 'V ou F, dans Astérix chez les Goths, Astérix, Obélix et Panoramix organisent une guerre civile dopée à la potion magique pour décourager les Goths d\'envahir la Gaule ?',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'V',
        points: 1
    },
    {
        id: 27,
        question: 'Quel célèbre personnage de la littérature espagnole apperçoit-on dans Astérix en Hispanie ?',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Don Quichotte',
        points: 1
    },
    {
        id: 28,
        question: 'Que se passe-t\'il dans la troisième case de la page 17 d\'Astérix chez Rahazade ?',
        type: 'Menu',
        group: 3,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Le fakir est saoul après avoir un peu trop bu',
        points: 1
    },
    {
        id: 29,
        question: 'Que se passe-t\'il dans la troisième case de la page 17 d\'Astérix et Latraviata ?',
        type: 'Menu',
        group: 3,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Latraviata essaie de prendre le casque que le père d\'Obélix lui a offert',
        points: 1
    },
    {
        id: 30,
        question: 'Que se passe-t\'il dans la troisième case de la page 17 de la Grande Traversée ?',
        type: 'Menu',
        group: 3,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Un indien fait Glouglouglou',
        points: 1
    },
    {
        id: 31,
        question: 'Que se passe-t\'il dans la troisième case de la page 17 des Lauriers de César ?',
        type: 'Menu',
        group: 3,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Gardefréjus goute la soupe d\'Astérix et Obélix',
        points: 1
    },
    {
        id: 32,
        question: 'Cuir, Cuir, Moustache',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Astérix',
        points: 3
    },
    {
        id: 33,
        question: 'Cuir, Cuir, Moustache',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Cylindric le Germain',
        points: 3
    },
    {
        id: 34,
        question: 'Cuir, Cuir, Moustache',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Sulfurix',
        points: 3
    },
    {
        id: 35,
        question: 'Cuir, Cuir, Moustache',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Ordralfabetix',
        points: 3
    },
    {
        id: 36,
        question: 'Cuir, Cuir, Moustache',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Caius Céplus',
        points: 3
    },
    {
        id: 37,
        question: 'Cuir, Cuir, Moustache',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Idéfix',
        points: 3
    },
    {
        id: 38,
        question: 'Cuir, Cuir, Moustache',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Cétautomatix',
        points: 3
    },
    {
        id: 39,
        question: 'Cuir, Cuir, Moustache',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Kiçàh le fakir',
        points: 3
    },
    {
        id: 40,
        question: 'Cuir, Cuir, Moustache',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Caius Bonus',
        points: 3
    },
    {
        id: 41,
        question: 'Lequel de ces articles scientifiques n\'existe pas ?\nA. La bouche, l\'anus et le blastopore - questions ouvertes sur les ouvertures questionables\nB. Le rhume des neiges et ses septs souches\nC. Un anneau pour les multiplexer tous\nD. Les levures fantastiques et où les trouver',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'B',
        points: 1
    },
    {
        id: 42,
        question: 'Dans l\'allemagne médiévale, comment les couples réglaient leurs problèmes ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'C (Pour équilibrer, les hommes combattait dans un trou avec une seule main, et les femmes pouvaient frapper les hommes avec un sac de pierre)',
        points: 1
    },
    {
        id: 43,
        question: 'Quel est le plus gros flop de l\'histoire du cinéma ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'A (John Carter: 236 Million $, Lone Ranger: 221 Million $, 13th warrior: 210 million $, Mortal engine: 189 million $)',
        points: 1
    },
    {
        id: 44,
        question: 'Combien de temps a duré la guerre la plus courte du monde ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'A (La guerre Anglo-Zanzibar du 27 août 1896 a duré 38 minutes. Suite à la mort du Sultan pro-anglais Hamad ibn Thuwaïni, le sultan pro-allemand Khalid ibn Bargach pris le pouvoir sans l\'accord des anglais qui lui préféraient un autre. Les anglais ont alors braqués leurs canons vers le palais royal en donnant pour ultimatum le départ du sultan. Il refusa, les anglais ont attaqués, le palais est en ruine, et un nouveau sultan a été mis en place (500 pertes sansibarienne, 1 seule anglais))',
        points: 1
    },
    {
        id: 45,
        question: 'Lequel de ces faits est faux ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'D',
        points: 1
    },
    {
        id: 46,
        question: 'Quel objet va apparaitre sur cette vidéo ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'C (Expliquer histoire du cadeau de Noël)',
        points: 1
    },
    {
        id: 47,
        question: 'Lequel de ces vins n\'existent pas ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',
        proposition5: 'E',
        proposition6: 'F',

        answer: 'C',
        points: 1
    },
    {
        id: 48,
        question: 'Quel acteur est mort le plus de fois sur écran ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'A',
        proposition2: 'B',
        proposition3: 'C',
        proposition4: 'D',

        answer: 'D (Sean Bean: 23 morts, Nicolas Cage: 32 morts, Christopher Lee: 69 morts, Danny Trejo: 72 morts)',
        points: 1
    },
    {
        id: 49,
        question: 'A été donné par un homme encapuchonné dans une taverne',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Aragorn',
        proposition2: 'Aragog',
        proposition3: 'Origan',
        proposition4: '',

        answer: 'Aragog',
        points: 1
    },
    {
        id: 50,
        question: 'Aime passer du temps encapuchonné dans une taverne',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Aragorn',
        proposition2: 'Aragog',
        proposition3: 'Origan',
        proposition4: '',

        answer: 'Aragorn',
        points: 1
    },
    {
        id: 51,
        question: 'A un nom qui veut dire "Qui se plaie sur la montagne"',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Aragorn',
        proposition2: 'Aragog',
        proposition3: 'Origan',
        proposition4: '',

        answer: 'Origan',
        points: 1
    },
    {
        id: 52,
        question: 'A des propriétés anti-insectes',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Aragorn',
        proposition2: 'Aragog',
        proposition3: 'Origan',
        proposition4: '',

        answer: 'Origan (Aussi anti-oxidant, sédatif et anti-tussif)',
        points: 1
    },
    {
        id: 53,
        question: 'A des propriétés anti-orc',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Aragorn',
        proposition2: 'Aragog',
        proposition3: 'Origan',
        proposition4: '',

        answer: 'Aragorn (Aussi anti-Uruk Hai, anti-Nazguls et pro-Rohirim)',
        points: 1
    },
    {
        id: 54,
        question: 'A vécu plus de 200 ans',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Aragorn',
        proposition2: 'Aragog',
        proposition3: 'Origan',
        proposition4: '',

        answer: 'Aragorn',
        points: 1
    },
    {
        id: 55,
        question: 'Est devenu populaire aux US après la seconde guerre mondiale',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Aragorn',
        proposition2: 'Aragog',
        proposition3: 'Origan',
        proposition4: '',

        answer: 'Origan (ramené de l\'Italie comme herbe à Pizza)',
        points: 1
    },
    {
        id: 56,
        question: 'A repeuplé une colonie avec sa femme',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Aragorn',
        proposition2: 'Aragog',
        proposition3: 'Origan',
        proposition4: '',

        answer: 'Aragog',
        points: 1
    },
    {
        id: 57,
        question: 'V ou F, durant les élections présidentielles de 2020, P***hub n\'était accessible qu\'aux américains ayant voté ?',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'V (Give a F***, Get a F***)',
        points: 1
    },
    {
        id: 58,
        question: 'Quel était le but du "Wank Band", bracelet créé par P***Hub (mais malheureusement jamais commercialisé) ?',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Convertir l\'énergie cinétique de la branlette en électricité',
        points: 1
    },
    {
        id: 59,
        question: 'En 2022, à quelle place se situe le canada en terme de trafic ?',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: '8ème place',
        points: 1
    },
    {
        id: 60,
        question: 'V ou F, P***Hub a une chaîne pour les aveugles ?',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'V (avec audiodescription)',
        points: 1
    },
    {
        id: 61,
        question: 'V ou F, la terre est au plus proche du soleil en hivers ?',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'V (et c\'est assez contrintuitif, mais c\'est l\'angle d\'arrivé des rayons du soleil qui détermine l\'énergie délivrée)',
        points: 1
    },
    {
        id: 62,
        question: 'Quelle couleur, autre que le blanc, la neige peut naturellement avoir ?',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Jaune, Orange, Rouge, Gris, Bleu, Vert',
        points: 1
    },
    {
        id: 63,
        question: 'Quelle est la température extérieure la plus froide enregistrée sur Terre ? (À 10 degrés près)',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: '-98°C en antarctique',
        points: 1
    },
    {
        id: 64,
        question: 'Combien de pays de l\'hémisphère sud ont accueillis les jeux olympique d\'hivers ? (À 4 près)',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: '13',
        points: 1
    },
    {
        id: 65,
        question: 'V ou F, la Terre a attendue presque 20 ans avant d\'envoyer de la neige au Sahara juste pour faire chier Anggun ?',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'V',
        points: 0
    },
    {
        id: 66,
        question: 'Posons les bases, quel est la température du zéro absolue en Fahrenheit ? (Avec deux décimales)',
        type: 'Menu',
        group: 3,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: '-459.67°F',
        points: 1
    },
    {
        id: 67,
        question: 'D\'après quelle constante est dérivée l\'amplitude du Kelvin défini par la théorie cinétique ?',
        type: 'Menu',
        group: 3,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'La constante de Boltsmann',
        points: 1
    },
    {
        id: 68,
        question: 'Quelle est la loi zéro de la thermodynamique ?',
        type: 'Menu',
        group: 3,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Si deux systèmes sont tous deux en équilibre thermique avec un troisième système, alors ils sont en équilibre thermique l\'un avec l\'autre.',
        points: 1
    },
    {
        id: 69,
        question: 'Que fait l\'entropie d\'un système quand sa température approche le zéro absolu ?',
        type: 'Menu',
        group: 3,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'L\'entropie approche une constante (4ème loi de la thermodynamique)',
        points: 1
    },
    {
        id: 70,
        question: 'Yippie-ki-yay, pauvre con ! (Yippie-ki-yay, motherfucker)',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Piège de Cristal (Die Hard)',
        points: 3
    },
    {
        id: 71,
        question: 'Comment appelez-vous un pays dirigé par un militaire, qui a les pleins pouvoirs, où les médias sont muselés et où la seule chaîne de télévision est celle de l\'Etat ? La France Madame ! La France du Général de Gaulle !',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'OSS 117, Rio ne répond plus',
        points: 3
    },
    {
        id: 72,
        question: 'Ta mère suce des bites en enfer!',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'L\'exorciste',
        points: 3
    },
    {
        id: 73,
        question: 'Stupide hobbit joufflu !',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Le seigneur des anneaux, les deux tours',
        points: 3
    },
    {
        id: 74,
        question: 'Mais tu sais c\'que t\'es ? T\'es le roi des cons au pays des emmerdeurs ! Un pt… un p\'tit con casse couille qui prend la tête d\'accord ?! Hein espèce de petit enculé, de merdeux, qui chiale sa race toute la journée, voilà c\'que t\'es ! Connard, connard, connard… Casse-toi putain, connard, connard, connard ! Petit enculé de merde !',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Nos jours heureux',
        points: 3
    },
    {
        id: 75,
        question: 'Vous êtes le fils d\'une femelle hamster et d\'un homme puant le sureau !',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Monthy Python, Sacré Graal',
        points: 3
    },
    {
        id: 76,
        question: 'Nom de Dieu de putain de bordel de merde de saloperie de connard d\'enculé de ta mère. Vous voyez, c\'est aussi jouissif que de se torcher le cul avec de la soie, j\'adore ça.',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Matrix Reloaded',
        points: 3
    },
    {
        id: 77,
        question: 'Mon hostie de câlice de pourri sale',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Bon cop, bad cop\n1. V ou F, D\'après Astérix et les indiens, les romains pensent que la terre est plate ?\n2. Diriez-vous qu\'Astérix a un problème de dépendance à la potion magique ?\n3. Alors, il est frais ou non ce poisson ?\n4. V ou F, Panoramix utilise des cubes de bouillon pour donner du gout à sa potion magique ?\n5. En quelle année a eu lieu de bataille de Gergovie ? En chiffre romain bien sur, si vous ne savez pas dites LII av JC\n6. Vous êtes plus Choucroutgarnix ou Tartifletix ?\n7. Si la Grande Frite était gauloise, combien de sanglier mangerait-elle à chaque buffet ?\n8. V ou F, dans les années 80 on pouvait suivre les aventures d\'un autre héro gaulois, le célèbre Agencetourix ?\n9. Pensez-vous que Scribe soit une bonne situation ?\n10. Pensez vous voir Astérix et Obélix l\'empire du milieu au cinéma quand il sera sorti ?\n',
        points: 3
    }
  ]
}
