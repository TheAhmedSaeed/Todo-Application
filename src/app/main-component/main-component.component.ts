import { TaskSection } from './../../models/tasks.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.sass'],
})
export class MainComponentComponent implements OnInit {
  showSideNav = true;
  tasksSections: TaskSection[];
  searchResults: TaskSection[];

  constructor() {}

  ngOnInit(): void {
    this.tasksSections = [
      {
        id: 's-001',
        name: 'Design',
        showSection: true,
        tasks: [
          { id: 't-001', text: 'Prepare the overall layout', isDone: true },
          {
            id: 't-002',
            text: 'Convert the design to HTML + CSS',
            isDone: false,
          },
          {
            id: 't-003',
            text: 'Make the design responsive and fits well with small screens',
            isDone: false,
          },
        ],
      },
      {
        id: 's-002',
        name: 'functionality',
        showSection: true,
        tasks: [
          {
            id: 't-004',
            text: 'Add the functionality to mark tasks as completed',
            isDone: false,
          },
          {
            id: 't-005',
            text: 'Add the ability to toggle the side-menu',
            isDone: false,
          },
          {
            id: 't-006',
            text: 'Add the functionality to search through tasks',
            isDone: false,
          },
        ],
      },
      { id: 's-001', name: 'Extra', showSection: true, tasks: [] },
    ];
  }

  toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }
}
