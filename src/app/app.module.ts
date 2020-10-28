import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MypostsComponent } from './myposts/myposts.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { NgxEditorModule } from 'ngx-editor';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
let firebaseConfig = {
  apiKey: "AIzaSyDz_Ozt4PmAD_5NUobZXlPrnyayeaDXlJo",
  authDomain: "imparapolaroid.firebaseapp.com",
  databaseURL: "https://imparapolaroid.firebaseio.com",
  projectId: "imparapolaroid",
  storageBucket: "imparapolaroid.appspot.com",
  messagingSenderId: "683208791310",
  appId: "1:683208791310:web:5e8d03a48c92a755ebf35f",
  measurementId: "G-M72GKG2PR1"
};

firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MypostsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
