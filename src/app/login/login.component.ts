import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../global.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import { HostListener } from '@angular/core';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular-6-social-login';
const swal = Swal;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	username:any=undefined;
	password:any;
  key = 1
header = new Headers();

myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;

  constructor(private http: Http, private global: GlobalService,private router: Router,private socialAuthService: AuthService) { 
       
  }

public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
   
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.global.userdata = userData;
        this.router.navigate(['../main']);
        // ...
            
      }
    );
  }

@HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
     if (event.key=='Enter' && !(swal.isVisible())) {
      this.login()
      }
  }

  login2(){this.router.navigate(['../main']);}

  login(){
    if (this.username == undefined || this.username ==  ''  || this.password == undefined  || this.password ==  '') {
      swal(
          '',
           'Username and Password are Required!',
           'info'
          )
    }
    else{
      var header = new Headers();
                header.append("Content-Type", "application/json");
      let option = new RequestOptions({ headers: header });
      if (this.username==undefined) {
        this.username = "";
      } if (this.password==undefined) {
        this.password = "";
      }
      swal({
       title: 'Logging In...',allowOutsideClick: false,
      });
      swal.showLoading();
    		this.http.post(this.global.api+'Auth/login' ,{'userName':this.username,'password':this.password,'appUserName':'uslerp','appPassword':'SecretAppPass'},option)
                              .map(response => response.json())
                              .subscribe(res => {
                                swal.close();       
                                if (res.token==undefined) {
                                  swal(
                                      "Invalid Credentials!",
                                      'Username or Password is incorrect',
                                      'info'
                                    )

                                  // code...
                                }else
                                {
                                  this.global.requestToken(res.token);
                                  this.global.setSession(res.token);
                                  this.router.navigate(['../main']);
                                }
                              },Error=>{
                                //console.log(Error);
                                 swal('Oops...', 'Something went wrong!', 'error');
                              });
    }
  }
  ngOnInit() {
    this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
 
    this.myParams = {
            particles: {
                number: {
                    value: 30,
                },
                color: {
                    value: '#fff'
                },
                shape: {
                    type: 'triangle',
                },
        }
    };
  }

}
