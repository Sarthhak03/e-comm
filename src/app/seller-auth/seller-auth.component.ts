import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../data-types';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(
    private seller:SellerService,
    private route:Router) { }

  ngOnInit(): void {
  }

  sellerSignUp(data:SignUp):void{
    this.seller.userSignUp(data).subscribe((res)=>{
      console.warn(res);
      if(res){
        this.route.navigate(['seller-home']);
      }
    });
  }

}
