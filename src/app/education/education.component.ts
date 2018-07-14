import { Component, OnInit } from '@angular/core';
import { CardModel } from '../models/models';
import { FlamelinkService } from '../services/flamelink.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  host: {class: 'component-wrapper'}
})
export class EducationComponent implements OnInit {
  educationCardModels: CardModel[] = []
  constructor(protected flamelink: FlamelinkService) {
    flamelink.getEducationCards().then(cards => this.educationCardModels = cards)
  }

  ngOnInit() {
  }

}
