import { TaskSection } from './../../models/tasks.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-section',
  templateUrl: './tasks-section.component.html',
  styleUrls: ['./tasks-section.component.sass'],
})
export class TasksSectionComponent implements OnInit {
  @Input() section: TaskSection;
  constructor() {}

  ngOnInit(): void {}
}
