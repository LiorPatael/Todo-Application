import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

constructor(private router: Router,private HardcodedAuthenticationService:HardcodedAuthenticationService){
}
ngOnInit(): void {
  
}
handleLogin(){
  console.log("aaa");
  
  if(this.HardcodedAuthenticationService.authenticate(this.username,this.password)===true){
    //redicated to welcome page
    this.router.navigate(['welcome',this.username])
    this.invalidLogin = false
  }else{
    this.invalidLogin = true
  }
}
}
