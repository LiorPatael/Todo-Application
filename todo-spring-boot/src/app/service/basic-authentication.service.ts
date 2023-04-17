import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticateUser'
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  static logout() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  
  ececuteAuthenticationService(username:string, password:string) {
    
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers  = new HttpHeaders({
      Authoriztion : basicAuthHeaderString
    })


    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,{headers}).pipe(
      map(
        data=>{
          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem('token',basicAuthHeaderString);
          return data;
        }
      )
    );
   
 }

 ececuteJWTAuthenticationService(username:string, password:string) {
    
 


  return this.http.post<any>(`http://localhost:8080/authenticate`,{username,password}).pipe(
    map(
      data=>{
        sessionStorage.setItem(AUTHENTICATED_USER,username);
        sessionStorage.setItem('token','Bearer ${data.token}');
        return data;
      }
    )
  );
 
}



  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
    
  }
  getAuthenticatedToken(){
   if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token')
    return null
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem('token')
  }
}

export class AuthenticationBean{
  constructor(public messgae:string){}
}
