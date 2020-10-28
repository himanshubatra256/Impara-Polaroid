import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {
  user: any = {};
  user1:any ={};
  posts: any[] = [];
 
  constructor() {
    this.user = firebase.auth().currentUser;
    

    this.getPosts();
    this.photo(this.user.uid);
   }

  ngOnInit(): void {
  }

  getPosts(){
    // get the list of posts

    firebase.firestore().collection("posts")
    .orderBy("created", "desc")
    .get().then((querySnapshot) => {

      console.log(querySnapshot.docs);
      this.posts = querySnapshot.docs;

    }).catch((err) => {
      console.log(err);
    })

  }

  onPostCreated(){
    // refresh the list of posts
    this.posts = [];
    this.getPosts();

  }

  onDelete(){
    // refresh the list of posts
    this.posts = [];
    this.getPosts();
  }
  photo(uid:string){
    firebase.firestore().collection("users").doc(uid).get().then((documentSnapshot) => {

      this.user1 = documentSnapshot.data();
      

    }).catch((error) => {
      console.log(error);
    })
  }

}
