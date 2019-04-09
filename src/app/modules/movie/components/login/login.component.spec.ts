import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { loginComponent } from './login.component';
import { userloginservice } from '../userAuthloginservice/userloginservice';
import { RouterTestingModule } from '@angular/router/testing';

describe('loginComponent', () => {
  let component: loginComponent;
  let fixture: ComponentFixture<loginComponent>;
  let userLoginServiceSpy:  jasmine.SpyObj<userloginservice>;
 let router: Router; 

  beforeEach(() => {
    fixture = TestBed.createComponent(loginComponent);
    userLoginServiceSpy = TestBed.get(userloginservice);
    userLoginServiceSpy.login.and.returnValue(of("token"));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login with valid user', inject([userloginservice], (service: userloginservice) => {
    component.userid="swathik";
    service.login("swathik", "Password");
    expect("swathik").toBe(component.userid);
  }));

  describe("login function", () => {
    beforeEach(() => {
      component.ngOnInit();
    });
  });
});


