import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Banca virtual';
  public isLogged$: Observable<boolean> = of(false);

  constructor(private authService: AuthService){
  }

  async ngOnInit(): Promise<void> {
   this.isLogged$ = this.authService.isLogged;
  }


  public loggout(): void{
    this.authService.loggoutUser();
  }

}
