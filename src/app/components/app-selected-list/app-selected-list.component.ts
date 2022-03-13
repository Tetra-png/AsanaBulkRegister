import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AsanaTaskSelectionForList } from 'src/app/interfaces/asana.interface';
import { AppAddKeywordDialogComponent } from '../app-add-keyword-dialog/app-add-keyword-dialog.component';

@Component({
  selector: 'app-app-selected-list',
  templateUrl: './app-selected-list.component.html',
  styleUrls: ['./app-selected-list.component.scss']
})
export class AppSelectedListComponent implements OnInit {
  @Output() changeSelected = new EventEmitter<string[]>()
  @ViewChild("selectionList") selectionList: MatSelectionList;

  keywords: AsanaTaskSelectionForList[] = []

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openAddKeyWordDialog(): void {
    const dialogRef = this.dialog.open(AppAddKeywordDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      const isDuplicate = this.keywords.find(k => k.value === result)
      if(isDuplicate) {
        this._snackBar.open("重複する項目は登録できません",'', {duration: 3000})
        return
      }
      if(!!result) {
        this.keywords.push({
          value: result,
          selected: true
        });
        this.outputComponent()
      }
    });
  }

  toggleSelected(keyword: AsanaTaskSelectionForList) {
    const toggleKeywordIndex = this.keywords.findIndex(k => k.value === keyword.value)
    this.keywords[toggleKeywordIndex].selected = !this.keywords[toggleKeywordIndex].selected
    this.outputComponent()
  }

  private outputComponent(): void {
    this.changeSelected.emit(this.keywords.filter(k => k.selected).map(v => v.value))
  }
}
