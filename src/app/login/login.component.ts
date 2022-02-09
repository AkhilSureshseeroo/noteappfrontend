import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any={
    username:null,
    password:null
  };
  isLoggedin=false;
  isLoginfailed=false;
  errorMessage='';
  roles:string[]=[];

  constructor(private authService:AuthService,private token:TokenService) { }

  ngOnInit(): void {
    if(this.token.getToken()){
      this.isLoggedin = true;
      this.roles = this.token.getUser().roles;
    }
  }
  onSubmit():void{
    const{username,password}=this.form;
    this.authService.login(username,password).subscribe({
      next:data =>{
        this.token.saveToken(data.accessToken);
        this.token.saveUser(data);
        this.isLoginfailed = false;
        this.isLoggedin = true;
        this.roles = this.token.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginfailed = true;
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }

}
