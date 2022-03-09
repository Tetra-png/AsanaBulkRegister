import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectionList } from '@angular/material/list';
import { AppAddKeywordDialogComponent } from '../app-add-keyword-dialog/app-add-keyword-dialog.component';

@Component({
  selector: 'app-app-selected-list',
  templateUrl: './app-selected-list.component.html',
  styleUrls: ['./app-selected-list.component.scss']
})
export class AppSelectedListComponent implements OnInit {
  @Output() changeSelected = new EventEmitter<string[]>()
  @ViewChild("selectionList") selectionList: MatSelectionList;

  keywords: string[] = []
  selectedOptions: string[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddKeyWordDialog(): void {
    const dialogRef = this.dialog.open(AppAddKeywordDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!!result) {
        this.keywords.push(result);
      }
    });
  }

  onNgModelChange(event: any){
    this.changeSelected.emit(event)
  }

}
