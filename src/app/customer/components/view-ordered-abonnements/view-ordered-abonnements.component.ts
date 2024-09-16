import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-view-ordered-abonnements',
  templateUrl: './view-ordered-abonnements.component.html',
  styleUrls: ['./view-ordered-abonnements.component.css']
})
export class ViewOrderedAbonnementsComponent {

  orderId: any = this.activatedRoute.snapshot.params['orderId'];
  orderedAbonnementDetailsList: {processedImg: string, byteImg: string }[] = []; // Définir le type explicitement
  totalAmount: any;

  constructor(private activatedRoute: ActivatedRoute,
    private customerService: CustomerService) {}

  ngOnInit() {
    this.getOrderedAbonnementsDetailsByOrderId();
  }

  getOrderedAbonnementsDetailsByOrderId() {
    this.customerService.getOrderedAbonnement(this.orderId).subscribe(res => {
      res.abonnementDtoList.forEach((element: { processedImg: string, byteImg: string }) => {
        element.processedImg = 'data:image/jpeg;baes64,' + element.byteImg;
        this.orderedAbonnementDetailsList.push(element);
      });
      this.totalAmount = res.orderAmount;
    });
  }
}
