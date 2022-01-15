import { Component } from '@angular/core';
import {Sandiegj} from './myClasses/sandiegj'; //Importing my class

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A3sandiegj';

  /*Populating my Class */
  bio: Sandiegj ={
    fname: "James Matthew",
    lname: "San Diego",
    studentnum: 991585093,
    username: "sandiegj",
    homecountry: "Canada",
    currentcity: "Oakville",
    pic: "./assets/images/ok.jpg"
  }
}
