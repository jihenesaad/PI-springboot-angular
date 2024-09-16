import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { AdminService } from 'src/app/services/admin.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {

  myOrders:any;
  
  constructor(private customerService:CustomerService
    ,private login:AccountService,private adminService:AdminService){
  }
  ngOnInit(){
  //  this.getPlacedOrders();
  this.getMyOrders()
  console.log(this.login.userid)
  }

  getPlacedOrders(){
    this.adminService.getPlacedOrders().subscribe(res =>{
      this.myOrders = res;
      console.log(res);
    })
  }

 getMyOrders(){
    this.customerService.getOrdersByUserId().subscribe(res => {
      this.myOrders = res;
    })
  }

}
