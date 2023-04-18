import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private baseUrl: string="https://reqbin.com/sample/post/json"
  constructor(private http: HttpClient) { }

  signUp(userObj: any){
    return this.http.post<any>(`${this.baseUrl}`,userObj)
  }

  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}`,loginObj)
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token',tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean{
     return !!localStorage.getItem('token')
  }
}
