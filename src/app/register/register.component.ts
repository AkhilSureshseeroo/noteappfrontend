import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isRegisterFailed = false;
  errorMessage = 'not working';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }
  onSubmit():void{
    debugger
    const{username,userphone,password}=this.form;
    this.authService.register(username,userphone,password).subscribe({
      next:data =>{

        console.log(data);
        this.isSuccessful=true;
        this.isRegisterFailed=false;
      },
      error:err=>{
        this.errorMessage=err.error.message;
        this.isRegisterFailed=true;
      }
    })
  }

}
