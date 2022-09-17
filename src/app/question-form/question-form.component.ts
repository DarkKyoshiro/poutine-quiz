import { Component, OnInit } from '@angular/core';
import { Nugget } from '../models/nuggets.module';
import { SelOuPoivre } from '../models/seloupoivre.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  confirm: boolean = false;
  sent: boolean = false;
  nuggets: Nugget[] = [];
  selOuPoivres: SelOuPoivre[] = [];
  menus: SelOuPoivre[] = [];
  additions: SelOuPoivre[] = [];
  name: string = '';
  email: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  customTrackBy(index: any, item: any) {
    return index
  }

  //-----------------------------------------------------------------------------------------------
  //---------------------------- Question management ----------------------------------------------
  //-----------------------------------------------------------------------------------------------
  //Question addition -----------------------------------------------------------------------------
  onAdd(type: string): void {
    switch(type) {
      case 'nugget': {
        this.nuggets.push({
          question: '',
    
          propositions: [''],
    
          reponse: '',
          comment: ''
        })
        break;
      }

      case 'seloupoivre': {
        this.selOuPoivres.push({
          theme: '',
  
          propositions: [{
            question: '',
            reponse: '',
            comment: ''
          }]
        })
        break;
      }

      case 'menu': {
        this.menus.push({
          theme: '',
  
          propositions: [{
            question: '',
            reponse: '',
            comment: ''
          }]
        })
        break;
      }

      case 'addition': {
        this.additions.push({
          theme: '',
  
          propositions: [{
            question: '',
            reponse: '',
            comment: ''
          }]
        })
        break;
      }
    }
  }

  //Question deletion -----------------------------------------------------------------------------
  onDelete(type: string, i: number): void {
    switch(type) {
      case 'nugget': {
        this.nuggets.splice(i, 1)
        break;
      }

      case 'seloupoivre': {
        this.selOuPoivres.splice(i, 1)
        break;
      }

      case 'menu': {
        this.menus.splice(i, 1)
        break;
      }

      case 'addition': {
        this.additions.splice(i, 1)
        break;
      }
    }
  }

  //Nugget proposition management -----------------------------------------------------------------
  onChangeNuggetsProposition(i: number, j: number): void {
    if(this.nuggets[i].propositions[j] !== '' && j+1 === this.nuggets[i].propositions.length) {
      this.nuggets[i].propositions.push('')
    } else if(this.nuggets[i].propositions[j] === '') {
      this.nuggets[i].propositions.splice(j, 1)
    }
  }

  //Sel ou Poivre, Menu and Addition question management ------------------------------------------
  onChangeListProposition(i: number, j: number, list: SelOuPoivre[]): void {
    if((list[i].propositions[j].question !== '' || list[i].propositions[j].reponse !== '' || list[i].propositions[j].comment !== '') && j+1 === list[i].propositions.length) {
      list[i].propositions.push({
        question: '',
        reponse: '',
        comment: ''
      })
    } else if(list[i].propositions[j].question === '' && list[i].propositions[j].reponse === '' && list[i].propositions[j].comment === '') {
      list[i].propositions.splice(j, 1)
    }
  }

  //-----------------------------------------------------------------------------------------------
  //---------------------------- Answers management -----------------------------------------------
  //-----------------------------------------------------------------------------------------------
  //To send answers (before confirmation) ---------------------------------------------------------
  onSend(): void {
    if(this.confirm) {
      this.confirm = false
    } else {
      this.confirm = true
    }
  }
 
}
