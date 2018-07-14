import { Component, OnInit } from '@angular/core';
import { FlamelinkService } from '../services/flamelink.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plain-page',
  templateUrl: './plain-page.component.html',
  styleUrls: ['./plain-page.component.scss']
})
export class PlainPageComponent implements OnInit {

  heading: string;
  content: string;
  cssClass: string;

  constructor(protected flamelink: FlamelinkService, protected router: Router) {
      flamelink.getPlainPage(router.url).then(page => {
        this.heading = page.heading;
        this.content = page.content;
        this.cssClass = page.cssClass;
      });
   }

  ngOnInit() {
  }

}
