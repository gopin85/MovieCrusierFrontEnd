import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userloginservice } from './modules/movie/components/userAuthloginservice/userloginservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  movieName = "";

  constructor(private router: Router, private userloginservice: userloginservice) {
  }

  searchMovie(): void {
    this.router.navigate(['/movies/searchlist', this.movieName]);
  }

  showToolbar() {
    return !this.userloginservice.isTokenExpired() && this.userloginservice.getToken() != "";
  }

  logOff() {
    this.userloginservice.deleteToken();
    this.router.navigate(['movies/userLogin']);
  }
}
