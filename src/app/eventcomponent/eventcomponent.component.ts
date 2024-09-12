import { Component } from '@angular/core';

@Component({
  selector: 'app-eventcomponent',
  templateUrl: './eventcomponent.component.html',
  styleUrl: './eventcomponent.component.css'
})
export class EventcomponentComponent {
 number : any  = 0;
 ngOnInit(){
  
 }
 
  clickme()
{
 this.number=this.number +1;
}
getvalue(myvalue: any){
  console.log(myvalue.target.value);

}
}
