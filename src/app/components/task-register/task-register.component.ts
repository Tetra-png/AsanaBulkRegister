import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AsanaProjectForList, AsanaSectionForList, AsanaTeamMemberForList } from 'src/app/interfaces/asana.interface';
import { AsanaHttpService } from 'src/app/services/asana-http.service';
import { AsanaService } from 'src/app/services/asana.service';

@Component({
  selector: 'app-task-register',
  templateUrl: './task-register.component.html',
  styleUrls: ['./task-register.component.scss']
})
export class TaskRegisterComponent implements OnInit {

  personalAccessTokenFormControl = new FormControl("", [Validators.required])

  asanaProjects: AsanaProjectForList[]
  asanaSections: AsanaSectionForList[] = []
  asanaTeamMembers: AsanaTeamMemberForList[] = []

  selectedList1: string[] = []
  selectedList2: string[] = []
  selectedList3: string[] = []
  selectedList4: string[] = []

  taskNames: string[] = []

  constructor(
    private asanaHttpService: AsanaHttpService,
    private asanaService: AsanaService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

  }

  test(): void {
    this.taskNames = this.asanaService.generateTaskNames(
      this.selectedList1,
      this.selectedList2,
      this.selectedList3,
      this.selectedList4
    )
    console.log(this.taskNames)
  }

  getInitData(): void{
    if(this.personalAccessTokenFormControl?.value.length === 51) {
      this.getProjects()
      this.getTeamMembers()
    }
  }

  getSections(event: any): void {
    this.asanaHttpService.getAsanaSections(this.personalAccessTokenFormControl.value, event.value).subscribe({
      next: (res) => {
        this.asanaSections = res.data
      },
      error: () => this._snackBar.open("セクションの取得に失敗しましたPATを確認してください",'', {duration: 3000})
    })
  }

  private getProjects(): void {
    this.asanaHttpService.getAsanaProjects(this.personalAccessTokenFormControl.value).subscribe({
      next: (res) => {
        this.asanaProjects = res.data
      },
      error: () => this._snackBar.open("プロジェクトの取得に失敗しましたPATを確認してください",'', {duration: 3000})
    })
  }

  private getTeamMembers(): void {
    this.asanaHttpService.getTeamMemberShip(this.personalAccessTokenFormControl.value).subscribe({
      next: (res) => {
        this.asanaTeamMembers = res.data
      },
      error: () => this._snackBar.open("担当者の取得に失敗しましたPATを確認してください" ,'', {duration: 3000})
    })
  }

}

// 1/1201922927490494:9b118534a07f2435dc24703bfba4de45
