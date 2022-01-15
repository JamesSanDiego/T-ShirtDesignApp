import { Component, OnInit, Input } from '@angular/core'; //Importing Input as well
import {Sandiegj} from '../myClasses/sandiegj'; //Importing my class

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footerInfo: Sandiegj; //footerInfo now holds information about Sandiegj class
  cdate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
