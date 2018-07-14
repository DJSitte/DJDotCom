import { Component, OnInit } from '@angular/core';
import { FlamelinkService } from '../services/flamelink.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {class: 'component-wrapper'}
})

export class HomeComponent implements OnInit {
  body: string = "";
  header: string = "";
  
  constructor(protected flamelink: FlamelinkService) {
    flamelink.getHomePage().then(hp => {
      this.body = hp.body;
      this.header = hp.header;
    });
  }

  ngOnInit() {
  }

}
