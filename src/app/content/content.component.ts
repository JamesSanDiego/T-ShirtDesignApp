import { Component, OnInit, Input } from '@angular/core'; //Adding the input function
import {Sandiegj} from '../myClasses/sandiegj'; //Importing my class

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  mycity:string = "Oakville"; //Variable that holds my default city

  @Input() contentInfo: Sandiegj; //Sandiegj shared information with contentInfo

  /* Below are my click event functions*/
  clickSmall(){
    var changeSmall = document.getElementById("outputsection");
    changeSmall.style.width = "85px";
  }

  clickMedium(){
    var changeMedium = document.getElementById("outputsection");
    changeMedium.style.width = "175px";
  }

  clickLarge(){
    var changeLarge = document.getElementById("outputsection");
    changeLarge.style.width = "312px";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
