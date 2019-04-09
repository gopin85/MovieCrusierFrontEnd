import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RegisterationComponent } from './registeration.component';
import { Router } from '@angular/router';
import { userloginservice } from '../userAuthloginservice/userloginservice';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, Headers, HttpModule } from '@angular/http';

describe('RegisterationComponent', () => {
  let component: RegisterationComponent;
  let fixture: ComponentFixture<RegisterationComponent>;
  let userLoginServiceSpy: jasmine.SpyObj<userloginservice>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationComponent);
    userLoginServiceSpy = TestBed.get(userloginservice);
    userLoginServiceSpy.register.and.returnValue(of("token"));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("should navigate to user Login screen", () => {
    component.onCancel();
    expect(router.navigate).toHaveBeenCalledWith(['/movies/userLogin']);
  });
});
