import { Component, OnInit } from '@angular/core';
import 'firebase/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loggedin: boolean =false;
  user: any;
  constructor() { 
    this.user=firebase.auth().currentUser;
    if(this.user){
      this.loggedin=true;
    }
    else{
      this.loggedin=false;
    }
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    this.loggedin=true;
  }
  else{
    this.loggedin=false;
  }
});
  }

  ngOnInit(): void {
  }
logout(){
  firebase.auth().signOut();
}
}
