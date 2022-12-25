import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../service/store.service';
import { AddressService } from '../../service/address.service';
import { StaffService } from '../../service/staff.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  HideButton = false;
  staff: any;
  constructor(private staffService: StaffService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.HideButton = false;
    this.staffService.getStaff
    //this.getByIdStaff(this.route.snapshot.paramMap.get('id'));
    this.getAllStaff();
  }
  HoverHiden(){
    this.HideButton =! this.HideButton;
  }
  getAllStaff(): void {
    this.staffService.getAllStaff()
      .subscribe(
        (status: any) => {
          this.staff = status;
          console.log(this.staff);
        },
        (error: any) => {
          console.log(error);
        });
  }

  DeleteStaffById(id: any) {
    this.staffService.RemoveStaffAsync(id).toPromise();
    this.ngOnInit();
  }


}
