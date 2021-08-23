import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../global.service';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  property:any=[{"message":"failed","id":"1","domain":"eltonbagne.info","ftphost":"ftp.eltonbagne.info","ftpuname":"eltonbagne","ftppword":"eltonbagne","ftpport":"21","dblink":"database.eltonbagne.info","dbname":"aaaaaaa_eltonbagne","dbuser":"aaaaaaa_eltonbagne","dbpword":"@123","dbhost":"localhost","email":"eltonbagne@gmail.com","userid":"1","expires":"2018-11-14"}];
  property2:any=[];
  constructor(private http: Http,private global: GlobalService) {
  	this.global.swalLoading('Loading Info');
    this.http.get(this.global.api+'api.php?email='+this.global.userdata.email,this.global.option)
                              .map(response => response.json())
                              .subscribe(res => {
                                if (res[0].message=="failed") {
                                  this.global.swalAlert("No subscription available","Please Contact me if you want to avail the 1khosting promo at <a href=\'https://facebook.com/coaxfiber\' target=\'+blank\'>https://facebook.com/coaxfiber</a>",'warning');
                                }else{
                                 this.global.swalClose();
                                 this.property = res;
                                 this.http.get(this.global.api+'api2.php?email='+this.global.userdata.email,this.global.option)
                                      .map(response => response.json())
                                      .subscribe(ress => {
                                         this.property2 = ress;
                                      },Error=>{
                                        this.global.swalAlertError();
                                      });
                               }
                              },Error=>{
                                //console.log(Error);
                                this.global.swalAlertError();
                              });
  	
   }
   database(prop){
     this.global.swalAlert('Database Info','<p style=\'text-align:left;\'><b>Database link:</b> '+ prop.dblink +'<br><b>Host Name:</b> '+ prop.dbhost +'<br><b>Database Name: </b> '+ prop.dbname +'<br><b>Username:</b> '+ prop.user +'<br><b>Password:</b> '+ prop.dbpword +'','question')
   }
   ftp(prop){
     this.global.swalAlert('FTP Info','<p style=\'text-align:left;\'><b>Host Name:</b> '+ prop.ftphost +'<br><b>Port Number:</b> '+ prop.ftpport +'<br><b>Username:</b> '+ prop.ftpuname +'<br><b>Password:</b> '+ prop.ftppword +'','question')
   }

  ngOnInit() {
  }

}
