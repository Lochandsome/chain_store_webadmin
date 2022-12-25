import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
// Kendo Scheduler
import { SchedulerEvent } from "@progress/kendo-angular-scheduler";

@Component({    
    template: `
        <kendo-scheduler [kendoSchedulerBinding]="events"
                         [selectedDate]="selectedDate"
                         style="height: 600px;">
            <kendo-scheduler-week-view startTime="07:00">
            </kendo-scheduler-week-view>
        </kendo-scheduler>
    `
})
export class appStoreSchedule {
    public selectedDate: Date = new Date('2018-10-22T00:00:00');
    public events: SchedulerEvent[] = [{
        id: 1,
        title: 'Breakfast',
        start: new Date('2018-10-22T09:00:00'),
        end: new Date('2018-10-22T09:30:00'),
        // recurrenceRule: 'FREQ=DAILY;COUNT=5;'
        recurrenceRule: ''
    }];
}