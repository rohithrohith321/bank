import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

data="your perfect banking partner"
data1="Enter your account number"

acno:any
psw:any

  userDetails:any={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0},
    1001:{username:"amal",acno:1001,password:"abc123",balance:0},
    1002:{username:"arun",acno:1002,password:"abc123",balance:0},
    1003:{username:"mega",acno:1003,password:"abc123",balance:0}


  }

  login(){
    var acnum=this.acno
    var psw=this.psw
    var userDetails=this.userDetails
    if(acnum in userDetails){
      if(psw==userDetails[acnum]["password"]){
        alert('login success')
      }
      else{
        alert('incorrect password')
      }
    }
    else{
      alert('incorrect acnum')
    }
  }

  // acnoChange(event:any){
  //     // console.log(event.target.value);
  //     this.acno=event.target.value
      
  // }

  // passChange(event:any){
  //   this.psw=event.target.value
  //   // console.log(event.target.value);
    
  // }
  // login(acnum:any,psw:any){

  //   var acnum=acnum.value
  //   var psw=psw.value
  //   var userDetails=this.userDetails
  //   if(acnum in userDetails){
  //     if(psw==userDetails[acnum]["password"]){
  //       alert('login success')
  //     }
  //     else{
  //       alert('incorrect password')
  //     }
  //   }
  //   else{
  //     alert('incorrect acnum')
  //   }
  // }



}
