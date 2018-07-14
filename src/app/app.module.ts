import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { HistoryCardComponent } from './history-card/history-card.component';

import { FlamelinkService } from './services/flamelink.service';
import { CardPageComponent } from './card-page/card-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingService } from './services/routing.service';

import { routes } from './routes';
import { initalizeRoutes } from './routeInitializer';
import { PlainPageComponent } from './plain-page/plain-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    CurrentProjectsComponent,
    HistoryCardComponent,
    CardPageComponent,
    PageNotFoundComponent,
    PlainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
  ],
  providers: [
    FlamelinkService,
    RoutingService,
    {
      provide: APP_INITIALIZER, 
      useFactory: initalizeRoutes, 
      deps: [RoutingService], 
      multi: true
    }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [
    CardPageComponent,
    PlainPageComponent
  ]
})
export class AppModule { }
