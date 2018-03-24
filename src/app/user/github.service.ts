import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
  private clientid='537865c510c4d1068497';
  private clientsecret='1210045d76ea04fec81298f7484351b1afda89ff';
  constructor(private http:Http) {
    console.log("service working");
    this.username = "alchemy17";
   }
   getUserInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res => res.json());
   }

   getUserRepos(){
     return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res => res.json());
   }
   updateUser(username:string){
     this.username = username;
   }
   }
