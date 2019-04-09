import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userloginservice } from '../userAuthloginservice/userloginservice';
import { User } from '../../user';

//Registeration Component
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})

export class RegisterationComponent implements OnInit {
  public userId: string;
  public password: string;
  public confirmPassword: string;
  public firstName: string;
  public lastName: string;
  validationErrors: string[] = [];
  constructor(private userLoginService: userloginservice, private router: Router) { }

  ngOnInit() {
  }

  //on clicking submit - to register user
  public onSubmit() {
    if (this.userId && this.password && this.confirmPassword && this.firstName && this.lastName && this.password === this.confirmPassword) {
      const user: User = {
        userid: this.userId,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      };

      this.userLoginService.register(user).then(result => {
        if (result) {
          this.router.navigate(['/movies/userLogin']);
        }
      })
        .catch(() => this.handleError());
    }
  }

 //Error handling
  handleError() {
    this.validationErrors.push("Error occured");
  }

  //To cancel registeration process
  public onCancel() {
    this.router.navigate(['/movies/userLogin']);
  }

}
