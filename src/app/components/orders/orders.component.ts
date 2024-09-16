import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders:any;
  constructor(private adminService:AdminService,
    private snackBar:MatSnackBar
  ){}

  ngOnInit(){
    this.getPlacedOrders();
  }

  getPlacedOrders(){
    this.adminService.getPlacedOrders().subscribe(res =>{
      this.orders = res;
      console.log(res);
    })
  }
  changeOrderStatus(orderId:number , status:string){
    this.adminService.changeOrderStatus(orderId,status).subscribe(res =>{
      if(res.id !=null){
        this.snackBar.open("Order Status changed successfully" , "Close", {
          duration:5000 });
          this.getPlacedOrders();
      }else{
        this.snackBar.open("Something Went wrong" , "Close" ,{
          duration :5000});
      }
    })
  }

}
