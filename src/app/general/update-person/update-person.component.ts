import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { GlobalService } from './../../global.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.scss']
})
export class UpdatePersonComponent implements OnInit {

  value = '';
  options: FormGroup;

  constructor(fb: FormBuilder,private global: GlobalService,private http: Http) {
  	 this.options = fb.group({
      idno: '',
      lrno: '',
      fname: '',
      mname: '',
      lname: '',
      suffix: '',
      gender: '',
      cstatus: '',
      bdate: '',
    });
  }

clear(){
  this.options.value.idno = '';
  this.options.value.lrno = '';
  this.options.value.fname = '';
  this.options.value.mname = '';
  this.options.value.lname = '';
  this.options.value.suffix = '';
  this.options.value.gender = '';
  this.options.value.cstatus = '';
  this.options.value.bdate = '';
}

onSubmit(){
  var error = '';
  if (this.options.value.lrno=='') {
    error = error + '*LR number must not be blank<br>';
  }
  if (this.options.value.fname=='') {
    error = error + '*First name must not be blank<br>';
  }
  if (this.options.value.lname=='') {
    error = error + '*Last name must not be blank<br>';
  }
  if (this.options.value.gender=='') {
    error = error + '*Gender must not be blank<br>';
  }
  if (this.options.value.cstatus=='') {
    error = error + '*Civil Status must not be blank<br>';
  }
  if (this.options.value.bdate=='') {
    error = error + '*Birth date must not be blank<br>';
  }

  if (error == '') {
    this.global.swalLoading('Registering Person');
    this.http.post(this.global.api+'Person' ,{
      'lrNumber':this.options.value.lrno,
      'firstName':this.options.value.fname,
      'middleName':this.options.value.mname,
      'lastName':this.options.value.lname,
      'suffixName':this.options.value.suffix,
      'gender':this.options.value.gender,
      'civilStatus':this.options.value.cstatus,
      'dateOfBirth':this.options.value.bdate,
    },this.global.option)
                              .map(response => response.json())
                              .subscribe(res => {
                                console.log(res)
                                this.global.swalAlert(res.message,"ID Number: <b>"+res.data[0].idnumber+"</b>",'success');
                                this.global.swalAlert
                              },Error=>{
                                //console.log(Error);
                                console.log(Error)
                              });
  }else
  {
    this.global.swalAlert('The Following error has Occured',error,'error');
  }

  console.log('test');
}
  ngOnInit() {
  }

}
