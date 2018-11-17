import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyTargetComponent } from './components/my-target/my-target.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { IndProjectComponent } from './components/ind-project/ind-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    MyProfileComponent,
    MyTargetComponent,
    CreateProjectComponent,
    ListProjectsComponent,
    IndProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
