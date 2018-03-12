import { Component, OnInit } from '@angular/core';
import { HistoryModel } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {class: 'component-wrapper'}
})

export class HomeComponent implements OnInit {
  HistoryModels: HistoryModel[] = [
    new HistoryModel("/assets/img/MSOE.png", "Milwaukee School of Engineer", "B.S. Software Engineering, 2017", "Milwaukee, WI", ""),
    new HistoryModel("/assets/img/Gibraltar.jpg", "Gibraltar Schools", "Class of 2013", "Fish Creek, WI", "Gibraltar Area Schools is a school district headquartered in Fish Creek, an unincorporated area in the town of Gibraltar, Wisconsin. It has two schools: Gibraltar Elementary School (PK-6) and Gibraltar Secondary School (7-12). It serves communities in northern Door County, including Fish Creek, Baileys Harbor, Ephraim, Egg Harbor, Ellison Bay, Gills Rock, and Sister Bay. As of 2014 about 578 students attend schools in this district.")
  ]

  constructor() { }

  ngOnInit() {
  }

}
