import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../service/store.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/service/dashboard.services';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  stores : any;
  //
  someBill: any;
  profitLastMonth: any;
  TopProduct: any;
  Descen: any;
  constructor(private service: StoreService,
    private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.service.getStore()
      .subscribe(respont =>{
        this.stores = respont;


      });
      this.GetCalculateLastMonth();
      this.GetBetSellingProduct();
  }
  GetCalculateLastMonth() {
    this.dashboardService.GetCalculateLastMonth()
      .subscribe(
        (Status: any) => {
          this.someBill = Status[0].count;
          this.profitLastMonth = Status[0].total;
        },
        (error: any) => {
          console.log(error);
        });
  }
  GetBetSellingProduct() {
    this.dashboardService.GetBetSellingProduct()
      .subscribe(
        (Status: any) => {
          Status.forEach((obj: any) => {
            if (obj.maxValue != null)
              this.TopProduct = obj.maxValue.nameProduct;
            else
              this.Descen = obj.minValue.nameProduct;
          });
        },
        (error: any) => {
          console.log(error);
        });
  }
  clickStore(id: string )
  {
    this.router.navigate(["chain-store/detail",id]);
  }

}
