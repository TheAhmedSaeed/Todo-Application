import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { messageOnClosingDialgos } from 'src/utils/util';

export interface DialogData {
  name: string;
  value: string;
}

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.sass'],
})
export class AddDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<AddDialogComponent>
  ) {}

  ngOnInit(): void {
    this;
  }

  onNoClick() {
    this.dialogRef.close(messageOnClosingDialgos);
  }
}
