import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import{GithubService } from './user/github.service';
// import { Bootstrap } from '@angular/core'


import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [HttpModule, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
