import { TaskSection } from './../../models/tasks.model';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { Subscription } from 'rxjs';
import { messageOnClosingDialgos } from 'src/utils/util';

@Component({
  selector: 'app-tasks-section',
  templateUrl: './tasks-section.component.html',
  styleUrls: ['./tasks-section.component.sass'],
})
export class TasksSectionComponent implements OnInit {
  @Input() section: TaskSection;

  subscriptions: Subscription[] = [];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addNewTask() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: { name: 'New Task', value: '' },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (!result || result == messageOnClosingDialgos) return;

        let id = (Math.random() + 1).toString(36).substring(7);
        this.section.tasks.unshift({
          id: id,
          isDone: false,
          showTask: true,
          text: result,
        });
      })
    );
  }
}
