import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string="angular";
  title = 'angularapp';

  status:boolean =false;
  gettime(){
    return 'morning';
  }
}
