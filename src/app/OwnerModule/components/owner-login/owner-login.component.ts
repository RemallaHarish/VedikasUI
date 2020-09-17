import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/OwnerModule/services/localstorage.service';


@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.css']
})
export class OwnerLoginComponent implements OnInit {

  loadedPosts = [];


  LoginForm: FormGroup;
  LoginDetails: any;
  mobileNumber: string;
  // addmobileNumber: loginmodel;
  // OwnerSecurity;


  constructor(private router: Router,
    private http: HttpClient,
  //  private LoginSer: LoginService,
    private _fb: FormBuilder,
    private localstorageservice: LocalStorageService) { }

    

  ngOnInit(): void {
    // this.LoginDetails = JSON.parse(window.localStorage.getItem('LoginDetails'));
    this.LoginForm = this._fb.group({
     mobileNumber: new FormControl(this.mobileNumber ? this.LoginDetails.mobileNumber : '', Validators.required),
     OTP: new FormControl(this.LoginDetails ? this.LoginDetails.OTP : '', Validators.required),
    })
  }
  login(){
    this.router.navigateByUrl("/header")
  }
  

  sendOtp(postData:{mobileNumber: number;}) {
    console.log(postData)
    this.http.post(
      'http://localhost:8057/api/login/verification?mobileNumber=+91'+postData.mobileNumber,postData
    )
    .subscribe(ResponseData =>{
      console.log(ResponseData);
    });
 }

}

