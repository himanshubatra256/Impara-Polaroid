import { Injectable } from '@angular/core';
import 'firebase/auth';
import * as firebase from 'firebase/app';
import { resolve } from 'url';
import { reject } from '../../node_modules/@types/q';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(email:string, password:string){
    return firebase.auth().signInWithEmailAndPassword(email,password);
  }
  signup(email:string,password: string, firstname:string , lastname: string  ){
    let n: number;
    let randomNumber = Math.floor(Math.random() * 1000);
    
    return new Promise((resolve,reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>{
        console.log(response);
       response.user.updateProfile({
         
         displayName:firstname+" "+lastname,
         photoURL: "https://picsum.photos/300/300.jpg?"+ randomNumber
               }).then(()=>{resolve(response.user)}).catch((error)=>{
         reject();
       })
      }).catch((error)=>{
        reject();
      })
    })
  }
}
