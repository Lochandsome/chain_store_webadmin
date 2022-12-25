import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  currentCustomer: any;
  message = '';
  constructor(
    private customerServicee: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getByIdCustomer(this.route.snapshot.paramMap.get('id'));
  }

  getByIdCustomer(id: string | null): void {
    this.customerServicee.getItemById(id)
      .subscribe(
        (customer: any) => {
          this.currentCustomer = customer;
        },
        (error: any) => {
          console.log(error);
        });
  }
  updateCustomer(): void {
    this.customerServicee.EditCustomer(this.currentCustomer.id, this.currentCustomer)
      .subscribe(
        response => {
          this.message = 'Update Customer Success!';
        },
        error => {
          console.log(error);
        });
  }

}
