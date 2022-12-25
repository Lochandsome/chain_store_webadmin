import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ComponentsModule } from './components/components.module';
import { TokenStorageService } from './service/token-storage.service';
import { JwtModule } from "@auth0/angular-jwt";
import { ToastrModule } from 'ngx-toastr';
import { GridModule } from '@progress/kendo-angular-grid';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { StoreScheduleComponent } from './src/app/pages/store-details/store-schedule/store-schedule.component';
import { ScheduleComponent } from './src/app/pages/store-details/storeSchedule/schedule/schedule.component';
import { SchedulerComponent } from './src/app/pages/store-details/storeSchedule/scheduler/scheduler.component';

import { BrowserModule } from '@angular/platform-browser';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { EditStoreComponent } from './pages/store-details/edit-store/edit-store.component';
//import { AddOrderComponent } from './pages/orders/add-order/add-order.component';
//Material
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';

// Revenus
//import { ChartModule } from '@syncfusion/ej2-ng-charts';


export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    StoreScheduleComponent,
    ScheduleComponent,
    SchedulerComponent,
    EditStoreComponent,
    //AddOrderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200"],
        disallowedRoutes: []
      }
    }),
    ToastrModule.forRoot(
      {
        timeOut: 1000,
        positionClass: 'toast-bottom-full-width',
        preventDuplicates: true,
      }
    ),
    GridModule,
    SchedulerModule,
    DateInputsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  providers: [TokenStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
