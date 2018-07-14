import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from '../models/models';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss']
})
export class HistoryCardComponent implements OnInit {
  @Input()
  Model: CardModel;
  
  constructor() { }

  ngOnInit() {
  }

}
