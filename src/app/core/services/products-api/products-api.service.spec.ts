import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UrlConstans } from 'src/app/shared/constans/url-constant.model';
import { IUserModel } from 'src/app/shared/models/user.model';
import { ProductsApiService } from './products-api.service';


describe('ProductsApiService', () => {
  let service: ProductsApiService;
  let httpMock: HttpTestingController;
  const responseMock = {
    data: {

    },
    notification: {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsApiService,
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ProductsApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should be getAllProductsToUser successful', () => {
    const mockUser: IUserModel = {
      nombre: 'felipe',
      apellido: 'mesa',
      cedula: 10,
    };

    service.getAllProductsToUser(mockUser
      ).then((response) => {
        expect(response).toBeDefined();
    });
    const request = httpMock.expectOne(`${UrlConstans.apiUrl}9862c578-93a5-4e97-bbbf-966d286ff1dc`);
    expect(request.request.method).toBe('POST'); ``;
    request.flush(responseMock, {
      headers: {
        'X-UUID-USER': 'xx1'
      }
    });
  });

  it('should be getAllProductsToUser error', () => {
    const mockUser: IUserModel = {
      nombre: 'felipe',
      apellido: 'mesa',
      cedula: 10,
    };

    service.getAllProductsToUser(mockUser
      ).then((response) => {
    }).catch((error) => {
      expect(error).toBeDefined();
    });
    const request = httpMock.expectOne(`${UrlConstans.apiUrl}9862c578-93a5-4e97-bbbf-966d286ff1dc`);
    expect(request.request.method).toBe('POST');
    request.flush(responseMock, {
      status: 401, statusText: 'error',
      headers: {
        'X-UUID-USER': 'xx1'
      }
    });
  });


  it('should be getAllTransactionToAccount successful', () => {

    service.getAllTransactionToAccount('12312412').then((response) => {
      expect(response).toBeDefined();
    });
    const request = httpMock.expectOne(`${UrlConstans.apiUrl}97281e7a-59b1-4c99-9cce-3626b61106d3`);
    expect(request.request.method).toBe('POST');
    request.flush(responseMock, {
      headers: {
        'X-UUID-USER': 'xx1'
      }
    });
  });

  it('should be getAllTransactionToAccount error', () => {

    service.getAllTransactionToAccount('12312412').then((response) => {
    }).catch((error) => {
      expect(error).toBeDefined();
    });
    const request = httpMock.expectOne(`${UrlConstans.apiUrl}97281e7a-59b1-4c99-9cce-3626b61106d3`);
    expect(request.request.method).toBe('POST');
    request.flush(responseMock, {
      status: 401, statusText: 'error',
      headers: {
        'X-UUID-USER': 'xx1'
      }
    });
  });
});
