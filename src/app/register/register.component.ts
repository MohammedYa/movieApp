import { Component,OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators}from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})



















export class RegisterComponent implements OnInit{

  registerForm:FormGroup=new FormGroup(
    {
      'first_name':new FormControl( null,[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
      'last_name':new FormControl( null,[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
      'age':new FormControl( null,[Validators.required,Validators.max(60),Validators.min(16)]),
      'email':new FormControl( null,[Validators.required,Validators.email]),
      'password':new FormControl( null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)])

  })
supmitRegisterForm () {
  if(this.registerForm.invalid){
    return;
  }
  else{
    this._AuthService.register(this.registerForm.value).subscribe(
     (response)=>{
      if(response.message == 'success'){
        this.toastr.error(response.message, ' re!');

        this.toastr.success('register success', '')
        this._Router.navigateByUrl('/login')
     }
     else{
      this.toastr.error(response.message, 'error message!')

     }
    }
 );

}
 
}


















  constructor(private _Router:Router,private _AuthService:AuthService,private toastr: ToastrService){}

  ngOnInit(): void {
  }
}
