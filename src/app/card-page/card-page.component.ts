import { Component, OnInit } from '@angular/core';
import { FlamelinkService } from '../services/flamelink.service';
import { CardModel } from '../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
  host: {class: 'component-wrapper'}
})
export class CardPageComponent implements OnInit {
  header: string = "";
  cardModels: CardModel[] = [];

  constructor(protected flamelink: FlamelinkService, protected router: Router) {
    flamelink.getCardPage(router.url).then(page => {
      this.header = page.header;
      this.cardModels = page.cards;
    })
  }

  ngOnInit() {
  }

}
