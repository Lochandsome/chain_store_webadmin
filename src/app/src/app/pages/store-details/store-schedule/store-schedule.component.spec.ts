import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreScheduleComponent } from './store-schedule.component';

describe('StoreScheduleComponent', () => {
  let component: StoreScheduleComponent;
  let fixture: ComponentFixture<StoreScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
