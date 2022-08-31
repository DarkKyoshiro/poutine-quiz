import { Injectable } from '@angular/core';
import { SocketIoModule } from 'ngx-socket-io';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Question[] = [
    {
        id: 1,
        question: 'Entre 2018 et 2020, quelle salle a eu le plus de merde ?',
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
        id: 2,
        question: 'À qui appartient ce magnifique doigt ?',
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
        id: 3,
        question: 'En parlant de doigt, pourquoi cette pyramide ?',
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
        question: 'En parlant de pyramide, qui n’a pas participé à la pyramide du party de noël fait en février ?',
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
        id: 5,
        question: 'Quel trio a incarné les Super-Nanas ?',
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
        question: 'Qui a dit, « je viendrais sexualiser tout ce que vous voulez » ?',
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
        id: 7,
        question: 'A donné son nom à un pays',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Des roux',
        proposition2: 'Deux roues',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Des roux',
        points: 1
    },
    {
        id: 8,
        question: 'C\'est Biodégradable',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Des roux',
        proposition2: 'Deux roues',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Des roux',
        points: 1
    },
    {
        id: 9,
        question: 'Se fait en plusieurs couleurs',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Des roux',
        proposition2: 'Deux roues',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Les deux',
        points: 1
    },
    {
        id: 10,
        question: 'Keanu Reeves en possède',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Des roux',
        proposition2: 'Deux roues',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Deux roues',
        points: 1
    },
    {
        id: 11,
        question: 'Est dangereux',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Des roux',
        proposition2: 'Deux roues',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Les deux',
        points: 1
    },
    {
        id: 12,
        question: 'Inventé en 1885 par deux allemands',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Des roux',
        proposition2: 'Deux roues',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Deux roues',
        points: 1
    },
    {
        id: 13,
        question: 'Ça tourne pas rond',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Des roux',
        proposition2: 'Deux roues',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Des roux',
        points: 1
    },
    {
        id: 14,
        question: 'Plus pratique regonflé à bloc',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Des roux',
        proposition2: 'Deux roues',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Les deux',
        points: 1
    },
    {
        id: 15,
        question: 'MC1R',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Des roux',
        proposition2: 'Deux roues',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Des roux',
        points: 1
    },
    {
        id: 16,
        question: 'Qu’était écrit sur le T-shirt offert à Nathanël pour son départ lors de cette soirée ?',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Savez-vous à quoi sert cette bande de cuire ?',
        points: 1
    },
    {
        id: 17,
        question: 'En parlant de cette soirée, après combien de temps me suis-je fais virer de la discussion fb d’Ezkapaz  ?',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: '8 minutes',
        points: 1
    },
    {
        id: 18,
        question: 'Si je vous dit effeuillage et malaisitude, vous me dites ?',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Simon',
        points: 1
    },
    {
        id: 19,
        question: 'Mais pour quoi donc cette grosse bite doit être pratique ?',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Pour faire l\'hélicobite',
        points: 1
    },
    {
        id: 20,
        question: 'Quelle chanson a été interdite à Ezkapaz peu de temps après que je l’y ait introduite ?',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'La Fée Fagot',
        points: 1
    },
    {
        id: 21,
        question: 'Mais qui est en train de perdre patience sur cet extrait ?',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Simon',
        points: 1
    },
    {
        id: 22,
        question: 'Qui s’est retrouvé enfermé dans le barbier ?',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Jé',
        points: 1
    },
    {
        id: 23,
        question: 'V ou F, Simon a déjà réussi à faire cuire un œuf sur le radiateur d’Ezkapaz ?',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Faux',
        points: 1
    },
    {
        id: 24,
        question: 'Qui est Thomas Sammons ?',
        type: 'Menu',
        group: 3,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Thomas N. Sammons (February 7, 1863 – October 15, 1935) was an American diplomat who served for many years in Korea, Japan and China before retiring as United States Consul General to Australia.',
        points: 1
    },
    {
        id: 25,
        question: 'Bien qu’elle ait d’abord été une prostituée chinoise, quel destin incroyable a eu Ching Shih ?',
        type: 'Menu',
        group: 3,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'She was a Chinese prostitute who married a pirate and took over his fleet when he died. She ran her ships with an iron fist and took no shit and was super successful, to the point that the Chinese government sent out an armada to stop her. She kicked their asses and captured 63 of their ships. They fought for two years and even brought in Dutch and British ships before they gave up and offered amnesty to her and her 17,000 crewmen. She got to keep ALL of her loot, spent her later years running a brothel/casino and lived to be 69.',
        points: 1
    },
    {
        id: 26,
        question: 'Qui a travaillé dans les services d’espionnages pendant la WW2 et a partiellement inspiré James Bond, a sorti un album de Heavy Metal à l’age de 88 ans, a joué le compte Dracula, et a survécu à un crash d’Avion ?',
        type: 'Menu',
        group: 3,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Sir Christopher Lee',
        points: 1
    },
    {
        id: 27,
        question: 'Qu’a inventé Nicolas Tesla ?',
        type: 'Menu',
        group: 3,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Achievements: Invented the alternating-current generator that provides light and electricity, the transformer through which it is sent, and even the high voltage coil used in television sets. Nikola was the ultimate mad scientist, meaning he was both slightly insane and terrifyingly smart. He held 700 patents at the time of his death yet he passed away penniless and in major debt. He once melted one of his assistants\' hands by overloading it with X-rays, like a badass. His experiments were risky and dangerous, if there was one man who could have single-handedly destroyed the planet, it\'s this guy. You crazy Nikola!',
        points: 1
    },
    {
        id: 28,
        question: 'Se dit de quelqu\'un qui est particulièrement virile, chargé de testostérone, ou pas d\'ailleurs, maintenant c\'est risqué d\'assumer quoique ce soit...',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'L\'homme - Stéphane',
        points: 3
    },
    {
        id: 29,
        question: 'Alors c\'est un plat d\'ici, très connu et hônnetement très bon, mais celui là est particulièrement chaud, il est même hot, c\'est plus de la bouffe à ce niveau là',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Poutine Sexuelle - Alexie',
        points: 3
    },
    {
        id: 30,
        question: 'C\'est pas mal inspiré d\'un sketch d\'humoristes français à propos d\'une campagne electorale je crois',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Simon Beauregard, souple et solide à la fois',
        points: 3
    },
    {
        id: 31,
        question: 'Alors elle on n\'arrivait jamais à se rappeler son prénom donc on sortait n\'importe quoi qui commençait par la même lettre.',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Cannelle, Clarence, C\'est quoi son nom déjà ? - Céline',
        points: 3
    },
    {
        id: 32,
        question: 'Alors celui là a eu pas mal de changement. C\'est partie de Frenchie, mais ça a mal fini. C\'est en deux mots',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Frank Chie - Mégane',
        points: 3
    },
    {
        id: 33,
        question: 'Tiré d\'une vidéo d\'un jeu vidéo sur les pirates, c\'est dit par quelqu\'un qui n\'aime pas les espagnols',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Mat Are U Spanish',
        points: 3
    },
    {
        id: 34,
        question: 'Lui il a carrément fallu changer le prénom, y en avait trop...',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Bob car y a déjà trop de Gui - Guillaume',
        points: 3
    },
    {
        id: 35,
        question: 'C\'est quelqu\'un qui anime particulièrement bien certains Quiz, tout le monde l\'aime',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'La grande frite - Guillaume',
        points: 3
    },
    {
        id: 36,
        question: 'Bon celui là c\'est soit une référence à une chanson, soit à une sitcom culte, en tout cas c\'est un membre super important de l\'équipe',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Gunter/Odélaf - La Cafetière',
        points: 3
    },
    {
        id: 8,
        question: 'Meh...',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'C\'était bon ?',
        points: 3
    }
  ]
}