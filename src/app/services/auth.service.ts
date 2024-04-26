import { Inject, inject, Injectable } from '@angular/core';
import { LoginRequest } from '../interfaces/login-request';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { LoginResponse } from '../interfaces/login-response';
import { Router } from '@angular/router';
import { Register } from '../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }
  apiUrl = environment.apiUrl;
  tokenKey: string = 'token';
  router = inject(Router)

  login(data: LoginRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}Users/Login`, data).pipe(
      map((response)=>{
        if(response.isSuccess){
          //localStorage.clear();
          localStorage.setItem(this.tokenKey, response.token)
        }
        this.router.navigate(['/register'])
        return response
      })
    );
  }

  logout(){
    localStorage.setItem(this.tokenKey, '');
  }

  
checkRouting(data: string): boolean {


 if(data == 'Admmin'){
  return true;
 }

  return false;
};
register(data: Register): Observable<string> {
  return this.http.post<string>(`${this.apiUrl}Users/Register`, data).pipe(
    map((response: string) => {
      if (response === 'Qilichdek Qilichbek') {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/register']);
      }
      return response;
    })
  );
}
}
