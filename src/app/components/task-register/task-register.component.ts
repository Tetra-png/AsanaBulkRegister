import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSelectionList } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable, startWith } from 'rxjs';
import { AsanaProjectForList, AsanaSectionForList, GetAsanaProjectResponse } from 'src/app/interfaces/asana.interface';
import { AsanaHttpService } from 'src/app/services/asana-http.service';

@Component({
  selector: 'app-task-register',
  templateUrl: './task-register.component.html',
  styleUrls: ['./task-register.component.scss']
})
export class TaskRegisterComponent implements OnInit {

  personalAccessTokenFormControl = new FormControl("", [Validators.required])

  asanaProjects: AsanaProjectForList[]
  asanaSections: AsanaSectionForList[] = []

  selectedList1: string[]
  selectedList2: string[]
  selectedList3: string[]
  selectedList4: string[]

  constructor(
    private asanaHttpService: AsanaHttpService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

  }

  test(): void {
    console.log(this.selectedList1)
    console.log(this.selectedList2)
    console.log(this.selectedList3)
    console.log(this.selectedList4)
  }

  getProjects(): void {
    this.asanaHttpService.getAsanaProjects(this.personalAccessTokenFormControl.value).subscribe({
      next: (res) => {
        this.asanaProjects = res.data
      },
      error: () => this._snackBar.open("プロジェクトの取得に失敗しましたPATを確認してください")
    })
  }

  getSections(event: any): void {

    this.asanaHttpService.getAsanaSections(this.personalAccessTokenFormControl.value, event.value).subscribe({
      next: (res) => {
        this.asanaSections = res.data
      },
      error: () => this._snackBar.open("セクションの取得に失敗しましたPATを確認してください")
    })
  }

}

// 1/1201922927490494:e6b17bbc5bc3453d9accc8d4d1991438
