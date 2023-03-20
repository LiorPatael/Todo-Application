import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class basicAuthenticationService {
  static logout() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  authenticate(username:string, password:string){
    if(username==="liorpatael" && password==='dummy'){
      sessionStorage.setItem('authenticateUser',username);
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user= sessionStorage.getItem('authenticateUser')
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}
