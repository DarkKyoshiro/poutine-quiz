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

        question: 'Quel est le métier d\'Astérix ?',
        propositionsDetailed: ['Chasseur', 'Guerrier', 'Diplomate', 'Petite b**** du village'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'B',
        answerComment: 'Mentionné dans l\'album Astérix le Gaulois',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 2,
        type: 'SelOuPoivre',
        speed: true,
        round: 1,
        points: 1,

        question: 'A été joué par le plus d\'acteurs différents',
        propositionsDetailed: ['Astérix', 'Obélix', 'Les deux'],
        propositionsShort: ['Astérix', 'Obélix', 'Les deux'],
        answer: 'Astérix',
        answerComment: 'Asterix: Christian Clavier, Clovis Cornillac, Édouard Baer, Guillaume Canet\nObélix: Gérard Depardieu, Gilles Lelouche',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 3,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 1,
        points: 1,

        question: 'Quel plat belge le cuisinier Mannekenpix a inventé d\'après les 12 travaux d\'Astérix',
        answer: 'La frite, on dit même qu\'il est à l\'origine du poutine quiz',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 4,
        type: 'Menu',
        speed: false,
        round:1,
        group: 2,
        points: 1,

        question: 'Citez-moi quatres pays où Astérix et Obélix sont allés au cours de leur aventures',
        answer: 'Allemagne (Chez les Goths)\nItalie (Gladiateur)\nEgypte (Et Cléopâtre)\nAngleterre (Chez les bretons)\nTunisie (Légionnaire)\nGrèce (Jeux olympiques)\nEspagne (En hispanie)\nSuisse (Chez les helvetes)\nDanemark et États-Unis (La grande traversée)\nBelgique (Chez les belges)\nIran et Inde (Chez Rahazade)\nAtlantide (LA Galère d\'Obélix)\nEcosse (Les pictes)\n',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 5,
        type: 'Menu',
        speed: false,
        round: 1,
        group: 3,
        points: 1,

        question: 'Que se passe-t\'il dans la troisième case de la page 17 d\'Astérix chez Rahazade ?',
        answer: 'Le fakir est saoul après avoir un peu trop bu',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 6,
        type: 'Addition',
        speed: true,
        round: 1,
        points: 3,

        question: 'Cuir, Cuir, Moustache',
        answer: 'Astérix',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 7,
        type: 'Nugget',
        speed: false,
        round: 2,
        points: 1,

        question: 'Lequel de ces articles scientifiques n\'existe pas ?',
        questionComment: 'A. La bouche, l\'anus et le blastopore - questions ouvertes sur les ouvertures questionables\nB. Le rhume des neiges et ses septs souches\nC. Un anneau pour les multiplexer tous\nD. Les levures fantastiques et où les trouver',
        propositionsDetailed: ['The mouth, the anus, and the blastopore - open questions about questionable openings', 'Snow-cold and its seven strains', 'One ring to multiplex them all', 'Fantastic yeasts and where to find them'],
        propositionsShort: ['A', 'B', 'C', 'D'],
        answer: 'B',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 8,
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
        id: 9,
        type: 'Menu',
        speed: false,
        round: 2,
        group: 1,
        points: 1,

        question: 'V ou F, durant les élections présidentielles de 2020, P***hub n\'était accessible qu\'aux américains ayant voté ?',
        answer: 'V',
        answerComment: 'Give a F***, Get a F***',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 10,
        type: 'Menu',
        group: 2,
        speed: false,
        round: 2,
        points: 1,

        question: 'V ou F, la terre est au plus proche du soleil en hivers ?',
        answer: 'V',
        answerComment: 'C\'est assez contrintuitif, mais c\'est l\'angle d\'arrivé des rayons du soleil qui détermine l\'énergie délivrée',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 11,
        type: 'Menu',
        group: 3,
        speed: false,
        round: 2,
        points: 1,

        question: 'Posons les bases, quel est la température du zéro absolue en Fahrenheit ? (Avec deux décimales)',
        answer: '-459.67°F',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    },
    {
        id: 12,
        type: 'Addition',
        speed: true,
        round: 2,
        points: 3,

        question: 'Yippie-ki-yay, pauvre con ! (Yippie-ki-yay, motherfucker)',
        answer: 'Piège de Cristal (Die Hard)',
        
        showQuestion: false,
        propositionsStep: 0,
        locked: false,
        showAnswer: false
    }
  ]
}
