import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
username = 'liorpatael'
password = ''
errorMessage = "invalid Credenitals"
invalidLogin = false

constructor(private router: Router,private HardcodedAuthenticationService:HardcodedAuthenticationService,
  private BasicAuthenticationService:BasicAuthenticationService){
}
ngOnInit(): void {
  
}
handleLogin(){
 
  
  if(this.HardcodedAuthenticationService.authenticate(this.username,this.password)===true){
    //redicated to welcome page
    this.router.navigate(['welcome',this.username])
    this.invalidLogin = false
  }else{
    this.invalidLogin = true
  }
}

handleBasicAuthLogin(){

  
  this.BasicAuthenticationService.ececuteAuthenticationService(this.username,this.password).subscribe(
    data=>{
      console.log(data)
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    },
    error=> {
      console.log(error)
      this.invalidLogin = true
    }
  )
  

}

handleJWTAuthLogin(){

  
  this.BasicAuthenticationService.ececuteJWTAuthenticationService(this.username,this.password).subscribe(
    data=>{
      console.log(data)
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    },
    error=> {
      console.log(error)
      this.invalidLogin = true
    }
  )
  

}
}
