import { Component } from '@angular/core';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noteappfrontend';
  private roles: string[] = [];
  isLoggedin = false;
  username?: string;
  constructor(private tokenService: TokenService) { }
  ngOnInit(): void {
    this.isLoggedin = !!this.tokenService.getToken();
    if (this.isLoggedin) {
      const user = this.tokenService.getUser();
      this.roles = user;

      // this.username = user.username;
    }
  }
  logout(): void {
    this.tokenService.signOut();
    window.location.reload();
  }
}

