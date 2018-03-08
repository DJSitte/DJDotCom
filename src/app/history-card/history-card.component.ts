import { Component, OnInit, Input } from '@angular/core';
import { HistoryModel } from '../models/models';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss']
})
export class HistoryCardComponent implements OnInit {
  @Input()
  Model: HistoryModel;
  
  constructor() { }

  ngOnInit() {
  }

}
