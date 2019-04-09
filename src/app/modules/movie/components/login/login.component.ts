import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userloginservice } from '../userAuthloginservice/userloginservice';

//Userlogin Component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {

  userid: string;
  password: string;
  validationError: string[] = [];
  constructor(private userLoginService: userloginservice, private router: Router) { }

  ngOnInit() {
  }

  //user login
  loginUser() {
    this.userLoginService.login(this.userid, this.password)
      .then((obj) => {
        if (obj) {
          this.userLoginService.setToken(JSON.parse(obj).token, this.userid);
          this.userLoginService.setUserId(this.userid);
          this.router.navigate(['/movies/popular']);
        }
      }).catch(error => {
        this.validationError.push("Invalid Username and Password");
      });
  }

  //navigating to registration page
  registerUser() {
    this.router.navigate(['/movies/registeration']);
  }
}
