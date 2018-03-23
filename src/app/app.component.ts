import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Details } from './details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName='';
  avatar_url='';
  details:Details;

  constructor(private http:Http){}

  searchUser(){
  	this.http.get('https://api.github.com/users/'+this.userName+ '?access_token=5cde94a9d7f6cb69965f644824a1e582cc9b3539').
  	subscribe(
  		(res:Response)=>{
  			const details= res.json();
  			console.log("details");
        this.details=details;
  		},
      // (err:HttpErrorResponse) => { if (err.error instanceof Error){
      //       console.log("Client-side Error occured");
      //     }
      //     else{console.log("An error has occured")
      //       }
      //     }
  		)
  }



}
