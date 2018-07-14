import { Component } from '@angular/core';
import { RoutingService } from './services/routing.service';
import { Router } from '@angular/router';
import { FlamelinkService } from './services/flamelink.service';
import { TopNavModel } from './models/topnav.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  topNav: TopNavModel;
  constructor(routing: RoutingService, router: Router, flamelink: FlamelinkService){
    for(var route of routing.getRoutes()){
      router.config.unshift(route);
    }
    flamelink.getTopNav().then(topNav => this.topNav = topNav);
  }
}
