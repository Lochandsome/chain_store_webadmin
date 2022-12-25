import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { StaffService } from 'src/app/service/staff.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { strings } from '@material/form-field';
// import * as $ from "jquery";
// import * as Mustache from 'mustache';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  message: any;
  NameStaff: any;
  IDStaff: any;
  BillStatus: any;
  PaymentMethos: any;
  PMethos = 0;
  BStatus = 0;
  AllProduct: any;
  //  
  productItem: any;
  productName: any;
  priceSelect: any;
  categorySelect: any;
  total: any;
  previsional: any;
  keyword = "name";
  countNum: any;
  countIndex:any;
  countValue:any;
  productImport: any = [];
  StaffWithAccountId: any;
  accountid: any;
  CreateBill = {
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerMessage: "",
    customerAddress: "",
  };
  date: any;
  orderProductDetails: any = [];

  constructor(private orderService: OrderService, private productService: ProductService,
    private staffService: StaffService
  ) {
    //var myDate = this.datepipe.transform((new Date(new Date().setSeconds(0,0)).toISOString()));
  }

  ngOnInit(): void {
    this.getPaymentMethos();
    this.message = "";
    this.getBillStatus();
    this.NameStaff = localStorage.getItem('username');
    this.IDStaff = localStorage.getItem('id');
    this.productService.getAllProduct().subscribe(data => this.AllProduct = data);
    this.accountid = localStorage.getItem('accountid');
    this.selectedStaffWithAccountId(this.accountid);    
  }
  selectedStaffWithAccountId(accountid: any) {
    this.staffService.getStaffwithaccountid(accountid).subscribe((data) => {
      this.StaffWithAccountId = data;
    });
  }
  selectedPaymentMethos(e: any) {
    this.PMethos = e;
    console.log(this.PMethos);
  }
  selectedBillStatus(e: any) {
    this.BStatus = e;
    console.log(this.BStatus);
  }
  selectProduct(e: any) {
    this.productItem = e;
    this.productName = e.name;
    this.priceSelect = e.price;
    this.categorySelect = e.category.name;
  }
  inputClearedProduct(e: any) {
    this.productItem = null;
  }
  trackByFn(item:any, obj:any){
    return obj  
  }
  changeCount(cou: any, countValue: any) {
    console.log(cou, countValue);
    this.countIndex = Number(cou);
    this.countValue = Number(countValue);
    this.eventButtonAdd();
  }
  removeProduct(i: number) {
    var sum = 0, arrlength: any = [];
    arrlength = this.productImport;
    if ((arrlength.length - 1) > 0) {
      this.productImport.splice(i, 1);
      console.log(this.productImport);
      if (this.productImport.length == 0) {
        this.productImport = null;
      }
      this.productImport.forEach(function (value: any) {
        sum += value.total;
      });
      this.previsional = sum;
    }
  }
  eventButtonAdd() {
    // var sum = 0;
    // this.message = "";
    // this.total = Number(this.count) * Number(this.priceSelect);
    // this.productImport.push({ name: this.productName, count: this.count, price: this.priceSelect, category: this.categorySelect, total: this.total });
    // this.productImport.forEach(function (value: any) {
    //   sum += value.total;
    // });
    // this.previsional = sum;
    // this.orderProductDetails.push({ product: this.productItem, count: this.count })
    this.message = "";
    var sum = 0, productExists: any = [];

    productExists = this.productItem;    
    if (productExists == null) {
      this.productImport[this.countIndex].orderProductDetails.count = Number(this.countValue);      
      this.productImport[this.countIndex].total = Number(this.countValue) * Number(this.productImport[this.countIndex].orderProductDetails.product.price); 
    }
    else {
      var isPresent = this.productImport.some(function (el: any) { return el.orderProductDetails.product.id == productExists.id });

      if (isPresent == false) {
        this.total = Number(this.countNum) * Number(this.productItem.price);
        this.productImport.push({ orderProductDetails: { product: this.productItem, count: this.countNum }, total: this.total });
      }
      else {
        console.log(this.productImport);
        this.productImport.map((val: any) => {
          if (val.orderProductDetails.product.id == productExists.id) {
            var newCount = Number(val.orderProductDetails.count) + Number(this.countNum);
            this.total = Number(newCount) * Number(val.orderProductDetails.product.price);
            val.orderProductDetails.count = newCount;
            val.total = this.total;
          }
        });
      }
    }
    this.productImport.forEach(function (value: any) {
      sum += value.total;
    });
    this.previsional = sum;
  }
  getStaffCreated(): void {
    localStorage.getItem('username')
  }
  getBillStatus(): void {
    this.orderService.getBillStatus()
      .subscribe(
        (Status: any) => {
          this.BillStatus = Status;
        },
        (error: any) => {
          console.log(error);
        });
  }
  getPaymentMethos(): void {
    this.orderService.getPaymentMethos()
      .subscribe(
        (Payment: any) => {
          this.PaymentMethos = Payment;
        },
        (error: any) => {
          console.log(error);
        });
  }
  createBill(): void {
    var oPDetails: any = [];
    this.productImport.forEach((val: any) => {
      oPDetails.push({ product: val.orderProductDetails.product, count: val.orderProductDetails.count });
    });
    this.date = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString();
    
    const data = {
      orderDate: this.date,
      lastEditDate: this.date,
      orderStaff:
        this.StaffWithAccountId,
      customerName: this.CreateBill.customerName,
      customerEmail: this.CreateBill.customerEmail,
      customerPhone: this.CreateBill.customerPhone.toString(),
      customerMessage: this.CreateBill.customerMessage,
      customerAddress: this.CreateBill.customerAddress,
      billStatus: Number(this.BStatus),
      paymentMethos: Number(this.PMethos),
      orderDetails:
        oPDetails,
      totalRecord: this.previsional.toString()
    };
    
    this.orderService.createNewBill(data)
      .subscribe(
        response => {
          console.log(response);
          console.log("thêm mới thành công");
        },
        error => {
          console.log(error);
        });
  }

}
