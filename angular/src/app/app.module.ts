import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyTargetComponent } from './components/my-target/my-target.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { IndProjectComponent } from './components/ind-project/ind-project.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'profile', component: MyProfileComponent, canActivate:[AuthGuard] },
  { path: 'target', component: MyTargetComponent, canActivate:[AuthGuard] },
  { path: 'create-project', component: CreateProjectComponent, canActivate:[AuthGuard] },
  { path: 'projects', component: ListProjectsComponent},
  { path: 'project/:id', component: IndProjectComponent},
  { path: 'categories', component: ListCategoriesComponent},
  { path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    MyProfileComponent,
    MyTargetComponent,
    CreateProjectComponent,
    ListProjectsComponent,
    IndProjectComponent,
    HeaderComponent,
    FooterComponent,
    ListCategoriesComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
