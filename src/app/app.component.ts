import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( 
    private platform: Platform,
    private router: Router
  ) {

    this.initialLizeApp();
  }
 
  initialLizeApp(){
    this.platform.ready().then(()=>{

      this.router.navigateByUrl('splash');
    })
  }

}
