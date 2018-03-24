import { Component, OnInit } from '@angular/core';
import {GithubService} from '../user/github.service';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user: any[];
  repos: any[];
  username:string;
  constructor(private githubService: GithubService) {
   }

   searchUser(){
     this.githubService.updateUser(this.username);
     this.githubService.getUserInfo().subscribe(user =>{
       console.log(user);
       this.user = user;
     });
     this.githubService.getUserRepos().subscribe(repos =>{
       console.log(repos);
       this.repos = repos;
     });
   }

  ngOnInit() {
  }

}
