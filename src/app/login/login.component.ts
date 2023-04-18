import { Component,OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators}from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm:FormGroup=new FormGroup(
    {
      'email':new FormControl( null,[Validators.required,Validators.email]),
      'password':new FormControl( null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)])

  })
supmitLoginForm () {
  if(this.loginForm.invalid){
    return;
  }
  else{
    this._AuthService.login(this.loginForm.value).subscribe(
     (response)=>{
      if(response.message == 'success'){
        this._Router.navigateByUrl('/home')
     }
     else{

     }
    }
 );

}
 
}





constructor(private _Router:Router,private _AuthService:AuthService){}
ngOnInit(): void {
  
}
}
