import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Question[] = [
    {
        id: 1,
        question: 'Quelle est la première lettre de l\'alphabet ?',
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
        id: 2,
        question: 'Quelle est la dernière lettre de l\'alphabet ?',
        type: 'Nugget',
        speed: false,
        corrected: false,

        proposition1: 'W',
        proposition2: 'X',
        proposition3: 'Y',
        proposition4: 'Z',

        answer: 'Z',
        points: 1
    },
    {
        id: 3,
        question: 'Sel',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Sel',
        proposition2: 'Poivre',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Sel',
        points: 1
    },
    {
        id: 4,
        question: 'Poivre',
        type: 'SelOuPoivre',
        speed: true,
        corrected: false,

        proposition1: 'Sel',
        proposition2: 'Poivre',
        proposition3: 'Les deux',
        proposition4: '',

        answer: 'Poivre',
        points: 1
    },
    {
        id: 5,
        question: 'Quel est mon nom ?',
        type: 'Menu',
        group: 1,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Dubois',
        points: 1
    },
    {
        id: 6,
        question: 'Quel est mon prénom ?',
        type: 'Menu',
        group: 2,
        speed: false,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Guillaume',
        points: 1
    },
    {
        id: 7,
        question: 'Parce que !',
        type: 'Addition',
        speed: true,
        corrected: false,

        proposition1: '',
        proposition2: '',
        proposition3: '',
        proposition4: '',

        answer: 'Pourquoi ?',
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