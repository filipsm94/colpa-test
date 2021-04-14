import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth/auth.service';
import { AuthServiceStub } from './shared/services/auth/auth.service.stub';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthService , useClass: AuthServiceStub }
      ]
    }).compileComponents();
    authService = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Banca virtual'`, () => {
    expect(component.title).toEqual('Banca virtual');
  });

  it('should call get AuthService logged', () => {
    spyOnProperty(authService, 'isLogged').and.returnValue(of(true));
    component.ngOnInit();
    expect(component.isLogged$).toBeTruthy();
  });

  it('should call loggoutUser', () => {
    spyOn(authService, 'loggoutUser');
    component.loggout();
    expect(authService.loggoutUser).toHaveBeenCalled();
  });
});
