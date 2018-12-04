import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {RegisterComponent} from 'app/register/register.component';
import {AppComponent} from 'app/app.component';
import{HomeComponent} from 'app/home/home.component';
import {LoginComponent} from 'app/login/login.component';
const routes:Routes=[
  {path:'',component:AppComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent,},
  {path:'login',component:LoginComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})

export class AppRoutingModule { }
