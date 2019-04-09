import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { User } from '../../user';
import { Http, Headers } from '@angular/http';
import { catchError } from 'rxjs/operators';
export const TOKEN_NAME: string = 'jwt_token';
export const USER_ID: string = 'user_id';


@Injectable({
  providedIn: 'root'
})
export class userloginservice {


  constructor(private http: Http) { }
  private authServiceUrl = "http://localhost:49880/auth/login/";
  private registerServiceUrl = "http://localhost:49880/auth/register/";
  userId: string = "";

  //To register user
  register(user: User) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const json = JSON.stringify(user);

    return this.http.post(this.registerServiceUrl, json, { headers: headers })
      .toPromise()
      .then(res => res.status === 201)
      .catch(this.handleRegisterationError);
  }

  //get token from local storage 
  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  //set token to local storage 
  setToken(token: string, userId): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  //set user id
  setUserId(userId: string): void {
    this.userId = userId;
    sessionStorage.setItem('id', userId);
  }

  //retrieve user id
  getUserId() {
    return sessionStorage.getItem('id');
  }

  //to delete token
  deleteToken(): void {
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem(USER_ID);
  }

  //token expiration time and date
  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) return null;
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  //to check token expired or not
  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;
    const date = this.getTokenExpirationDate(token);
    if (!date) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  //user to login
  login(userId: string, password: string) {
    const user = { userId, password };
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const json = JSON.stringify(user);

    return this.http.post(this.authServiceUrl, json, { headers: headers })
      .toPromise()
      .then(res => {
        const token = res.json();
        return token;
      })
      .catch(this.handleError);
  }

  //error handling
  handleError() {
    return Error("Invalid Login");
  }

  //registeration error handling
  handleRegisterationError() {
    return Error("Invalid Registeration");
  }
}

