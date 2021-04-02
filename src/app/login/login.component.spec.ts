import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IUserModel } from '../shared/models/user.model';
import { AuthService } from '../shared/services/auth/auth.service';
import { AuthServiceStub } from '../shared/services/auth/auth.service.stub';

import { LoginComponent } from './login.component';

class RouterStub {
  url = '';
  navigate(commands: any[], extras?: any) { }
}

describe('LoginComponent', () => {
  
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let authService: AuthService;
  let router: Router;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents();
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should submit', async () => {
    const mockUser: IUserModel = {
      nombre:'felipe',
      apellido:'mesa',
      cedula:10,
    }
    spyOn(authService,'loginUser').and.returnValue(Promise.resolve(mockUser));
    spyOn(authService,'saveUser');
    spyOn(component,'goToDashboard');
    component.loginForm = new FormBuilder().group({
      ['username']:'sadfsd',
      ['password']:'aAc3sdfasdg'
    })

    await component.submit();    
    expect(authService.saveUser).toHaveBeenCalled();
    expect(component.goToDashboard).toHaveBeenCalled();
  });


  it('should saveUserInStore', () => {
    const mockUser: IUserModel = {
      nombre:'felipe',
      apellido:'mesa',
      cedula:10,
    }
    spyOn(authService,'saveUser');
    component.saveUserInStore(mockUser);
    expect(authService.saveUser).toHaveBeenCalledWith(mockUser);
  });

  it('should goToDashboard', () => {
    spyOn(router,'navigate');
    component.goToDashboard();
    expect(router.navigate).toHaveBeenCalledWith(['/products']);
  });

});
