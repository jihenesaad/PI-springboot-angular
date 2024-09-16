import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent {

  coupons:any;

  constructor(private adminService:AdminService){ }

  ngOnInit(){
    this.getCoupons();
  }

  getCoupons(){
    this.adminService.getCoupons().subscribe(res=>{
      this.coupons= res;
    })
  }

}
