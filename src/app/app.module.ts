import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { provideRouter, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UsersComponent } from './admin/users/users.component';
import { UserDetailsComponent } from './admin/users/user-details/user-details.component';
import { StudentsComponent } from './admin/students/students.component';
import { StudentDetailsComponent } from './admin/students/student-details/student-details.component';
import { StudentProfileComponent } from './admin/students/student-profile/student-profile.component';
import { UserProfileComponent } from './admin/users/user-profile/user-profile.component';
import { TranslocoRootModule } from './transloco-root.module';
import { ChildComponent } from './examples/child/child.component';
import { ParentComponent } from './examples/parent/parent.component';
import { IdemDetailComponent } from './examples/idem-detail/idem-detail.component';
import { ItemOutputComponent } from './examples/item-output/item-output.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UsersComponent,
    UserDetailsComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StudentProfileComponent,
    UserProfileComponent,
    ChildComponent,
    ParentComponent,
    IdemDetailComponent,
    ItemOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterLink,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [
    provideAnimationsAsync(), 
    provideHttpClient()
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


  
 }
