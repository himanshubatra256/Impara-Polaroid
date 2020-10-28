import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myform: FormGroup;
message:string="";
userError:any;
  constructor(public fb:FormBuilder, public auths: AuthService , public router:Router) {
this.myform= this.fb.group({
email: ['',[Validators.required,Validators.email]],
password: ['',[Validators.required,Validators.minLength(8)]]
})
   }
onSubmit(myform){
  let email:string = myform.value.email;
  let password: string =myform.value.password;
this.auths.login(email,password).then((response)=>{
  this.message="Sucessfully Logged in";
  this.router.navigate(['/myposts']);
}).catch((error)=>{
  console.log(error);
  this.userError=error;
})

}
  ngOnInit(): void {
  }

}
