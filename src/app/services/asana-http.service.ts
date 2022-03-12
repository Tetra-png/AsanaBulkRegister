import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAsanaProjectResponse, GetAsanaSectionsResponse, GetAsanaTeamMembersResponse, PostAsanaTaskRequest, PostAsanaTaskResponse } from '../interfaces/asana.interface';

@Injectable()
export class AsanaHttpService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAsanaProjects(personalAccessToken: string): Observable<GetAsanaProjectResponse> {
    const url = "https://app.asana.com/api/1.0/projects"
    const headers = {
      Authorization: `Bearer ${personalAccessToken}`
    }
    return this.httpClient.get<GetAsanaProjectResponse>(url, {headers})
  }

  getAsanaSections(personalAccessToken: string, projectGid: string): Observable<GetAsanaSectionsResponse> {
    const url = "https://app.asana.com/api/1.0/projects/{project_gid}/sections".replace("{project_gid}", projectGid)
    const headers = {
      Authorization: `Bearer ${personalAccessToken}`
    }
    return this.httpClient.get<GetAsanaSectionsResponse>(url, {headers})
  }

  getTeamMemberShip(personalAccessToken: string): Observable<GetAsanaTeamMembersResponse> {
    const url = "https://app.asana.com/api/1.0/users"
    const headers = {
      Authorization: `Bearer ${personalAccessToken}`
    }
    return this.httpClient.get<GetAsanaTeamMembersResponse>(url, {headers})
  }

  postTask(personalAccessToken: string, body: PostAsanaTaskRequest): Observable<PostAsanaTaskResponse> {
    const url = "https://app.asana.com/api/1.0/tasks"
    const headers = {
      Authorization: `Bearer ${personalAccessToken}`
    }
    return this.httpClient.post<PostAsanaTaskResponse>(url, body, {headers})
  }

}
