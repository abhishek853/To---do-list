import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrl: './propertybinding.component.css'
})
export class PropertybindingComponent {
  style1="15px";
  manyclasses={
    class1 : true,
    class2 : true,
    class3 : true
  }
  manystyle ={
    'background-color' : 'blue', 'font - size': '18px','border':'5px solid red'
  }
}
