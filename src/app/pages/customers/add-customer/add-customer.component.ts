import { Component, OnInit, NgModule } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { BrowserModule } from "@angular/platform-browser";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { ReactiveFormsModule } from "@angular/forms";
// import { IntlModule } from "@progress/kendo-angular-intl";
// import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
// import { LabelModule } from "@progress/kendo-angular-label";
// import { ButtonsModule } from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  messagefirst_name = '';
  messagelast_name = '';
  messagenote = '';
  messageaddress = '';
  messagebirthday = '';
  messagephone = '';
  customer = {
    first_name: '',
    last_name: '',
    birthday: '',
    note: '',
    phone: '',
    address: '',
    create_user: '',
    update_user: '',
  };
  isCustomerAdded = false;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

  }
  createCustomer(): void {
    this.messagefirst_name = '';
    this.messagelast_name = '';
    this.messagenote = '';
    this.messagebirthday = '';
    this.messagephone = '';
    const data = {
      first_name: this.customer.first_name,
      last_name: this.customer.last_name,
      birthday: this.customer.birthday,
      note: this.customer.note,
      phone: this.customer.phone,
      address: this.customer.address,
      create_user: 'string',
      update_user: 'string',
    };
    if (!data.first_name) {
      this.messagefirst_name = 'Please add first_name!';
      // alert('Please add first_name!');  
      return;
    }
    else if (!data.last_name) {
      this.messagelast_name = 'Please add last_name!';
      //alert('Please add last_name!');
      return;
    }
    else if (!data.birthday) {
      //alert('Please add birthday!');
      this.messagebirthday = 'Please add birthday!';
      return;
    }
    else if (!data.note) {
      //alert('Please add note!');
      this.messagenote = 'Please add note!';
      return;
    }
    else if (!data.phone) {
      //alert('Please add phone!');
      this.messagephone = 'Please add phone!';
      return;
    }    
    console.log(data);
    this.customerService.createNewCustomer(data)
      .subscribe(
        response => {
          console.log(response);
          this.isCustomerAdded = true;
        },
        error => {
          console.log(error);
        });
  }

  // Reset on adding new
  newBook(): void {
    this.isCustomerAdded = false;
    this.customer = {
      first_name: '',
      last_name: '',
      birthday: '',
      note: '',
      phone: '',
      address: '',
      create_user: '',
      update_user: '',
    };
  }
}
