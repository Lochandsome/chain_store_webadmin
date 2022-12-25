import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.scss']
})
export class EditStoreComponent implements OnInit {

  currentStore: any;
  message = '';
  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getByIdStore(this.route.snapshot.paramMap.get('id'));
  }

  getByIdStore(id: string|null): void {
    this.storeService.getItemById(id)
      .subscribe(
        (store: any) => {
          this.currentStore = store;
        },
        (error: any) => {
          console.log(error);
        });
  }
  updateStore(): void {
    this.storeService.EditStore(this.currentStore.id, this.currentStore)
      .subscribe(
        response => {
          this.message = 'Update Store Success!';
        },
        error => {
          console.log(error);
        });
  }

}
