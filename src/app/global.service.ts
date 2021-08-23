import {Inject,  Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {Headers, RequestOptions} from '@angular/http';


import {SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
const swal = Swal;
@Injectable()
export class GlobalService {
	token: any;
  userdata:any;
	api = "http://eltonbagne.info/hosting/";
	header = new Headers();
	option:any;
  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,private router: Router) { 	
    if(this.storage.get('token')!=null){
      this.requestToken(this.storage.get('token'))
    }
  }

  requestToken(toks){
  	this.token = toks;
    this.header.append("Content-Type", "application/json");
  	this.header.append("Authorization","Bearer " + this.token);
  	this.option = new RequestOptions({ headers: this.header });
  }

  swalAlert(title,text,type)
  {
  	swal(
          title,
           text,
           type
          )
  }

  swalLoading(val){
     swal({
       title: val,allowOutsideClick: false,
      });
    swal.showLoading();
  }
  swalClose(){
    swal.close();
  }


  swalAlertError()
  {
   swal('Oops...', 'Something went wrong!', 'error');
  }

  setSession(val){
    this.storage.set('token',val);
  }

  getSession(){
    return this.storage.get('token');
  }

  removeSession(){
    this.storage.remove('token');
  }
  
  logout(){
    let timerInterval
    swal({
        allowOutsideClick: false,
        title: 'Auto close alert!',
        html: 'You will be Logged out from the system.',
        timer: 2000,
        onOpen: () => {
          swal.showLoading()
          timerInterval = setInterval(() => {
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.timer
        ) {
          this.storage.remove('token');
          window.location.reload();
        }
      })
  }
}
