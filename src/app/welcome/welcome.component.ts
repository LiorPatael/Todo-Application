import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/service/data/welcome-data.service';
import { LoginComponent } from '../login/login.component';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message ='Some welcome messege'
  welcomeMessageFromService :string =''
  name = ''

  constructor(private route:ActivatedRoute,private service:WelcomeDataService){

  }
  ngOnInit(): void {
    console.log(this.message)
   this.name=this.route.snapshot.params['name']
   
   
  }
  getWelcomeMessage(){ 
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response)
    );

    console.log('last line of getWelcomeMessage ');
    

    }

    getWelcomeMessageWithParameter(){
      console.log(this.service.executeHelloWorldBeanService());
      this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
        response=>this.handleSuccessfulResponse(response)
      );
  
      console.log('last line of getWelcomeMessage ');
      
  
      }
  handleSuccessfulResponse(response:any){
  this.welcomeMessageFromService = response.message
    console.log(response);
    console.log(response.message);
    
      
    
  }

}
