import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../global.service';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
property:any=[{"message":"failed","id":"1","domain":"eltonbagne.info","ftphost":"ftp.eltonbagne.info","ftpuname":"eltonbagne","ftppword":"eltonbagne","ftpport":"21","dblink":"database.eltonbagne.info","dbname":"aaaaaaa_eltonbagne","dbuser":"aaaaaaa_eltonbagne","dbpword":"@123","dbhost":"localhost","email":"eltonbagne@gmail.com","userid":"1","expires":"2018-11-14"}];
property2:any=[];
  constructor(private http: Http,private global: GlobalService) {
    console.log(this.global.userdata);
  	this.global.swalLoading('Loading Info');
    this.http.get(this.global.api+'api.php?email='+this.global.userdata.email,this.global.option)
                              .map(response => response.json())
                              .subscribe(res => {
                                if (res[0].message=="failed") {
                                  this.global.swalAlert("No subscription available","Please Contact me if you want to avail the 1khosting promo at <a href=\'https://facebook.com/coaxfiber\' target=\'+blank\'>https://facebook.com/coaxfiber</a>",'warning');
                                }else{
                                 this.property = res;
                                  this.http.get(this.global.api+'api2.php?email='+this.global.userdata.email,this.global.option)
                                    .map(response => response.json())
                                    .subscribe(res2 => {
                                       this.global.swalClose();
                                       this.property2 = res2;
                                    },Error=>{
                                      //console.log(Error);
                                      this.global.swalAlertError();
                                      console.log(Error)
                                    });
                               }
                              },Error=>{
                                //console.log(Error);
                                this.global.swalAlertError();
                                console.log(Error)
                              });
  	
   }

  ngOnInit() {
  }

}
