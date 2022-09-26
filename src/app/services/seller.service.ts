import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SignUp } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  
  userSignUp(data:SignUp){
    const url = 'http://localhost:3000/seller';
    return this.http.post(url,data)
  }
}
