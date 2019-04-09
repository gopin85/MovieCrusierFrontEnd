import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { userloginservice } from './userloginservice';

@Injectable({
    providedIn: 'root'
})

//Authentication guard service
export class UserLoginGuardService implements CanActivate {

    constructor(
        private router: Router,
        private userloginservice: userloginservice) { }

    canActivate() {
        if (!this.userloginservice.isTokenExpired()) {
            return true;
        }
        this.router.navigate(['/movies/userLogin']);
        return false;
    }
}