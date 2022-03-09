import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-app-add-keyword-dialog',
  templateUrl: './app-add-keyword-dialog.component.html',
  styleUrls: ['./app-add-keyword-dialog.component.scss']
})
export class AppAddKeywordDialogComponent implements OnInit {
  data = "";

  constructor(
    public dialogRef: MatDialogRef<AppAddKeywordDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  onClickDismiss(): void {
    this.dialogRef.close();
  }

  onClickSubmit(): void {
    const trimData = this.data.trim()
    if(trimData.length > 0) {
      this.dialogRef.close(trimData)
    }
  }
}
