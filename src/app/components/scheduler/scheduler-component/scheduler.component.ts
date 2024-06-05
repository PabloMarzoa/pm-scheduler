import {Component, Input} from '@angular/core';
import {ISchedulerEventModel} from "../models/scheduler.model";

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss'
})
export class SchedulerComponent {
  @Input() events: ISchedulerEventModel[] = [];

}
