import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { PaginationComponent } from '../../pagination/pagination/pagination.component';
import { StoreComponent } from '../../pages/store/store.component';
import { AddStoreComponent } from '../../pages/add-store/add-store.component';
import { ProductsComponent } from '../../pages/products/products.component';
import { PartnersComponent } from '../../pages/partners/partners.component';
import { OrdersComponent } from '../../pages/orders/orders.component';
import { AddOrderComponent } from '../../pages/orders/add-order/add-order.component';
import { EditOrderComponent } from '../../pages/orders/edit-order/edit-order.component';
import { CustomersComponent } from '../../pages/customers/customers.component';
import { StoreDetailsComponent } from '../../pages/store-details/store-details.component';
import { CategoryComponent } from '../../pages/products/category/category.component';
import { StaffComponent } from '../../pages/staff/staff.component';
import { AddStaffComponent } from '../../pages/staff/add-staff/add-staff.component';
import { ProfileComponent } from '../../pages/staff/profile/profile.component';
import { AddProductComponent } from '../../pages/products/add-product/add-product.component';
import { ImportProductComponent } from '../../pages/inventory-manager/import-product/import-product.component';
import { InventoryComponent } from '../../pages/inventory-manager/inventory/inventory.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { EditCustomerComponent } from '../../pages/customers/edit-customer/edit-customer.component';
import { AddCustomerComponent } from '../../pages/customers/add-customer/add-customer.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    GridModule,
    SchedulerModule,
    MatSlideToggleModule,
    NgxDaterangepickerMd.forRoot()
  ],
  declarations: [
    DashboardComponent,
    PaginationComponent,
    StoreComponent,
    ProfileComponent,
    AddStoreComponent,
    ProductsComponent,
    PartnersComponent,
    OrdersComponent,
    CustomersComponent,
    StoreDetailsComponent,
    CategoryComponent,
    StaffComponent,
    AddStaffComponent,
    AddProductComponent,
    ImportProductComponent,
    InventoryComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    AddOrderComponent,
    EditOrderComponent
  ]
})

export class AdminLayoutModule {}
