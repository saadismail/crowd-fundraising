import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule }     from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import{ProjService} from './proj.service';
import {AuthService} from './auth.service';
import { VoteComponent } from './vote/vote.component';
import { FundsSendComponent } from './funds-send/funds-send.component';
import { CategoriesComponent } from './categories/categories.component';
import {UserService} from './user.service';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    AboutusComponent,
    VoteComponent,
    FundsSendComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProjService,AuthService,UserService],
  bootstrap: [AppComponent,RegisterComponent,HomeComponent]
})
export class AppModule { }
