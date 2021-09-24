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
  searchTerm: string = '';
  isSearchActive: boolean = false;
  noMatches: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.tasksSections = [
      {
        id: 's-001',
        name: 'Design',
        showSection: true,
        tasks: [
          {
            id: 't-001',
            text: 'Prepare the overall layout',
            isDone: true,
            showTask: true,
          },
          {
            id: 't-002',
            text: 'Convert the design to HTML + CSS',
            isDone: false,
            showTask: true,
          },
          {
            id: 't-003',
            text: 'Make the design responsive and fits well with small screens',
            isDone: false,
            showTask: true,
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
            showTask: true,
          },
          {
            id: 't-005',
            text: 'Add the ability to toggle the side-menu',
            isDone: false,
            showTask: true,
          },
          {
            id: 't-006',
            text: 'Add the functionality to search through tasks',
            isDone: false,
            showTask: true,
          },
        ],
      },
      { id: 's-001', name: 'Extra', showSection: true, tasks: [] },
    ];
  }

  searchForTask() {
    this.noMatches = true;
    if (this.searchTerm != '')
      this.tasksSections.forEach((section) => {
        section.showSection = false;
        section.tasks.forEach((task) => {
          if (
            task.text
              .toLocaleLowerCase()
              .includes(this.searchTerm.toLocaleLowerCase())
          ) {
            task.showTask = true;
            this.noMatches = false;
            section.showSection = true;
          } else task.showTask = false;
        });
      });
    else this.resetAfterSearch();
  }

  resetAfterSearch() {
    this.noMatches = false;
    this.tasksSections.forEach((section) => {
      section.showSection = true;
      section.tasks.forEach((task) => {
        task.showTask = true;
      });
    });
  }
  toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }
}
