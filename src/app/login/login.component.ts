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
  public hasError = false
  
  private infoLogin: AuthRequestModel;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(null,[
        Validators.required,
        Validators.minLength(4)]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/) 
      ]),
    });
    this.infoLogin = {
      username:'',
      password:''
    }
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit(): void {
  }

  async submit(): Promise<void> {
    console.log('logueando');
    this.infoLogin = {...this.loginForm.value};
    try {
      const user = await this.authService.loginUser(this.infoLogin)
      this.saveUserInStore(user);
      this.goToDashboard();
    } catch (error) {
      this.hasError = true;
    }
  }

  saveUserInStore(user: IUserModel){
    this.authService.saveUser(user)
  }

  goToDashboard():void{
    console.log('entre');
    
    this.router.navigate(['/products']);
  }

}
