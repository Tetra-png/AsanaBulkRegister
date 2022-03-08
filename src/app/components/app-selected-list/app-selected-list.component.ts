import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppAddKeywordDialogComponent } from '../app-add-keyword-dialog/app-add-keyword-dialog.component';

@Component({
  selector: 'app-app-selected-list',
  templateUrl: './app-selected-list.component.html',
  styleUrls: ['./app-selected-list.component.scss']
})
export class AppSelectedListComponent implements OnInit {
  @Input() keywords: string[] = []

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddKeyWordDialog(): void {
    const dialogRef = this.dialog.open(AppAddKeywordDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.keywords.push(result);
    });
  }

}
