import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ErrorComponent } from '../error.component';
import { PasswordComponent } from '../forgotpassword.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string ="";
  loading  =  false;

  re  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  passw=  /^[A-Za-z]\w{8,15}$/;

  passRegEx= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //public errorDialogRef: MatDialogRef<ErrorComponent>;

  constructor(private dialog: MatDialog,private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.loading =true;
   
    setTimeout(() => {
      this.loading =false;
      if(this.username === "pmc" && this.password === "pmc123")
      {
        this.dialog.open(ErrorComponent,{  data: {
          message: "Thanks for login to a blank app!"
        }});
        this.router.navigate(['customer-list']);
  
      } else if(this.username==="" || this.password ==="")
      {
        
        this.dialog.open(ErrorComponent,{  data: {
          message: "Email ID or Password is blank!"
        }});
      }else if(!this.re.test(this.username)){
        this.dialog.open(ErrorComponent,{  data: {
          message: "Invalid Email ID !"
        }});
  
      }else if(this.username.includes("mailinator.com")){
        this.dialog.open(ErrorComponent,{  data: {
          message: "Invalid Email ID as its from mailinator.com !"
        }});
  
      }else if(!this.passRegEx.test(this.password)){
        this.dialog.open(ErrorComponent,{  data: {
          message: "Invalid Password- check password policy!"
        }});
  
      }else
      {
          this.dialog.open(ErrorComponent,{  data: {
          message: "Your login information are incorrect!"
        }});
      }
    }, 2000);
    
  }



 ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
return true;
}
else
{
return false;
}
}


  forgotPassword(){

this.dialog.open(PasswordComponent,{  data: {
  message: "Reset your password!"
}});
  }
}

