import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CurrentProjectsComponentComponent } from './current-projects-component/current-projects-component.component';
import { EducationComponentComponent } from './education-component/education-component.component';
import { TopNavComponentComponent } from './top-nav-component/top-nav-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CurrentProjectsComponentComponent,
    EducationComponentComponent,
    TopNavComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
