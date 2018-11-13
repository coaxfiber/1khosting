import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { GlobalService } from './global.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  routerlink = "login";
	public data:any
  constructor(private global: GlobalService,private router: Router){
  	if (this.global.getSession()==null) {
	  	this.router.navigate(['login']);
  	}
  }

  logout(){
  	this.global.logout();
  }
}
