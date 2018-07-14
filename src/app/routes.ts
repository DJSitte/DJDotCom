import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export var routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent}
]
