import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { HistoryCardComponent } from './history-card/history-card.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'education', component: EducationComponent},
  { path: 'projects', component: CurrentProjectsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    CurrentProjectsComponent,
    HistoryCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
