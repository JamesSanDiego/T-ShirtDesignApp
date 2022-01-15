import { Component, OnInit, Input } from '@angular/core'; //adding the Input function
import {Sandiegj} from '../myClasses/sandiegj'; //importing my class

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerInfo: Sandiegj; //headerInfo now shares information about Sandiegj

  constructor() { }

  ngOnInit(): void {
  }

}
