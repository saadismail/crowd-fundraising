import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {RegisterComponent} from 'app/register/register.component';
import {AppComponent} from 'app/app.component';
import{HomeComponent} from 'app/home/home.component';
import {LoginComponent} from 'app/login/login.component';
import{AboutusComponent} from 'app/aboutus/aboutus.component';
import {VoteComponent} from 'app/vote/vote.component';
import{FundsSendComponent} from 'app/funds-send/funds-send.component';
const routes:Routes=[
  {path:'',component:AppComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent,},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'vote',component:VoteComponent},
  {path:'funds',component:FundsSendComponent}

]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})

export class AppRoutingModule { }
