import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logotipos';

  constructor(
    private router:Router,

    ) { }

  instag(){
    this.router.navigate(['/index'])
  }
}
