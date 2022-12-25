import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

/* eslint-disable */

const baseData: any[] = [
    {
        "TaskID": 4,
        "OwnerID": 2,
        "Title": "Bowling tournament",
        "Description": "",
        "StartTimezone": null,
        "Start": "2022-11-10T00:00:00.000Z",
        "End": "2022-11-10T00:00:00.000Z",
        "EndTimezone": null,
        "RecurrenceRule": null,
        "RecurrenceID": null,
        "RecurrenceException": null,
        "IsAllDay": false
    }
];

const currentYear = new Date().getFullYear();
const parseAdjust = (eventDate: string): Date => {
    const date = new Date(eventDate);
    date.setFullYear(currentYear);
    return date;
};

const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const displayDate = new Date(currentYear, 5, 24);

export const sampleData = baseData.map(dataItem => (
    <SchedulerEvent> {
        id: dataItem.TaskID,
        start: parseAdjust(dataItem.Start),
        startTimezone: dataItem.startTimezone,
        end: parseAdjust(dataItem.End),
        endTimezone: dataItem.endTimezone,
        isAllDay: dataItem.IsAllDay,
        title: dataItem.Title,
        description: dataItem.Description,
        recurrenceRule: dataItem.RecurrenceRule,
        recurrenceId: dataItem.RecurrenceID,
        recurrenceException: dataItem.RecurrenceException,

        roomId: dataItem.RoomID,
        ownerID: dataItem.OwnerID
    }
));

export const sampleDataWithResources = baseData.map(dataItem => (
    <SchedulerEvent> {
        id: dataItem.TaskID,
        start: parseAdjust(dataItem.Start),
        startTimezone: dataItem.startTimezone,
        end: parseAdjust(dataItem.End),
        endTimezone: dataItem.endTimezone,
        isAllDay: dataItem.IsAllDay,
        title: dataItem.Title,
        description: dataItem.Description,
        recurrenceRule: dataItem.RecurrenceRule,
        recurrenceId: dataItem.RecurrenceID,
        recurrenceException: dataItem.RecurrenceException,
        roomId: randomInt(1, 2),
        attendees: [randomInt(1, 3)]
    }
));

export const sampleDataWithCustomSchema = baseData.map(dataItem => (
    {
        ...dataItem,
        Start: parseAdjust(dataItem.Start),
        End: parseAdjust(dataItem.End)
    }
));
