import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
     private http:HttpClient
  ) { }

  executeHelloWorldBeanService() {
     return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    
  }
  executeHelloWorldServiceWithPathVariable(name:string) {

    let basicAuthHeaderString = this.creatBasicAuthenticationHttpHeader();

    let headers  = new HttpHeaders({
      Authoriztion : basicAuthHeaderString
    })


    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,{headers});
   
 }

 creatBasicAuthenticationHttpHeader(){
  let username = 'liorpatael'
  let password = 'dummy'
  let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  return basicAuthHeaderString;
 }
}
