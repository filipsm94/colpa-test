import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Banca virtual';
  public isLogged = true;

  constructor(private authService: AuthService){
  }

  async ngOnInit(): Promise<void> {
    if(await this.authService.isLoggedIn()){
      this.isLogged = true
    }
  }


  loggout(){
    this.authService.loggoutUser();
  }

}
