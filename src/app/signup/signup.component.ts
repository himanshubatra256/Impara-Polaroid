import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl , Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { validate, checkPropertyChange } from '../../../node_modules/@types/json-schema';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
myForm: FormGroup;
message:string="";
userError:any;
  constructor( public fb: FormBuilder, public auths: AuthService, public router:Router) {
    this.myForm = this.fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(8)]],
      cpassword: ['',Validators.required]
  },{
    Validators:this.check("password", "cpassword")
  })
   }
   check(pkey:string,spkey:string){
    return((group:FormGroup)=>{
      let password =group.controls['pkey'];
      let cpassword =group.controls['cpkey'];
      if(password==cpassword)
      {
        return;
      }
      else{
        cpassword.setErrors({
          PasswordsNotSame:true,
        });
      }
    })
  }
  ngOnInit(): void {
  }
  onSubmit(myForm){
    
    let firstname: string = myForm.value.firstname;
    let lastname: string = myForm.value.lastname;
    let email: string = myForm.value.email;
    let password: string = myForm.value.password;
   this.auths.signup(email,password,firstname,lastname).then((user: any) => {

    firebase.firestore().collection("users").doc(user.uid).set({
      firstname: myForm.value.firstname,
      lastname: myForm.value.lastname,
      email: myForm.value.email,
      photoURL: user.photoURL,
      interests: "",
      bio: "",
      hobbies: ""
    }).then(() => {
      this.message = "You have been signed up successfully.";
      this.userError = null;
      this.router.navigate(['/myposts'])
    })
    
  
  }).catch((error)=>{console.log(error);
    this.userError=error;})
  }
}
