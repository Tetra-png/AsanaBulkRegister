import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AsanaProjectForList, AsanaSectionForList, AsanaTeamMemberForList, PostAsanaTaskRequest } from 'src/app/interfaces/asana.interface';
import { AsanaHttpService } from 'src/app/services/asana-http.service';
import { AsanaService } from 'src/app/services/asana.service';

@Component({
  selector: 'app-task-register',
  templateUrl: './task-register.component.html',
  styleUrls: ['./task-register.component.scss']
})
export class TaskRegisterComponent implements OnInit {

  personalAccessTokenFormControl = new FormControl("", [Validators.required])
  rPoint = new FormControl("", [Validators.min(1)])

  asanaProjects: AsanaProjectForList[] = []
  asanaSelectedProjectGid: string = ""

  asanaSections: AsanaSectionForList[] = []
  asanaSelectedSectionGid: string = ""

  asanaTeamMembers: AsanaTeamMemberForList[] = []
  asanaSelectedTeamMembersGid: string = ""

  selectedList1: string[] = []
  selectedList2: string[] = []
  selectedList3: string[] = []
  selectedList4: string[] = []

  taskNames: string[] = []

  showRegisterButton = false

  constructor(
    private asanaHttpService: AsanaHttpService,
    private asanaService: AsanaService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  async test(): Promise<void> {
    this.taskNames = this.asanaService.generateTaskNames(
      this.selectedList1,
      this.selectedList2,
      this.selectedList3,
      this.selectedList4
    )
    if(this.taskNames.length > 0) {
      this.showRegisterButton = true
    }
  }

  async register(): Promise<void> {
    if(
      this.personalAccessTokenFormControl.value ||
      this.asanaSelectedProjectGid ||
      this.asanaSelectedSectionGid ||
      this.asanaSelectedTeamMembersGid
    ) {
      this.taskNames = this.asanaService.generateTaskNames(
        this.selectedList1,
        this.selectedList2,
        this.selectedList3,
        this.selectedList4
      )

      const date = new Date()

      for(const taskName of this.taskNames) {
        let body: PostAsanaTaskRequest

        if(this.rPoint.value === ""){
          body = {
            data: {
              assignee: this.asanaSelectedTeamMembersGid,
              assignee_section: this.asanaSelectedSectionGid,
              name: taskName,
              projects: [this.asanaSelectedProjectGid],
              due_at: date.toISOString(),
            }
          }
        } else {
          body = {
            data: {
              assignee: this.asanaSelectedTeamMembersGid,
              assignee_section: this.asanaSelectedSectionGid,
              name: taskName,
              projects: [this.asanaSelectedProjectGid],
              due_at: date.toISOString(),
              custom_fields: {
                1200831022427516: parseInt(this.rPoint.value, 10)
              }
            }
          }
        }

        this.asanaHttpService.postTask(this.personalAccessTokenFormControl.value, body).subscribe()
        await new Promise(resolve => setTimeout(resolve, 300))
      }
    } else {
      this._snackBar.open("必須項目が足りません入力内容をご確認ください",'', {duration: 3000})
    }
  }

  init(): void {
    this.getProjects()
    this.getTeamMembers()
  }

  setProject(event: any): void {
    this.asanaSelectedProjectGid = event.value
    this.getSections()
  }

  setSection(event: any): void {
    this.asanaSelectedSectionGid = event.value
  }

  setTeamMember(event: any): void {
    this.asanaSelectedTeamMembersGid = event.value
  }

  private getProjects(): void {
    if(!!this.personalAccessTokenFormControl.value){
      this.asanaHttpService.getAsanaProjects(this.personalAccessTokenFormControl.value).subscribe({
        next: (res) => {
          this.asanaProjects = res.data
        },
        error: () => this._snackBar.open("プロジェクトの取得に失敗しましたPATを確認してください",'', {duration: 3000})
      })
    }
  }

  private getSections(): void {
    if(!!this.asanaSelectedProjectGid){
      this.asanaHttpService.getAsanaSections(this.personalAccessTokenFormControl.value, this.asanaSelectedProjectGid).subscribe({
        next: (res) => {
          this.asanaSections = res.data
        },
        error: () => this._snackBar.open("セクションの取得に失敗しましたPATを確認してください",'', {duration: 3000})
      })
    }
  }

  private getTeamMembers(): void {
    if(!!this.personalAccessTokenFormControl.value){
      this.asanaHttpService.getTeamMemberShip(this.personalAccessTokenFormControl.value).subscribe({
        next: (res) => {
          this.asanaTeamMembers = res.data
        },
        error: () => this._snackBar.open("担当者の取得に失敗しましたPATを確認してください" ,'', {duration: 3000})
      })
    }
  }
}

