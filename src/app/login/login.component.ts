import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRequestModel, IUserModel } from '../shared/models/user.model';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hasError = false;

  private infoLogin: AuthRequestModel;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)
      ]),
    });
    this.infoLogin = {
      username: '',
      password: ''
    };
  }

  get username(): any { return this.loginForm.get('username'); }
  get password(): any { return this.loginForm.get('password'); }

  ngOnInit(): void {
  }

  public async submit(): Promise<void> {
    this.infoLogin = {...this.loginForm.value};
    try {
      const user = await this.authService.loginUser(this.infoLogin);
      this.saveUserInStore(user);
      this.goToDashboard();
    } catch (error) {
      this.hasError = true;
    }
  }

  public saveUserInStore(user: IUserModel): void{
    this.authService.saveUser(user);
  }

  public goToDashboard(): void{
    this.router.navigate(['/products']);
  }

}
